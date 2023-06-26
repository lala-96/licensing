import React from "react";
import {Row, Col} from "antd";
import SmsBalance from "../Sms";
import WebFeedback from "../WebFeedback";
import './main-style.css';
import ModalComponent from "../../components/modal";
import DviceComponent from "../device";

const Main = () => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={8} style={{backgroundColor: '#f0f1f2'}}>test1</Col>
                <Col span={8} style={{backgroundColor: '#f0f1f2'}}>
                    <SmsBalance/>
                    <WebFeedback/>
                </Col>
                <Col span={8} style={{backgroundColor: '#f0f1f2'}}>
                    <DviceComponent/>
                </Col>
            </Row>
        </>
    )
}
export default Main;