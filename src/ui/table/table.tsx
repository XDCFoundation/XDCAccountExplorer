// React-table provides keys in getXXXProps() functions
/* eslint-disable react/jsx-key */

import { times } from 'lodash';
import { CellProps, TableOptions, useTable } from 'react-table';
import { useMemo } from 'react';
import styles from './table.module.scss';

interface TableProps<T extends Record<string, unknown>> extends TableOptions<T> {
  loading?: boolean;
}

const LOADING_ROW_COUNT = 5;

function CellPlaceholder<T extends Record<string, unknown>>({ row: { index } }: CellProps<T>) {
  return (
    <div
      className={styles.cellPlaceholder}
      style={{ opacity: 1 - (index / LOADING_ROW_COUNT) }}
    />
  );
}

function Table<T extends Record<string, unknown>>({
  columns,
  data,
  loading,
}: TableProps<T>) {
  const tableOptions = useMemo(() => {
    if (loading) {
      return {
        columns: columns.map((column) => ({
          ...column,
          Cell: CellPlaceholder,
        })),
        data: times(LOADING_ROW_COUNT, () => ({} as T)),
      };
    }

    return {
      columns,
      data,
    };
  }, [columns, data, loading]);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
  } = useTable(tableOptions);

  return (
    <div className={styles.container}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((header) => (
                <th {...header.getHeaderProps({
                  style: {
                    minWidth: header.minWidth,
                    width: header.width,
                    maxWidth: header.maxWidth,
                  },
                })}
                >
                  {header.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
