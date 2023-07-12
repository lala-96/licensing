import React, {useEffect} from "react";
import {Row, Col, Input, Spin} from "antd";
import {useState} from "react";
import InterfaceSmsPricing from "./type";
import ModalComponent from "../../../components/modal";
import qmeterService from "../../../apis/qmeterService";
import ModalTitle from "../../modalTitle";
import './style.css'

const SmsPricing: React.FC<InterfaceSmsPricing> = (props) => {
    const [priceList, setPriceList] = useState<any[]>([]);
    const [searchText, setSearchText] = useState<string>('')

    useEffect(() => {
        qmeterService.get('/core/sms-price-list/').then((data) => {
            setPriceList([...data.data])
        })
    }, [])

    const list = searchText !== '' ? priceList.filter(item => item.name.includes(searchText)).map(dt => <Col span={12}
                                                                                                             style={{padding: '10px 30px'}}>
        <Row>
            <Col span={12}>
                <span>
                    {dt.name}
                </span>
            </Col>
            <Col span={12}>
                <span
                    className='price-span'
                >
                    {dt.price}
                </span>
            </Col>
        </Row>
    </Col>) : priceList.map(data =>
        <Col
            span={12}
            className='price-col'
        >
            <Row>
                <Col span={12}>
                <span>
                    {data.name}
                </span>
                </Col>
                <Col span={12}>
                    <span
                        className='price-span'
                    >
                        {data.price}
                    </span>
                </Col>
            </Row>
        </Col>);
    const search = (e: any) => {
        setSearchText(e.target.value);
    };

    return (
        <ModalComponent
            show={props.showModal}
            width='800px'
            title={<ModalTitle text='SMS Pricing'/>}
            cancel={props.clickCancel}
            content={
                <div
                    className='sms-pricing-main-div'
                >
                    {priceList.length === 0 ?
                        <div
                            className='spin-div-style'
                        >
                            <Spin
                                tip="Loading"
                                size="large"
                                className='spin-style'
                            >
                            </Spin>
                        </div>
                        :
                        <>
                            <Row>
                                <Col
                                    span={24}
                                    className='col-style-sms'
                                >
                                    <Input
                                        placeholder="input search text"
                                        onChange={search}
                                        className='search-input'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                {list}
                            </Row>
                        </>
                    }
                </div>
            }
        />
    )
}
export default SmsPricing;