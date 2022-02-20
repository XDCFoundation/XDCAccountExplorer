import { AccountTranche } from 'domains/accounts-by-tranche/accountsByTranche.types';
import { PropsWithChildren } from 'react';
import { CellProps, Column } from 'react-table';
import styles from './accountsByTrancheTable.module.scss';

// Reusable cells
function RightAlignedText({ children }: PropsWithChildren<unknown>) {
  return <div className={styles.rightAlign}>{children}</div>;
}

function NumberCell({ value }: CellProps<AccountTranche, number>) {
  return <RightAlignedText>{value.toLocaleString()}</RightAlignedText>;
}

// Column specific cells
function Tranche(cell: CellProps<AccountTranche>) {
  const { row: { original: { balanceTo, balanceFrom } } } = cell;

  const formattedBalance = Number.isFinite(balanceTo)
    ? `${balanceFrom.toLocaleString()} - ${balanceTo.toLocaleString()}`
    : `${balanceFrom.toLocaleString()} +`;

  return <RightAlignedText>{formattedBalance}</RightAlignedText>;
}

function BalancePercentage({ value }: CellProps<AccountTranche, number>) {
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
      <b>{value.toLocaleString()}</b>
    </RightAlignedText>
  );
}

// Table columns
export const accountsByTrancheTableColumns: Column<AccountTranche>[] = [
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
  {
    accessor: 'balancePercentage',
    Cell: BalancePercentage,
    width: 200,
  },
  {
    Header: <RightAlignedText>Value (USD)</RightAlignedText>,
    accessor: 'usdBalance',
    Cell: UsdBalance,
    width: 100,
  },
];
