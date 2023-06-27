import React from "react";
import {Col, Row, Upload, UploadProps} from "antd";
import BtnComponent from "../../components/button";
import {FolderAddOutlined} from "@ant-design/icons";


const AboutCompany: React.FC = () => {
    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>{
        console.log(newFileList)}

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
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        // fileList={fileList}
                        // onPreview={handlePreview}
                        onChange={handleChange}
                    >
                    </Upload>
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
                style={{borderBottom: '1px solid rgba(0,0,0,.1)', marginBottom:'38px'}}>
                <Col span={4} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <span style={{color: '#65676b'}}>Country:</span>
                </Col>
                <Col span={4} style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    <span style={{color: '#65676b'}}>Azerbaijan</span>
                </Col>
            </Row>


            {/*<ModalComponent show={showModal} width='1200px' cancel={() => {*/}
            {/*    setShowModal(false)*/}
            {/*}} content={<ManageDevices isSpin={isLoading}/>}/>*/}
        </div>
    )
}
export default AboutCompany;