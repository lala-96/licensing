import React from "react";
import {Table} from "antd";
import TableInterface from "./type";
import type {TableProps} from 'antd/es/table';

const TableComponent: React.FC<TableInterface> = (props) => {
    const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <Table columns={props.columns} dataSource={props.dataSource} scroll={props.scroll} pagination={false} bordered={props.bordered}
               onChange={onChange}/>
    )
}
export default TableComponent;