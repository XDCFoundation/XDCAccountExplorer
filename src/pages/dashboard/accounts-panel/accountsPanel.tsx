import {
  Button, Card, CardBody, CardTitle,
} from 'reactstrap';
import { subDays } from 'date-fns';
import { useState, useMemo } from 'react';
import Filters, { FilterValue } from 'ui/filters/filters';
import { AccountFilters, AccountsStatsDataObject } from 'domains/accounts/accounts.types';
import Chart from 'ui/chart/chart';
import { ChartSeries, Colors } from 'ui/chart/chart.types';
import useAccounts from 'domains/accounts/useAccounts';
import DateInfo from 'ui/date-info/dateInfo';
import DateLabelFormatter from 'ui/chart/label-formatters/date-label-formatter';
import { DEFAULT_TIME_FILTERS, TimeFilters } from 'domains/time-filters/timeFilters';
import { ReactComponent as FilterIcon } from 'assets/images/icons/icon_filter.svg';
import AccountFiltersForm from './account-filters-form/accountFiltersForm';

const defaultFilters: AccountFilters = {
  minimumAmount: undefined,
  includeFoundationAccounts: true,
  includeSecondLayerApplications: false,
};

function AccountsPanel() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [timeFilter, setTimeFilter] = useState<FilterValue>(7);
  const [accountFilters, setAccountFilters] = useState<AccountFilters>(defaultFilters);

  const closeForm = () => setIsFormOpen(false);
  const openForm = () => setIsFormOpen(true);

  const changeFilters = (filters: AccountFilters) => {
    setAccountFilters(filters);
    closeForm();
  };

  const timeFilters = useMemo(() => {
    const filtersObj: TimeFilters = { date_lte: new Date() };
    if (timeFilter) {
      filtersObj.date_gte = subDays(Date.now(), timeFilter as number);
    }
    return filtersObj;
  }, [timeFilter]);

  const transposeToChartFormat = (dataObj: AccountsStatsDataObject[]): ChartSeries => {
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

  const { data } = useAccounts(timeFilters, accountFilters);

  const dateLabelFormatter = new DateLabelFormatter();
  const chartData = useMemo(
    () => dateLabelFormatter.transpose(transposeToChartFormat(data ?? [])),
    [data],
  );

  return (
    <div>
      <Card>
        <CardTitle className="d-flex justify-content-between align-items-end">
          <div>
            <span className="font-bold">Accounts</span>
            <DateInfo date={new Date()} />
          </div>
          <Button className="btn-transparent" onClick={openForm}>
            <FilterIcon />
            <span className="ms-1">Filters</span>
          </Button>
        </CardTitle>
        <CardBody>
          <Chart
            series={chartData}
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
      <AccountFiltersForm
        filters={accountFilters}
        open={isFormOpen}
        onCancel={closeForm}
        onSubmit={changeFilters}
      />
    </div>
  );
}

export default AccountsPanel;
