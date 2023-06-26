import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Input, Row, Spin, Table, Tag} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {TableProps} from "antd/es/table";
import InterfaceManageDevices from "./type";
import SelectComponent from "../../components/select";

const ManageDevices: React.FC<InterfaceManageDevices> = (props) => {
    const [dataList, setDataList] = useState<any[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [DATA, setDATA] = useState<any[]>(dataList)
    const columns: any = [
        {
            title: '#',
            dataIndex: 'id',
            width: '8%',
            ellipsis: true,
        },
        {
            title: 'Device Name',
            dataIndex: 'name',
            sorter: {
                compare: (a: any, b: any) => a.name - b.name,
                multiple: 3,
            },
            render: (name: any) => <span style={{fontSize: '12px'}}>{name}</span>,
            ellipsis: true,
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            sorter: {
                compare: (a: any, b: any) => a.username - b.username,
                multiple: 2,
            },
            render: (username: any) => <span style={{fontSize: '12px'}}>{username}</span>,
        },
        {
            title: 'Branch Name',
            dataIndex: 'branch',
            sorter: {
                compare: (a: any, b: any) => a.branch - b.branch,
                multiple: 1,
            },
            render: (branch: any) => <span style={{fontSize: '12px'}}>{branch}</span>
        },
        {
            title: 'Last login',
            dataIndex: 'last_login',
            sorter: {
                compare: (a: any, b: any) => a.last_login - b.last_login,
                multiple: 1,
            },
            ellipsis: true,
            render: (date: any) => <span style={{fontSize: '12px'}}>{date}</span>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            ellipsis: true,
            render: (text: string, record: any, index: number) => {
                return (text === 'login' ?
                    <Tag color='#6ac17a'>Login, Offline mode : off</Tag>
                    :
                    <Tag color='#bbbbbb'>Logout, Offline mode : on</Tag>)
            },

        },
        {
            title: 'Connection',
            dataIndex: 'is_offline_mode',
            width: '8%',
            ellipsis: true,
            align: 'center',
            render: (text: boolean, record: any, index: number) => {
                return(text ?
                       <Tag color='#6ac17a' style={{padding:'5px',borderRadius:'50%'}}/> :
                        <Tag color='#bbbbbb' style={{padding:'5px',borderRadius:'50%'}}/>
                )
            }
        },
        {
            title: 'Actions',
            dataIndex: '',
            width: '8%',
            ellipsis: true,
            align: 'center',
            render: () => <Button><LogoutOutlined/></Button>
        },
    ];

    const TableData = searchText !== '' ? dataList.filter(item => item.name.includes(searchText)) : dataList;

    const token = 'Token a711ed81da955ba5577ccff08295fd7a5638a64df88678699c65a1a77af8556b';

    useEffect(() => {
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/', {
            headers: {
                'Authorization': `${token}`
            }
        }).then((data) => {
            setDataList([...data.data.data]);
        })
    }, []);

    const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const search = (e: any) => {
        setSearchText(e.target.value);

    }

    const NameOptions = dataList.map(data => ({value: data.name, label: data.name}));
    const branchOptions = dataList.map(data => ({value: data.branch, label: data.branch}));

    const searchForName = (value: string) => {
        console.log(`selected ${value}`,  value);
        // dataList.filter(item => item.name.includes(value))
    };

    return (
        <div style={{minHeight: '600px', padding: '10px'}}>
            {props.isSpin || dataList.length === 0 ? <Spin>
                    <Row>
                        <Col span={6}>
                            <span>Total count: 10 | Filtered count: 10</span>
                        </Col>
                        <Col span={6} offset={12}>
                            <Input placeholder="input search text" onChange={search}
                                   style={{width: 200, float: 'right'}}/>
                        </Col>
                    </Row>
                    <Table columns={columns} dataSource={TableData} scroll={{y: 600, x: 700}} pagination={false}
                           onChange={onChange}/>
                </Spin>
                :
                <>
                    <Row>
                        <Col span={6}>
                            <span>Total count: 10 | Filtered count: 10</span>
                        </Col>
                        <Col span={6} offset={12}>
                            <Input placeholder="input search text" onChange={search}
                                   style={{width: 200, float: 'right'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} offset={4}>
                            <SelectComponent mode='tags' options={NameOptions} placeholder='select names'
                                             style={{width: '100%'}} onChange={searchForName}/>
                        </Col>
                        <Col span={4}>
                            <SelectComponent mode='tags' options={branchOptions} placeholder='select branch'
                                             style={{width: '100%'}}/>
                        </Col>
                    </Row>
                    <Table columns={columns} dataSource={TableData} scroll={{y: 600, x: 700}} pagination={false}
                           onChange={onChange}/>
                </>
            }
        </div>
    )
}
export default ManageDevices