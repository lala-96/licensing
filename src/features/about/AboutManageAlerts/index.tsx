import React, {useEffect, useState} from "react";
import NumberInputComponent from "../../../components/NumberInput";
import {Col, Form, InputNumber, Input, Row} from "antd";
import BtnComponent from "../../../components/button";
import axios from "axios";
import AboutAlert from "./type";
import ModalComponent from "../../../components/modal";

const AboutManageAlerts: React.FC<AboutAlert> = (props) => {
    const [form] = Form.useForm();
    const [feedbackBalance, setFeedbackBalance] = useState<number>(1)
    const [smsBalance, setSmsBalance] = useState<number>(1)
    const token = 'Token 05d852a833f2d5c3c9b2133d8fd3eae77b30b9333eb32919d03bfaccf99a84f9';


    const sendManageAlerts = () => {
        axios.post('https://apinew.testqmeter.net/api/v1/license/manage-alert/',
            {
                feedback_alert: feedbackBalance,
                sms_alert: smsBalance
            },
            {
                headers: {
                    'Authorization': `${token}`
                }
            }
        ).then();
        props.setShow();
    }

    const getSmsBalance = (e: number) => {
        setSmsBalance(e)
    }
    const getFeedbackBalance = (e: any) => {
        setFeedbackBalance(e)
    }


    return (

        <ModalComponent show={props.showModal} width='600px'
                        title={<div style={{
                            height: '30px',
                            backgroundColor: '#335c9a',
                            color: "white",
                            padding: '10px 10px'
                        }}>
                            SMS Pricing</div>}
                        cancel={props.clickCancel}
                       content={<div style={{padding: '10px'}}>
                            <Form layout="vertical" form={form} initialValues={props.default}>
                                <Form.Item label="SMS balance alerts" name='sms_alert'>
                                    <NumberInputComponent min={0} max={1000} onChange={getSmsBalance}
                                                          default={props.default?.sms_alert}/>
                                </Form.Item>
                                <Form.Item label="SMS balance alerts" name='feedback_alert'>
                                    <NumberInputComponent min={0} max={1000} onChange={getFeedbackBalance}
                                                          default={props.default?.feedback_alert}/>
                                </Form.Item>
                                <Form.Item>
                                    <BtnComponent text='Save' type='text'

                                                  style={{
                                                      borderRadius: '0',
                                                      margin: '5px',
                                                      backgroundColor: '#335c9a',
                                                      color: '#fff',
                                                      float: 'right'
                                                  }}
                                                  onClick={sendManageAlerts}/>
                                    <BtnComponent text='Cancel' type='text'
                                                  onClick={props.clickCancel}
                                                  style={{
                                                      border: '1px solid black',
                                                      borderRadius: '0',
                                                      margin: '5px',
                                                      float: 'right'
                                                  }}/>
                                </Form.Item>
                            </Form>
                        </div>}
        />


    )
}
export default AboutManageAlerts;