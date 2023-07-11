import React from "react";
import {Col, Form, Row} from "antd";
import BtnComponent from "../../components/button";
import './web-style.css'
import SelectComponent from "../../components/select";
import './web-style.css'
import paypal from "../../assets/img/paypal.svg";
import {hover} from "@testing-library/user-event/dist/hover";

const WebFeedback: React.FC = () => {
    const OPTIONS = [
        {value: '100 feedback', label: '100 feedback'},
        {value: '200 feedback', label: '200 feedback'},
        {value: '300 feedback', label: '300 feedback'},
        {value: '400 feedback', label: '400 feedback'},
    ];
    return (
        <div style={{backgroundColor: "#fff", padding: '20px', margin: "20px 0"}}>
            <Row style={{
                borderBottom: '1px solid rgba(0,0,0,.1)',
                paddingTop: '10px',
                paddingBottom: '20px',
                marginBottom: '20px'
            }}>
                <Col span={24}><span style={{color: '#555'}}>Web feedback balance :2</span>
                </Col>
            </Row>
            <Row>
                <Col span={8} className='col-style'>
                    <span className='text-color'>Last payment</span>
                </Col>
                <Col span={8} offset={8}>
                    <span style={{float: "right"}} className='text-color'>2021-01-01</span>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col span={6} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <span className='text-color'>Add Balance</span>
                    </Col>
                    <Col span={10} offset={8} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <SelectComponent style={{width: '100%', borderRadius: '0'}} options={OPTIONS}
                                         defaultValue='100 feedback'/>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} offset={15} style={{paddingTop: '10px', paddingBottom: '10px'}}><img src={paypal}
                                                                                                       width='100%'
                                                                                                       height='100%'/></Col>

                    <Col span={5} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        <BtnComponent  style={{
                            backgroundColor: '#335c9a',
                            float: 'right',
                            borderRadius: '0',
                            color: '#fff'
                        }}type='text'
                                      text={
                            <a href='https://www.sandbox.paypal.com/checkoutnow?token=1NL41385M5066774S' target='_blank' >Purchase</a>}
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
export default WebFeedback;