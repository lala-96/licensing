import React from "react";
import {Col, Form, Row} from "antd";
import BtnComponent from "../../components/button";
import './web-style.css'
import SelectComponent from "../../components/select";
import './web-style.css'
import paypal from "../../assets/img/paypal.svg";

const WebFeedback: React.FC = () => {
    const OPTIONS = [
        {value: '100 feedback', label: '100 feedback'},
        {value: '200 feedback', label: '200 feedback'},
        {value: '300 feedback', label: '300 feedback'},
        {value: '400 feedback', label: '400 feedback'},
    ];
    return (
        <div className='feedback-main-div'>
            <Row className='feedback-row'>
                <Col span={24}>
                    <span
                        className='web-text-color'
                    >
                        Web feedback balance :2
                    </span>
                </Col>
            </Row>
            <Row>
                <Col span={8} className='col-style'>
                    <span
                        className='text-color'
                    >
                        Last payment
                    </span>
                </Col>
                <Col
                    span={8}
                    offset={8}>
                    <span
                        className='text-color span-alig'
                    >
                        2021-01-01
                    </span>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col
                        span={6}
                        className='web-col-style'
                    >
                        <span
                            className='text-color'>Add Balance</span>
                    </Col>
                    <Col
                        span={10}
                        offset={8}
                        className='web-col-style'
                    >
                        <SelectComponent
                            className='select-component-style'
                            options={OPTIONS}
                            defaultValue='100 feedback'/>
                    </Col>
                </Row>
                <Row>
                    <Col
                        span={4}
                        offset={15}
                        className='web-col-style'
                    >
                        <img src={paypal}
                             width='100%'
                             height='100%'/>
                    </Col>

                    <Col
                        span={5}
                        className='web-col-style'
                    >
                        <BtnComponent
                            className='web-save-btn'
                            type='text'
                            text={
                                <a
                                    href='https://www.sandbox.paypal.com/checkoutnow?token=1NL41385M5066774S'
                                    target='_blank'
                                >
                                    Purchase
                                </a>
                            }
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
export default WebFeedback;