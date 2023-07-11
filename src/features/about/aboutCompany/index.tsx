import React, {useEffect, useState} from "react";
import {Col, Row, Upload, UploadProps} from "antd";
import BtnComponent from "../../../components/button";
import {FolderAddOutlined} from "@ant-design/icons";
import AboutManageAlerts from "../AboutManageAlerts/index";
import UploadComponent from "../../../components/upload";
import qmeterService from "../../../apis/qmeterService";
import '../aboutCompany/style.css'


const AboutCompany: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [defaultData, setDefaultData] = useState<any>();
    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
        console.log(newFileList)
    }
    const showManageAlert = () => {
        setShowModal(true);
    }
    useEffect(() => {

        qmeterService.get("/license/manage-alert/").then((data) => {
            console.log('lalla test ', data.data.sms_alert);
            setDefaultData(data.data)
        })
    }, []);

    return (
        <div className='main-div'>
            <Row className='header-row'>
                <Col span={8}>
                    <span style={{color: '#555', fontWeight: '400'}}>About company</span>
                </Col>
                <Col span={4} offset={12}>
                    <BtnComponent
                        type='text'
                        onClick={showManageAlert}
                        text={<FolderAddOutlined/>}
                        className='btn-style'
                    />
                </Col>
            </Row>
            <Row className='upload-row'>
                <Col span={6} offset={9}>
                    <UploadComponent/>
                </Col>

            </Row>
            <Row style={{borderBottom: '1px solid rgba(0,0,0,.1)'}}>
                <Col
                    span={4}
                    className='col-style'
                >
                    <span>Name:</span>
                </Col>
                <Col
                    span={4}
                    className='col-style'
                >
                    <span>nasibov</span>
                </Col>
            </Row>
            <Row
                style={{borderBottom: '1px solid rgba(0,0,0,.1)'}}>
                <Col span={4} className='col-style'>
                    <span>Sector:</span>
                </Col>
                <Col span={4} className='col-style'>
                    <span>Public</span>
                </Col>
            </Row>
            <Row
                style={{borderBottom: '1px solid rgba(0,0,0,.1)', marginBottom: '38px'}}>
                <Col span={4} className='col-style'>
                    <span>Country:</span>
                </Col>
                <Col span={4} className='col-style'>
                    <span>Azerbaijan</span>
                </Col>
            </Row>
            <AboutManageAlerts default={defaultData} clickCancel={() => setShowModal(false)}
                               setShow={() => setShowModal(false)} showModal={showModal}/>

        </div>
    )
}
export default AboutCompany;