import React, {useEffect, useState} from "react";
import {Button, Table, Tag} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import axios from "axios";
import device from '../../assets/img/phone.svg'
import sms from '../../assets/img/sms.svg'
import feedback from '../../assets/img/feedback.svg'

const PaymentHistory: React.FC = () => {
    const [paymentList, setPaymentList] = useState<any[]>([]);
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
            title: 'Extended',
            dataIndex: 'extended',
            render: (text: any, record: any, index: number) => {
                return (
                    (text == null || text == 0) ? <span>0 month</span> : <span>+ {text} month</span>
                )
            },
            ellipsis: true,
        },
        {
            title: 'Device account',
            dataIndex: 'account_count',
            render: (text: any, record: any, index: number) => {
                return (
                    text == null ? <span>0 device</span> : <span>+ {text} devices</span>
                )
            },
        },
        {
            title: 'Type',
            dataIndex: 'type',
            render: (text: any, record: any, index: number) => {
                return (
                    text === 'device' ? <img src={device} alt="device"/> :
                        text === 'sms' ? <img src={sms} alt="sms"/> :
                            text === 'feedback' ? <img src={feedback} alt='feedback'/> : ''
                )
            },
        },
        {
            title: 'Purchase date',
            dataIndex: 'created_at',
            ellipsis: true,
        },
        {
            title: 'Amount',
            dataIndex: 'paid_amount',
            ellipsis: true,
            width: '5%'

        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: '8%',
            ellipsis: true,
            align: 'center',
            render:(text:string, record:any,index:number)=> <Tag color='#6ab04c'>Paid</Tag>
},
        {
            title: 'Actions',
            dataIndex: '',
            width: '8%',
            ellipsis: true,
            align: 'center',
            render: (text: string, record: any, index: number) => <Button style={{
                width: '100%',
                backgroundColor: '#fb9a00',
                color: 'white',
                borderRadius: '0',
                outline: 'none',
                border: 'none'
            }}>
                Download invoice</Button>
        },
    ];

    const token = 'Token a711ed81da955ba5577ccff08295fd7a5638a64df88678699c65a1a77af8556b';

    useEffect(() => {
        axios.get('https://apinew.testqmeter.net/api/v1/license/all-history/?page=1&page_size=20&search=', {
            headers: {
                'Authorization': `${token}`
            }
        }).then((data) => {
            console.log('my new data   ', data.data);
            setPaymentList([...data.data]);
        })
    }, []);

    return (
        <div style={{backgroundColor: "#fff", padding: '0 20px', border: '1px solid rgba(0,0,0,.1)'}}>
            <Table pagination={false} columns={columns} dataSource={paymentList} />
        </div>

    )
}
export default PaymentHistory;