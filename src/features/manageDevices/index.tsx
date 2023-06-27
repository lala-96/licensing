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
    const [searchName, setSearchName] = useState<any[]>([]);
    const [searchBranch, setSearchBranch] = useState<any[]>([]);
    const [searchLogin, setSearchLogin] = useState<any[]>([]);
    const [searchConnect, setSearchConnect] = useState<any[]>([])
    const columns: any = [
        {
            title: '#',
            dataIndex: 'id',
            width: '8%',
            ellipsis: true,
            render: (text: string, record: any, index: number) => {
                return (index + 1);
            }
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
            dataIndex: ['status', 'is_offline_mode'],
            ellipsis: true,
            render: (text: any, record: any, index: number) => {
                return (record.status === 'login' ?
                    <Tag
                        color='#6ac17a'>Login, {record.is_offline_mode ? 'Offline mode : on' : 'Offline mode : off'}</Tag>
                    :
                    <Tag
                        color='#bbbbbb'>Logout, {record.is_offline_mode ? 'Offline mode : on' : 'Offline mode : off'}</Tag>)
            },

        },
        {
            title: 'Connection',
            dataIndex: 'any_problem',
            width: '8%',
            ellipsis: true,
            align: 'center',
            render: (text: boolean, record: any, index: number) => {
                return (text ?
                        <Tag color='#6ac17a' style={{padding: '5px', borderRadius: '50%'}}/> :
                        <Tag color='#bbbbbb' style={{padding: '5px', borderRadius: '50%'}}/>
                )
            }
        },
        {
            title: 'Actions',
            dataIndex: '',
            width: '8%',
            ellipsis: true,
            align: 'center',
            render: (text: string, record: any, index: number) => <Button
                onClick={() => handleLogout(record.id)}><LogoutOutlined/></Button>
        },
    ];

    const handleLogout = (id: any) => {
        console.log('lala id  ', id)
        axios.post(`https://apinew.testqmeter.net/api/v1/template/device/logoutall/${id}/`, {status: "logout"}, {
            headers: {
                'Authorization': `${token}`
            }
        })
        //     .then(axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/', {
        //     headers: {
        //         'Authorization': `${token}`
        //     }
        // }).then((data) => {
        //     setDataList([...data.data.data]);
        // }))
    };

    const TableData = searchText !== '' ? dataList.filter(item => item.name.includes(searchText) || item.user.includes(searchText) || item.branch.includes(searchText)) :
        searchName.length != 0 ? dataList.filter(item => (searchName.includes(item.name))) :
            searchBranch.length != 0 ? dataList.filter(item => (searchBranch.includes(item.branch))) :
                searchLogin.length != 0 ? dataList.filter(item => (searchLogin.includes(item.status || (item.is_offline_mode ? 'Offline mode : on' : 'Offline mode : off')))) :
                    searchConnect.length != 0 ? dataList.filter(item => (item.any_problem ===
                            (searchConnect.includes('Connected') ? true : searchConnect.includes('any problem') ? false : item.any_problem)))
                        : dataList;

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
    const loginOptions = [
        {label: 'logout', value: 'logout'},
        {label: 'login', value: 'login'},
        {label: 'Offline mode : on', value: 'Offline mode : on'},
        {label: 'Offline mode : off', value: 'Offline mode : off'}

    ];

    const connectOptions = [
        {label: 'Connected', value: 'Connected'},
        {label: 'any problem', value: 'any problem'}
    ];
    const searchForName = (value: []) => {
        setSearchName([...value]);
        // console.log('test Lala   ', dataList.filter(item => (value.includes(item.name))));
    };
    const searchForBranch = (value: []) => {
        setSearchBranch([...value]);
    }
    const searchForLogin = (value: []) => {
        setSearchLogin([...value])
    }

    const searchForConnect = (value: []) => {
        setSearchConnect([...value]);

    }
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
                    <Row style={{paddingBottom: '10px'}}>
                        <Col span={6}>
                            <span>Total count: 10 | Filtered count: 10</span>
                        </Col>
                        <Col span={4} offset={14}>
                            <Input placeholder="input search text" onChange={search}
                                   style={{width: '100%', float: 'right'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} offset={4}>
                            <SelectComponent mode='tags' options={NameOptions} placeholder='select names'
                                             style={{width: '100%'}} onChange={searchForName}/>
                        </Col>
                        <Col span={4}>
                            <SelectComponent mode='tags' options={branchOptions} placeholder='select branch'
                                             style={{width: '100%'}} onChange={searchForBranch}/>
                        </Col>
                        <Col span={4} offset={4}>
                            <SelectComponent mode='tags' options={loginOptions} placeholder='select status'
                                             style={{width: '100%'}} onChange={searchForLogin}/>
                        </Col>
                        <Col span={4}>
                            <SelectComponent mode='tags' options={connectOptions} placeholder='select connection'
                                             style={{width: '100%'}} onChange={searchForConnect}/>
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