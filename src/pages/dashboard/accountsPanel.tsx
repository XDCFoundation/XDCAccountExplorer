import { Card, CardBody, CardTitle } from 'reactstrap';
import { subDays } from 'date-fns';
import { useState, useMemo } from 'react';
import Filters, { FilterValue } from 'ui/filters/filters';
import { AccountsStatsDataObject } from 'domains/accounts/accounts.types';
import Chart from 'ui/chart/chart';
import { ChartSeries, Colors } from 'ui/chart/chart.types';
import useAccounts from 'domains/accounts/useAccounts';
import DateInfo from 'ui/date-info/dateInfo';
import { DEFAULT_TIME_FILTERS, TimeFilters } from 'domains/time-filters/timeFilters';

const placeholderData: ChartSeries = ({ datasets: [], labels: [] });

function AccountsPanel() {
  const [timeFilter, setTimeFilter] = useState<FilterValue>(7);

  const getFilters = useMemo(() => {
    const filtersObj: TimeFilters = { date_lte: new Date() };
    if (timeFilter) {
      filtersObj.date_gte = subDays(Date.now(), timeFilter as number);
    }
    return filtersObj;
  }, [timeFilter]);

  const transposeToChartFormat = (dataObj: AccountsStatsDataObject[]) => {
    const output: ChartSeries = {
      datasets: [
        {
          type: 'line',
          label: 'Total',
          color: Colors.orange,
          yAxis: 'right',
          data: [] as number[],
        },
        {
          type: 'line',
          label: 'Contracts',
          color: Colors.green,
          yAxis: 'right',
          data: [] as number[],
        },
        {
          type: 'line',
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

  const { data } = useAccounts.useAccounts(getFilters);

  const chartData = useMemo(() => transposeToChartFormat(data ?? []), [data]);

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
          <Chart
            series={chartData ?? placeholderData}
            height={300}
            scales={{ rightEnabled: true }}
          />
          <Filters
            items={DEFAULT_TIME_FILTERS}
            value={timeFilter}
            onSelect={setTimeFilter}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default AccountsPanel;
