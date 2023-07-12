import React, {useState} from "react";
import {Col, Row} from "antd";
import BtnComponent from "../../../components/button";
import ManageDevices from "../manageDevices";
import LicenseUpgrade from "../licenseUpgrade";
import './style.css'

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
    const list = DeviceInfoList.map(data =>
        <Row
            style={{borderBottom: DeviceInfoList.indexOf(data) === (DeviceInfoList.length - 1) ? '' : '1px solid rgba(0,0,0,.1)'}}>
            <Col
                span={12}
                className='col-style'>
            <span
                className='span-text'
            >
                {data.name}
            </span>
            </Col>
            <Col
                span={12}
                className='col-style'>
                <span
                    className='span-position span-text'
                >
                    {data.value}
                </span>
            </Col>
        </Row>
    )

    return (
        <div className='main-div'>
            <Row
                className='device-row'
            >
                <Col span={24}>
                    <span
                        className='header-span-style'
                    >
                        Device Licence information
                    </span>
                </Col>
            </Row>
            {list}
            <Row
                className='device-btn-row'
            >
                <Col span={6} offset={13}>
                    <BtnComponent
                        text='License in use'
                        className='license-btn'
                        onClick={showDevice}
                        loading={isLoading}/>
                </Col>
                <Col span={5}>
                    <BtnComponent
                        text='Upgrade license'
                        onClick={showLicense}
                        className='upgrade-btn'
                    />
                </Col>
            </Row>
            {modalType === 'devices' ?
                <ManageDevices
                    isSpin={isLoading}
                    clickCancel={() => setShowModal(false)}
                    showModal={showModal}
                />
                :
                <LicenseUpgrade
                    clickCancel={() => setShowModal(false)}
                    showModal={showModal}
                />
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