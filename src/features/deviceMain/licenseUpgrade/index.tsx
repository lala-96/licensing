import React from "react";
import RadioComponent from "../../../components/radio";
import {Col, Radio, Row} from "antd";
import ModalComponent from "../../../components/modal";
import InterfaceUpgrade from "./type";

const LicenseUpgrade: React.FC<InterfaceUpgrade> = (props) => {
    const licenseList = [{
        value: 1,
        name: 'Add New Device License'
    }, {
        value: 2,
        name: 'Extend Current License'
    }, {
        value: 3,
        name: 'Add & Extend License'
    }, {
        value: 4,
        name: 'Web Balance'
    },
    ];

    const license = licenseList.map(item => <Radio value={item.value}>{item.name}</Radio>)

    return (
        <ModalComponent show={props.showModal} width='600px' title={<div
            style={{height: '30px', backgroundColor: '#335c9a', color: "white", padding: '10px 10px'}}>
            License Upgrade </div>}
                        cancel={props.clickCancel}
                        content={
                            <Row justify='center' align='middle' style={{padding: '20px'}}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    gap: '20px'
                                }}>
                                    <span>What do you want to do?</span>
                                    <RadioComponent content={license}/>
                                </div>


                            </Row>
                        }/>

    )
}
export default LicenseUpgrade;