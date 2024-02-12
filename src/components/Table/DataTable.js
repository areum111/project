import React from 'react';
import { useTable, usePagination, useExpanded } from 'react-table';

const Table = ({ columns, data, emptySubText }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useExpanded);

    return (
        <table { ...getTableProps() } className="data_tb">
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps({
                                style: { width: column.width },
                            })}
                        >
                            <span>{column.render('Header')}</span>
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody { ...getTableBodyProps() }>
            {rows.length > 0 ?
                rows.map(row => {
                    prepareRow(row);
                    return (
                        (row.depth !== 0 && !row.cells[0].value) ?
                            //subRow에 내용이 없을 경우
                            <tr { ...row.getRowProps() } className={row.depth !== 0 ? 'sub_row' : null}>
                                    <td colSpan={columns.length} className="no_data">{ emptySubText }</td>
                            </tr> :
                            <tr { ...row.getRowProps() } className={row.depth !== 0 ? 'sub_row' : null}>
                                { row.cells.map(cell => (
                                    <td { ...cell.getCellProps() }>{ cell.render('Cell') }</td>))}
                            </tr>
                        );
                }) : null}
            </tbody>
        </table>
    );
}

export default Table;