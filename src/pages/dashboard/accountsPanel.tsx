import { Card, CardBody, CardTitle } from 'reactstrap';
import { subDays } from 'date-fns';
import { useState, useMemo } from 'react';
import Filters, { FilterValue } from 'ui/chart/filters';
import { AccountsFilters, AccountsStatsDataObject } from 'domains/accounts/types';
import Chart, { Colors } from 'ui/chart/chart';
import { ChartData } from 'ui/chart/types';
import useAccounts from 'domains/accounts/useAccounts';

function AccountsPanel() {
  const [filters] = useState([
    { name: '7D', value: 7 },
    { name: '1M', value: 30 },
    { name: '3M', value: 90 },
    { name: '1Y', value: 365 },
    { name: 'MAX', value: null },
  ]);
  const [timeFilter, setTimeFilter] = useState<FilterValue>(7);

  const getFilters = useMemo(() => {
    const filtersObj: AccountsFilters = { date_lte: new Date(), date_gte: new Date() };
    if (timeFilter) {
      filtersObj.date_gte = subDays(Date.now(), timeFilter as number);
    }
    return filtersObj;
  }, [timeFilter]);

  const transposeToChartFormat = (dataObj: AccountsStatsDataObject[]): ChartData => {
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

  const { data } = useAccounts.useAccounts(getFilters);

  const chartData = useMemo(() => transposeToChartFormat(data ?? []), [data]);

  return (
    <div>
      <Card>
        <CardTitle className="bg-light border-bottom p-3 mb-0">
          <div className="float-left">
            <span>Accounts</span>
            <span className="small ml-2">todo some date here</span>
          </div>
          <div className="float-right">
            <span>
              <i className="fa fa-filter text-primary" />
              {' '}
              todo filters
            </span>
          </div>
        </CardTitle>
        {chartData
          && (
            <CardBody>
              <Chart data={chartData} height={100} scales={{ left: 'Total', right: 'Value' }} />
              <Filters
                title="Time"
                items={filters}
                value={timeFilter}
                onSelect={(value) => setTimeFilter(value)}
              />
            </CardBody>
          )}
      </Card>
    </div>
  );
}

export default AccountsPanel;
