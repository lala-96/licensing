import React, {useState} from "react";
import {Col, Row} from "antd";
import BtnComponent from "../../../components/button";
import ModalComponent from "../../../components/modal";
import SmsPricing from "../../SmsPricing/ined";
import ManageDevices from "../manageDevices";
import LicenseUpgrade from "../licenseUpgrade";

const DviceComponent: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [modalType, setModalType] = useState<string>('')

    const [showModal, setShowModal] = useState<boolean>(false)

    const showDevice = () => {
        setModalType('devices');
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 500);
        setShowModal(true);
    }
    const showLicense = () => {
        setModalType('license');
        setShowModal(true);
    }
    const list = DeviceInfoList.map(data => <Row
        style={{borderBottom: DeviceInfoList.indexOf(data) === (DeviceInfoList.length - 1) ? '' : '1px solid rgba(0,0,0,.1)'}}>
        <Col span={12} style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <span style={{color: '#65676b'}}>{data.name}</span>
        </Col>
        <Col span={12} style={{paddingTop: '10px', paddingBottom: '10px'}}>
            <span style={{float: 'right', color: '#65676b'}}>{data.value}</span>
        </Col>
    </Row>)

    return (
        <div style={{backgroundColor: "#fff", padding: '0 20px', border: '1px solid rgba(0,0,0,.1)'}}>
            <Row style={{
                borderBottom: '1px solid rgba(0,0,0,.1)',
                paddingTop: '10px',
                paddingBottom: '20px',
                marginBottom: '20px'
            }}>
                <Col span={24}>
                    <span style={{color: '#555', fontWeight: '400'}}>Device Licence information</span>
                </Col>
            </Row>
            {list}
            <Row style={{paddingBottom: '30px', marginTop: '47px', marginBottom: '30px'}}>
                <Col span={6} offset={13}>
                    <BtnComponent text='License in use' style={{borderRadius: '0'}} onClick={showDevice}
                                  loading={isLoading}/>
                </Col>
                <Col span={5}>
                    <BtnComponent text='Upgrade license'
                                  style={{borderRadius: '0', backgroundColor: '#335c9a', color: 'white'}}
                                  onClick={showLicense}
                    />
                </Col>
            </Row>

            {modalType === 'devices' ? <ManageDevices isSpin={isLoading} clickCancel={() => setShowModal(false)} showModal={showModal}/>
                :
                <ModalComponent show={showModal} width='600px' title={<div
                    style={{height: '30px', backgroundColor: '#335c9a', color: "white", padding: '10px 10px'}}>
                    License Upgrade </div>} cancel={() => {
                    setShowModal(false)
                }} content={<LicenseUpgrade/>}/>
            }


        </div>
    )
}
export default DviceComponent


const DeviceInfoList = [{
    name: 'Last purchase',
    value: '2022-05-06',
},
    {
        name: 'License',
        value: '10',
    },
    {
        name: 'License in use',
        value: '0',
    },
    {
        name: 'Available license',
        value: '10',
    },
    {
        name: 'Expires',
        value: '2026-01-26',
    },
    {
        name: 'Days left',
        value: '948',
    }

];