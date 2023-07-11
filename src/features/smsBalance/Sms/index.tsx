import React, {useState} from "react";
import {Row, Col, Form, InputNumber} from "antd";
import BtnComponent from "../../../components/button";
import NumberInputComponent from "../../../components/NumberInput";
// import './sms-style.css'
import ModalComponent from "../../../components/modal";
import SmsPricing from "../SmsPricing/index";
import paypal from '../../../assets/img/paypal.svg'
import {InfoCircleOutlined} from '@ant-design/icons';

const SmsBalance: React.FC = () => {
    const [show, setShow] = useState<boolean>(false)

    const showModal = () => {
        setShow(true)
    }


    return (

        <div style={{backgroundColor: "#fff", padding: '0 20px', border: '1px solid rgba(0,0,0,.1)'}}>
            <Row style={{
                borderBottom: '1px solid rgba(0,0,0,.1)',
                paddingTop: '10px',
                paddingBottom: '10px',
                marginBottom: '20px'
            }}>
                <Col span={10}><span style={{color: '#555'}}>SMS balance :$0.97</span></Col>
                <Col span={4} offset={10}>
                    <BtnComponent style={{backgroundColor: '#335c9a', float: 'right', borderRadius: '0', color: '#fff'}}
                                  text={<InfoCircleOutlined/>} onClick={showModal}/>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col span={6} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <span className='text-color'>Add Balance</span>
                    </Col>
                    <Col span={10} offset={8} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <NumberInputComponent min={1} max={1000}/>
                    </Col>
                    <Col span={4} offset={15} style={{paddingTop: '10px', paddingBottom: '10px'}}><img src={paypal}
                                                                                                       width='100%'
                                                                                                       height='100%'/></Col>
                    <Col span={5} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <BtnComponent text='Purchase' style={{
                            backgroundColor: '#335c9a',
                            float: 'right',
                            borderRadius: '0',
                            color: '#fff'
                        }} htmlType='submit'
                        />
                    </Col>
                </Row>
            </Form>
            <SmsPricing showModal={show} clickCancel={() => {
                setShow(false)
            }}/>
        </div>
    )
}
export default SmsBalance;