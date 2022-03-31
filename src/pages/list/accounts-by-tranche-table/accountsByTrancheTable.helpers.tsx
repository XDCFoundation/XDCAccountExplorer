import { AccountTranche } from 'domains/accounts-by-tranche/accountsByTranche.types';
import { PropsWithChildren } from 'react';
import { CellProps, Column } from 'react-table';
import formatNumber from 'util/number/formatNumber';
import styles from './accountsByTrancheTable.module.scss';

// Reusable cells
function RightAlignedText({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.rightAlign}>{children}</div>;
}

function NumberCell({ value }: CellProps<AccountTranche, number | undefined>) {
  return <RightAlignedText>{formatNumber(value)}</RightAlignedText>;
}

// Column specific cells
function Tranche(cell: CellProps<AccountTranche>) {
  const { row: { original: { balanceTo, balanceFrom } } } = cell;

  const formattedBalance = Number.isFinite(balanceTo)
    ? `${formatNumber(balanceFrom)} - ${formatNumber(balanceTo)}`
    : `${formatNumber(balanceFrom)} +`;

  return <RightAlignedText>{formattedBalance}</RightAlignedText>;
}

function BalancePercentage({ value = 0 }: CellProps<AccountTranche, number | undefined>) {
  const percentage = Math.floor(value * 100);

  return (
    <div className={styles.balancePercentage}>
      <div className={styles.color} style={{ width: `${percentage}%` }} />
    </div>
  );
}

function UsdBalance({ value }: CellProps<AccountTranche, number>) {
  return (
    <RightAlignedText>
      <b>{formatNumber(value)}</b>
    </RightAlignedText>
  );
}

// Table columns
type GetAccountsByTrancheTableColumnsParams = {
  withBalancePercentageColumn: boolean;
};

export const getAccountsByTrancheTableColumns = ({
  withBalancePercentageColumn,
}: GetAccountsByTrancheTableColumnsParams): Column<AccountTranche>[] => [
  {
    Header: <RightAlignedText>Balance from-to (XDC)</RightAlignedText>,
    accessor: 'balanceFrom',
    Cell: Tranche,
    width: 200,
  },
  {
    Header: <RightAlignedText>Accounts</RightAlignedText>,
    accessor: 'accounts',
    Cell: NumberCell,
    width: 100,
  },
  {
    Header: <RightAlignedText>Sum (XDC)</RightAlignedText>,
    accessor: 'xdcBalance',
    Cell: NumberCell,
    width: 100,
  },
  {
    Header: <RightAlignedText>Sum (Accounts)</RightAlignedText>,
    accessor: 'accountsWithGreaterBalance',
    Cell: NumberCell,
    width: 100,
  },
  {
    Header: <RightAlignedText>Average (XDC)</RightAlignedText>,
    accessor: 'xdcAverageBalance',
    Cell: NumberCell,
    width: 100,
  },
  ...(withBalancePercentageColumn
    ? [{
      accessor: 'balancePercentage',
      Cell: BalancePercentage,
      width: 200,
    } as Column<AccountTranche>]
    : []),
  {
    Header: <RightAlignedText>Value (USD)</RightAlignedText>,
    accessor: 'usdBalance',
    Cell: UsdBalance,
    width: 100,
  },
];
