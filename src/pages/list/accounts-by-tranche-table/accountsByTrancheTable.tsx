import useAccountsByTranche from 'domains/accounts-by-tranche/hooks/useAccountsByTranche';
import Table from 'ui/table/table';
import { accountsByTrancheTableColumns } from './accountsByTrancheTable.helpers';

function AccountsByTrancheTable() {
  const { data = [], isLoading } = useAccountsByTranche();

  return (
    <Table
      columns={accountsByTrancheTableColumns}
      data={data}
      loading={isLoading}
    />
  );
}

export default AccountsByTrancheTable;
