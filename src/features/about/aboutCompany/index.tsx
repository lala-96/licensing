import React, {useEffect, useState} from "react";
import {Col, Row, Upload, UploadProps} from "antd";
import BtnComponent from "../../../components/button";
import {FolderAddOutlined} from "@ant-design/icons";
import AboutManageAlerts from "../AboutManageAlerts/index";
import axios from "axios";
import UploadComponent from "../../../components/upload";
import qmeterService from "../../../apis/qmeterService";


const AboutCompany: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [defaultData, setDefaultData] = useState<any>();

    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) => {
        console.log(newFileList)
    }

    const showManageAlert = () => {
        setShowModal(true);
    }
    const token = 'Token 05d852a833f2d5c3c9b2133d8fd3eae77b30b9333eb32919d03bfaccf99a84f9';

    useEffect(() => {

        // qmeterService.get("/license/manage-alert/").then((data) => {
        //     console.log('lalla test ', data.data.sms_alert);
        //     setDefaultData(data.data)
        // })

        axios.get('https://apinew.testqmeter.net/api/v1/license/manage-alert/',
            {
                headers: {
                    'Authorization': `${token}`
                }
            },
        ).then((data) => {

            setDefaultData(data.data)
        })

    }, []);

    return (
        <div style={{backgroundColor: "#fff", padding: '0 20px', border: '1px solid rgba(0,0,0,.1)'}}>
            <Row style={{
                borderBottom: '1px solid rgba(0,0,0,.1)',
                paddingTop: '10px',
                paddingBottom: '10px',
                marginBottom: '20px',
            }}>
                <Col span={8}>
                    <span style={{color: '#555', fontWeight: '400'}}>About company</span>
                </Col>
                <Col span={4} offset={12}>
                    <BtnComponent
                        type='text'
                        onClick={showManageAlert}
                        text={<FolderAddOutlined/>}
                        style={{backgroundColor: '#335c9a', float: 'right', borderRadius: '0', color: '#fff'}}
                    />
                </Col>
            </Row>
            <Row
                style={{
                    height: '200px',
                    paddingTop: '10px',
                    paddingBottom: '20px',
                    marginBottom: '20px'
                }}>
                <Col span={6} offset={9}>
                    <UploadComponent/>
                </Col>

            </Row>
            <Row
                style={{borderBottom: '1px solid rgba(0,0,0,.1)'}}>
                <Col span={4} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <span style={{color: '#65676b'}}>Name:</span>
                </Col>
                <Col span={4} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <span style={{color: '#65676b'}}>nasibov</span>
                </Col>
            </Row>
            <Row
                style={{borderBottom: '1px solid rgba(0,0,0,.1)'}}>
                <Col span={4} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <span style={{color: '#65676b'}}>Sector:</span>
                </Col>
                <Col span={4} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <span style={{color: '#65676b'}}>Public</span>
                </Col>
            </Row>
            <Row
                style={{borderBottom: '1px solid rgba(0,0,0,.1)', marginBottom: '38px'}}>
                <Col span={4} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <span style={{color: '#65676b'}}>Country:</span>
                </Col>
                <Col span={4} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <span style={{color: '#65676b'}}>Azerbaijan</span>
                </Col>
            </Row>

            <AboutManageAlerts default={defaultData} clickCancel={() => setShowModal(false)}
                               setShow={() => setShowModal(false)} showModal={showModal}/>

            {/*<ModalComponent show={showModal} width='600px'*/}
            {/*                title={<div style={{*/}
            {/*                    height: '30px',*/}
            {/*                    backgroundColor: '#335c9a',*/}
            {/*                    color: "white",*/}
            {/*                    padding: '10px 10px'*/}
            {/*                }}>*/}
            {/*                    SMS Pricing</div>}*/}
            {/*                cancel={() => {*/}
            {/*                    setShowModal(false)*/}
            {/*                }}*/}
            {/*                content={<AboutManageAlerts default={defaultData} clickCancel={() => setShowModal(false)}*/}
            {/*                                            setShow={() => setShowModal(false)}/>}*/}
            {/*/>*/}

        </div>
    )
}
export default AboutCompany;