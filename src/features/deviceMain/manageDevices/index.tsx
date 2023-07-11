import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Input, Row, Spin, Table, Tag} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {TableProps} from "antd/es/table";
import InterfaceManageDevices from "./type";
import SelectComponent from "../../../components/select";
import ModalComponent from "../../../components/modal";


const ManageDevices: React.FC<InterfaceManageDevices> = (props) => {
    const [dataList, setDataList] = useState<any[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [searchName, setSearchName] = useState<any[]>([]);
    const [searchBranch, setSearchBranch] = useState<any[]>([]);
    const [searchLogin, setSearchLogin] = useState<any[]>([]);
    const [searchConnect, setSearchConnect] = useState<any[]>([])
    const [NameOptions, setNameOptions] = useState<any[]>();
    const [branchOptions, setBranchOptions] = useState<any[]>();

    const [logOut, setLogOut] = useState<any>()
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
        });
        setLogOut(Math.floor((Math.random())));
    };

    // const TableData = searchText !== '' ? dataList.filter(item => item.name.includes(searchText) || item.user.includes(searchText) || item.branch.includes(searchText)) :
    //     searchName.length != 0 ? dataList.filter(item => (searchName.includes(item.name))) :
    //         searchBranch.length != 0 ? dataList.filter(item => (searchBranch.includes(item.branch))) :
    //             searchLogin.length != 0 ? dataList.filter(item => (searchLogin.includes(item.status || (item.is_offline_mode ? 'Offline mode : on' : 'Offline mode : off')))) :
    //                 searchConnect.length != 0 ? dataList.filter(item => (item.any_problem ===
    //                         (searchConnect.includes('Connected') ? true : searchConnect.includes('any problem') ? false : item.any_problem)))
    //                     : dataList;

    const token = 'Token 05d852a833f2d5c3c9b2133d8fd3eae77b30b9333eb32919d03bfaccf99a84f9';
    useEffect(() => {
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/', {
            headers: {
                'Authorization': `${token}`
            }
        }).then((data) => {
            setDataList([...data.data.data]);

        });
        //Branch
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/?api=branch', {
            headers: {
                'Authorization': `${token}`
            }
        }).then((data) => {
            const branchOpt = data.data.map((item: any) => ({value: item.branch_id, label: item.name}))
            setBranchOptions([...branchOpt])
        });
        //username
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/?api=username', {
            headers: {
                'Authorization': `${token}`
            }
        }).then((data) => {
            const nameOpt = data.data.map((item: any) => ({value: item.username, label: item.username}))
            setNameOptions([...nameOpt])
        });

    }, []);

    const onChange: TableProps<any>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const search = (e: any) => {
        setSearchText(e.target.value);
        const param = e.target.value;
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/', {
            headers: {
                'Authorization': `${token}`
            },
            params: {
                search: param
            }

        }).then(data => {
            console.log('search  ', data.data.data)
            setDataList([...data.data.data]);
        })
    }
    const loginOptions = [
        {label: 'logout', value: 'logout'},
        {label: 'login', value: 'login'},
        {label: 'Offline mode : on', value: 'offline-True'},
        {label: 'Offline mode : off', value: 'offline-False'}

    ];

    const connectOptions = [
        {label: 'Connected', value: '1'},
        {label: 'any problem', value: '2'}
    ];


    const searchForName = (value: []) => {
        const queryString = value.map(userName => `username=${userName}`).join('&');
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/?' + queryString, {
            headers: {
                'Authorization': `${token}`
            },
        }).then(data => {
            setDataList([...data.data.data]);
        })
    };
    const searchForBranch = (value: []) => {
        const queryString = value.map(branch => `branch=${branch}`).join('&');
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/?' + queryString, {
            headers: {
                'Authorization': `${token}`
            },
        }).then(data => {
            console.log('branch  ', data.data.data)
            setDataList([...data.data.data]);
        })
    }
    const searchForLogin = (value: []) => {
        const queryString = value.map(status => `status=${status}`).join('&');
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/?' + queryString, {
            headers: {
                'Authorization': `${token}`
            },
        }).then(data => {
            setDataList([...data.data.data]);
        });
    }

    const searchForConnect = (value: []) => {
        const queryString = value.map(connection => `connection=${connection}`).join('&');
        axios.get('https://apinew.testqmeter.net/api/v1/license/license-in-use/?' + queryString, {
            headers: {
                'Authorization': `${token}`
            },
        }).then(data => {
            setDataList([...data.data.data]);
        })

    }

    return (
        <ModalComponent show={props.showModal} width='1200px' title={<div
            style={{height: '30px', backgroundColor: '#335c9a', color: "white", padding: '10px 10px'}}>
            Manage your online devices</div>}
                        cancel={props.clickCancel}
                        content={
                            <div style={{minHeight: '600px', padding: '10px'}}>
                                {props.isSpin || dataList.length === 0 ?
                                    <Spin>
                                        <Row>
                                            <Col span={6}>
                                                <span>Total count: 10 | Filtered count: 10</span>
                                            </Col>
                                            <Col span={6} offset={12}>
                                                <Input placeholder="input search text" onChange={search}
                                                       style={{width: 200, float: 'right'}}/>
                                            </Col>
                                        </Row>
                                        <Table columns={columns}
                                               dataSource={dataList}
                                               scroll={{y: 600, x: 700}}
                                               pagination={false}
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
                                                <SelectComponent mode='tags' options={NameOptions}
                                                                 placeholder='select names'
                                                                 style={{width: '100%'}} onChange={searchForName}/>
                                            </Col>
                                            <Col span={4}>
                                                <SelectComponent mode='tags' options={branchOptions}
                                                                 placeholder='select branch'
                                                                 style={{width: '100%'}} onChange={searchForBranch}/>
                                            </Col>
                                            <Col span={4} offset={4}>
                                                <SelectComponent mode='tags' options={loginOptions}
                                                                 placeholder='select status'
                                                                 style={{width: '100%'}} onChange={searchForLogin}/>
                                            </Col>
                                            <Col span={4}>
                                                <SelectComponent mode='tags' options={connectOptions}
                                                                 placeholder='select connection'
                                                                 style={{width: '100%'}} onChange={searchForConnect}/>
                                            </Col>
                                        </Row>
                                        <Table columns={columns} dataSource={dataList} scroll={{y: 600, x: 700}}
                                               pagination={false}
                                               onChange={onChange}/>
                                    </>
                                }
                            </div>
                        }
        />


    )
}
export default ManageDevices