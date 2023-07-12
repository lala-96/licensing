import React, {useEffect, useState} from "react";
import {Button, Table, Tag} from "antd";
import device from '../../assets/img/phone.svg'
import sms from '../../assets/img/sms.svg'
import feedback from '../../assets/img/feedback.svg'
import qmeterService from "../../apis/qmeterService";
import './style.css'

const PaymentHistory: React.FC = () => {
    const [paymentList, setPaymentList] = useState<any[]>([]);
    const getLink = () => {
        qmeterService.get('/license/invoice/feedback/327/').then((data) => {
            const url = data.data.file
            const link = document.createElement("a")
            const currentDate = new Date()
                .toLocaleDateString("en-GB")
                .replace(/\//g, "-")

            link.href = url
            link.download = `Device history for ${currentDate}`

            document.body.appendChild(link)
            link.click()

            document.body.removeChild(link)
            URL.revokeObjectURL(url)
        })
    }
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
            render: (text: string, record: any, index: number) => <Tag color='#6ab04c'>Paid</Tag>
        },
        {
            title: 'Actions',
            dataIndex: '',
            width: '10%',
            ellipsis: true,
            align: 'center',
            render: (text: string, record: any, index: number) => <Button style={{
                width: '100%',
                backgroundColor: '#fb9a00',
                color: 'white',
                borderRadius: '0',
                outline: 'none',
                border: 'none'
            }} onClick={getLink}
            >
                Download invoice</Button>
        },
    ];

    useEffect(() => {
        qmeterService.get('/license/all-history/?page=1&page_size=20&search=').then((data) => {
            setPaymentList([...data.data]);
        });
    }, []);

    return (
        <div
            className='payment-div-style'
        >
            <Table
                pagination={false}
                columns={columns}
                dataSource={paymentList}
            />
        </div>

    )
}
export default PaymentHistory;