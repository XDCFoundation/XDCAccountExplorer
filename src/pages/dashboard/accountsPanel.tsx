import { Card, CardBody, CardTitle } from 'reactstrap';
import { format, subDays } from 'date-fns';
import { useCallback, useState } from 'react';
import Chart from 'ui/chart/chart';
import Filters, { FilterValue } from 'ui/chart/filters';
import { useAccounts } from 'domains/accounts/api';
import { AccountsFilters } from 'domains/accounts/types';

const dateFormat = 'yyyy-MM-dd';

function AccountsPanel() {
  const [filters] = useState([
    { name: '7D', value: 7 },
    { name: '1M', value: 30 },
    { name: '3M', value: 90 },
    { name: '1Y', value: 365 },
    { name: 'MAX', value: null },
  ]);
  const [timeFilter, setTimeFilter] = useState<FilterValue>(7);

  const getFilters = useCallback(() => {
    const filtersObj: AccountsFilters = {};
    filtersObj.date_lte = format(Date.now(), dateFormat);
    if (timeFilter) {
      filtersObj.date_gte = format(subDays(Date.now(), timeFilter as number), dateFormat);
    }
    return filtersObj;
  }, [timeFilter]);

  const { data } = useAccounts(getFilters());

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
        {data
          && (
            <CardBody>
              <Chart data={data} height={100} scales={{ left: 'Total', right: 'Value' }} />
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
