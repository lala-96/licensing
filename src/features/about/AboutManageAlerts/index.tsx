import React, {useEffect, useState} from "react";
import NumberInputComponent from "../../../components/NumberInput";
import {Col, Form, InputNumber, Input, Row} from "antd";
import BtnComponent from "../../../components/button";
import AboutAlert from "./type";
import ModalComponent from "../../../components/modal";
import qmeterService from "../../../apis/qmeterService";
import ModalTitle from "../../modalTitle";
import './style.css';


const AboutManageAlerts: React.FC<AboutAlert> = (props) => {
    const [form] = Form.useForm();
    const [feedbackBalance, setFeedbackBalance] = useState<number>(1)
    const [smsBalance, setSmsBalance] = useState<number>(1);

    const sendManageAlerts = () => {
        qmeterService.post('/license/manage-alert/', {
            feedback_alert: feedbackBalance,
            sms_alert: smsBalance
        }).then()
        props.setShow();
    }

    const getSmsBalance = (e: number) => {
        setSmsBalance(e)
    }
    const getFeedbackBalance = (e: any) => {
        setFeedbackBalance(e)
    }
    return (
        <ModalComponent
            show={props.showModal}
            width='600px'
            title={<ModalTitle text='Manage alerts'/>}
            cancel={props.clickCancel}
            content={
                <div
                    className='about-modal-content'
                >
                    <Form
                        layout="vertical"
                        form={form}
                        initialValues={props.default}
                    >
                        <Form.Item
                            label="SMS balance alerts"
                            name='sms_alert'
                        >
                            <NumberInputComponent
                                min={0} max={1000}
                                onChange={getSmsBalance}
                                default={props.default?.sms_alert}
                            />
                        </Form.Item>
                        <Form.Item
                            label="SMS balance alerts"
                            name='feedback_alert'
                        >
                            <NumberInputComponent
                                min={0} max={1000}
                                onChange={getFeedbackBalance}
                                default={props.default?.feedback_alert}
                            />
                        </Form.Item>
                        <Form.Item>
                            <BtnComponent
                                text='Save'
                                type='text'
                                className='about-save-btn'
                                onClick={sendManageAlerts}/>
                            <BtnComponent
                                text='Cancel'
                                type='text'
                                onClick={props.clickCancel}
                                className='about-cancel-btn'
                            />
                        </Form.Item>
                    </Form>
                </div>}
        />


    )
}
export default AboutManageAlerts;