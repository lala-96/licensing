import React, {useEffect} from "react";
import {Row, Col, Input, Spin} from "antd";
import {useState} from "react";
import InterfaceSmsPricing from "./type";
import ModalComponent from "../../../components/modal";
import qmeterService from "../../../apis/qmeterService";

const SmsPricing: React.FC<InterfaceSmsPricing> = (props) => {
    const [priceList, setPriceList] = useState<any[]>([]);
    const [searchText, setSearchText] = useState<string>('')

    useEffect(() => {
        qmeterService.get('/core/sms-price-list/').then((data) => {
            setPriceList([...data.data])
        })
    }, [])

    const list = searchText != '' ? priceList.filter(item => item.name.includes(searchText)).map(dt => <Col span={12}
                                                                                                            style={{padding: '10px 30px'}}>
        <Row>
            <Col span={12}>
                <span>
                    {dt.name}
                </span>
            </Col>
            <Col span={12}>
                <span style={{float: 'right', fontWeight: 'bold'}}>{dt.price}</span>
            </Col>
        </Row>
    </Col>) : priceList.map(data =>
        <Col span={12} style={{padding: '10px 30px'}}>
            <Row>
                <Col span={12}>
                <span>
                    {data.name}
                </span>
                </Col>
                <Col span={12}>
                    <span style={{float: 'right', fontWeight: 'bold'}}>{data.price}</span>
                </Col>
            </Row>
        </Col>);

    const search = (e: any) => {
        setSearchText(e.target.value);
    };

    return (

        <ModalComponent show={props.showModal} width='800px'
                        title={<div style={{
                            height: '30px',
                            backgroundColor: '#335c9a',
                            color: "white",
                            padding: '10px 10px'
                        }}>
                            SMS Pricing</div>}
                        cancel={props.clickCancel}
                        content={
                            <div style={{maxHeight: '400px', overflow: 'auto', padding: '10px',}}>
                                {priceList.length === 0 ?
                                    <div style={{height: '100%', width: '100%', textAlign: 'center'}}>
                                        <Spin tip="Loading" size="large" style={{margin: "auto"}}></Spin>
                                    </div>
                                    :
                                    <>
                                        <Row>
                                            <Col style={{padding: '20px'}} span={24}>
                                                <Input placeholder="input search text" onChange={search}
                                                       style={{width: 200, float: 'right'}}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {list}
                                        </Row>
                                    </>}
                            </div>
                        }/>

    )
}
export default SmsPricing;