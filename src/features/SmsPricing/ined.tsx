import React, {useEffect} from "react";
import {Row, Col, Input, Spin} from "antd";
import {useState} from "react";
import axios from "axios";

const SmsPricing: React.FC = () => {
    const [priceList, setPriceList] = useState<any[]>([]);
    const [searchText, setSearchText] = useState<string>('')

    const token = 'Token 05d852a833f2d5c3c9b2133d8fd3eae77b30b9333eb32919d03bfaccf99a84f9';
    useEffect(() => {
        axios.get('https://apinew.testqmeter.net/api/v1/core/sms-price-list/', {
            headers: {
                'Authorization': `${token}`
            }
        }).then((data) => {
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
        <div style={{maxHeight: '400px', overflow: 'auto', padding: '10px',}}>
            {priceList.length === 0 ?
                <div style={{height: '100%', width: '100%', textAlign:'center'}}>
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
    )
}
export default SmsPricing;