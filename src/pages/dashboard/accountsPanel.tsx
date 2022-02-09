import { Card, CardBody, CardTitle } from 'reactstrap';
import { format, subDays } from 'date-fns';
import { useEffect, useCallback, useState } from 'react';
import Chart from 'ui/chart/chart';
import { ChartData } from 'ui/chart/types';
import Filters, { FilterValue } from 'ui/chart/filters';
import { getAccountsChartData } from 'domains/accounts';

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

  // on filter change
  const loadData = useCallback(async () => {
    const filtersObj: { [key: string]: string; } = {};
    filtersObj.date_lte = format(Date.now(), dateFormat);
    if (timeFilter) {
      filtersObj.date_gte = format(subDays(Date.now(), timeFilter as number), dateFormat);
    }
    const dataObj: ChartData = await getAccountsChartData(filtersObj);
    setData(dataObj);
  }, [timeFilter]);
  useEffect(() => { loadData(); }, [loadData]);

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
