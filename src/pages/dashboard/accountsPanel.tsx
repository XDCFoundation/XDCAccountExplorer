import { format, subDays } from 'date-fns';
import { FetchException, get } from 'helpers/api';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Card, CardBody, CardTitle } from 'reactstrap';
import Chart from 'ui/chart/chart';
import { ChartSeries, Colors } from 'ui/chart/chart.types';
import DateInfo from 'ui/date-info/dateInfo';
import Filters, { FilterValue } from 'ui/filters/filters';

interface AccountsStatsDataObject {
  date: string,
  contract: number,
  token: number,
  total: number,
}

const dateFormat = 'yyyy-MM-dd';

function AccountsPanel() {
  const [data, setData] = useState<ChartSeries>({ datasets: [], labels: [] });
  const [filters] = useState([
    { name: '7D', value: 7 },
    { name: '1M', value: 30 },
    { name: '3M', value: 90 },
    { name: '1Y', value: 365 },
    { name: 'MAX', value: null },
  ]);
  const [timeFilter, setTimeFilter] = useState<FilterValue>(7);

  const transposeToChartFormat = (dataObj: AccountsStatsDataObject[]) => {
    const output: ChartSeries = {
      datasets: [
        {
          type: 'line',
          label: 'Total',
          color: Colors.orange,
          yAxis: 'left',
          data: [] as number[],
        },
        {
          type: 'bar',
          label: 'Contracts',
          color: Colors.green,
          yAxis: 'right',
          data: [] as number[],
        },
        {
          type: 'bar',
          label: 'Token',
          color: Colors.blue,
          yAxis: 'right',
          data: [] as number[],
        },
      ],
      labels: [],
    };
    dataObj.forEach((row) => {
      output.labels.push(row.date);
      output.datasets[0].data.push(row.total);
      output.datasets[1].data.push(row.contract);
      output.datasets[2].data.push(row.token);
    });

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
    setData(dataObj as ChartSeries);
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
          <Chart series={data} height={100} scales={{ left: 'Total', right: 'Value' }} />
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
