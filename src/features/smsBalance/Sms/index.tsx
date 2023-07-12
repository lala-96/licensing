import React, {useState} from "react";
import {Row, Col, Form, InputNumber} from "antd";
import BtnComponent from "../../../components/button";
import NumberInputComponent from "../../../components/NumberInput";
import SmsPricing from "../SmsPricing/index";
import paypal from '../../../assets/img/paypal.svg'
import {InfoCircleOutlined} from '@ant-design/icons';
import './sms-style.css'

const SmsBalance: React.FC = () => {
    const [show, setShow] = useState<boolean>(false)

    const showModal = () => {
        setShow(true)
    }


    return (

        <div className='sms-div-style'>
            <Row className='sms-row'>
                <Col span={10}>
                    <span
                        style={{color: '#555'}}
                    >
                        SMS balance :$0.97
                    </span>
                </Col>
                <Col span={4} offset={10}>
                    <BtnComponent
                        className='sms-save-btn'
                        text={<InfoCircleOutlined/>}
                        onClick={showModal}
                    />
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col
                        span={6}
                        className='sms-col'
                    >
                        <span className='text-color'>
                            Add Balance
                        </span>
                    </Col>
                    <Col
                        span={10}
                        offset={8}
                        className='sms-col'
                    >
                        <NumberInputComponent
                            min={1}
                            max={1000}
                        />
                    </Col>
                    <Col
                        span={4}
                        offset={15}
                        className='sms-col'
                    >
                        <img
                            src={paypal}
                            width='100%'
                            height='100%'/></Col>
                    <Col
                        span={5}
                        className='sms-col'
                    >
                        <BtnComponent
                            text='Purchase'
                            className='sms-save-btn'
                            htmlType='submit'
                        />
                    </Col>
                </Row>
            </Form>
            <SmsPricing
                showModal={show}
                clickCancel={() => {
                    setShow(false)
                }}/>
        </div>
    )
}
export default SmsBalance;