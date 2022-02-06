import { Card, CardBody, CardTitle } from 'reactstrap';
import { format, subDays } from 'date-fns';
import { toast } from 'react-toastify';
import { useEffect, useCallback, useState } from 'react';
import { get, FetchException } from 'helpers/api';
import Chart, { Colors } from 'ui/chart/chart';
import { ChartData } from 'ui/chart/types';
import Filters, { FilterValue } from 'ui/chart/filters';
import DateInfo from 'ui/common/dateInfo';

interface AccountsStatsDataObject {
  date: string,
  contract: number,
  token: number,
  total: number,
}

const dateFormat = 'yyyy-MM-dd';

function AccountsPanel() {
  const [data, setData] = useState<ChartData>({ datasets: [] });
  const [filters] = useState([
    { name: '7D', value: 7 },
    { name: '1M', value: 30 },
    { name: '3M', value: 90 },
    { name: '1Y', value: 365 },
    { name: 'MAX', value: null },
  ]);
  const [timeFilter, setTimeFilter] = useState<FilterValue>(7);

  const transposeToChartFormat = (dataObj: AccountsStatsDataObject[]) => {
    const labels: string[] = [];
    const output: ChartData = {
      datasets: [
        {
          type: 'line',
          label: 'Total',
          color: Colors.orange,
          yAxisID: 'left',
          data: [] as number[],
        },
        {
          type: 'bar',
          label: 'Contracts',
          color: Colors.green,
          yAxisID: 'right',
          data: [] as number[],
        },
        {
          type: 'bar',
          label: 'Token',
          color: Colors.blue,
          yAxisID: 'right',
          data: [] as number[],
        },
      ],
    };
    dataObj.forEach((row) => {
      labels.push(row.date);
      output.datasets[0].data.push(row.total);
      output.datasets[1].data.push(row.contract);
      output.datasets[2].data.push(row.token);
    });
    output.labels = labels;

    return output;
  };

  // on filter change
  const loadData = useCallback(async () => {
    const filtersObj: { [key: string]: string; } = {};
    filtersObj.date_lte = format(Date.now(), dateFormat);
    if (timeFilter) {
      filtersObj.date_gte = format(subDays(Date.now(), timeFilter as number), dateFormat);
    }

    const dataObj = await get<AccountsStatsDataObject[]>('accountStats', filtersObj)
      .then((response) => transposeToChartFormat(response))
      .catch((err) => {
        const msg = (err instanceof FetchException) ? 'Fetching data error' : 'Unexpected exception';
        toast.error(msg);
      });
    setData(dataObj as ChartData);
  }, [timeFilter]);
  useEffect(() => { loadData(); }, [loadData]);

  return (
    <div>
      <Card>
        <CardTitle>
          <div className="float-left">
            <span className="font-bold">Accounts</span>
            <DateInfo date={new Date()} />
          </div>
        </CardTitle>
        <CardBody>
          <Chart data={data} height={100} scales={{ left: 'Total', right: 'Value' }} />
          <Filters
            title="Time"
            items={filters}
            value={timeFilter}
            onSelect={(value) => setTimeFilter(value)}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default AccountsPanel;
