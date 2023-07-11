import React from "react";
import {Row, Col} from "antd";
import SmsBalance from "../smsBalance/Sms";
import WebFeedback from "../WebFeedback";
import './main-style.css';
import ModalComponent from "../../components/modal";
import DviceComponent from "../deviceMain/device";
import AboutCompany from "../about/aboutCompany";
import PaymentHistory from "../paymentHistory";

const Main = () => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={8} style={{backgroundColor: '#f0f1f2'}}><AboutCompany/></Col>
                <Col span={8} style={{backgroundColor: '#f0f1f2'}}>
                    <SmsBalance/>
                    <WebFeedback/>
                </Col>
                <Col span={8} style={{backgroundColor: '#f0f1f2'}}>
                    <DviceComponent/>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <PaymentHistory/>
                </Col>
            </Row>
        </>
    )
}
export default Main;