import useAccountsByTranche from 'domains/accounts-by-tranche/hooks/useAccountsByTranche';
import { useMemo } from 'react';
import Table from 'ui/table/table';
import useMediaBreakpoints from 'util/use-media-breakpoints/useMediaBreakpoints';
import { getAccountsByTrancheTableColumns } from './accountsByTrancheTable.helpers';

function AccountsByTrancheTable() {
  const { data = [], isLoading } = useAccountsByTranche();

  const { isMediaBreakpointUp } = useMediaBreakpoints();
  const withBalancePercentageColumn = isMediaBreakpointUp('md');

  const accountsByTrancheTableColumns = useMemo(() => (
    getAccountsByTrancheTableColumns({ withBalancePercentageColumn })
  ), [withBalancePercentageColumn]);

  return (
    <Table
      columns={accountsByTrancheTableColumns}
      data={data}
      loading={isLoading}
    />
  );
}

export default AccountsByTrancheTable;
