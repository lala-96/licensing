import React, {useState} from "react";
import RadioComponent from "../../../components/radio";
import {Radio, RadioChangeEvent, Row} from "antd";
import ModalComponent from "../../../components/modal";
import InterfaceUpgrade from "./type";
import ModalTitle from "../../modalTitle";
import StepsModal from "../../stepsModal";
import './style.css'

const LicenseUpgrade: React.FC<InterfaceUpgrade> = (props) => {
    const [radioValue, setRadioValue] = useState<number>();

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

    const checkRadio = (e: RadioChangeEvent) => {
        setRadioValue(e.target.value);
    }

    const choosSecondContent = () => {
        switch (radioValue) {
            case 1:
                return 'aaaaaaa';
                break
            case 2:
                return 'bbbbbb';
                break
        }
    }

    const license = licenseList.map((item, index) =>
        <Radio
            key={index}
            value={item.value}
        >
            {item.name}
        </Radio>
    );

    const firsContent =
        <Row
            justify='center'
            align='middle'
            className='main-row-style'
        >
            <div
                className='main-div-style'
            >
                <span>
                    What do you want to do?
                </span>
                <RadioComponent
                    content={license}
                    onChange={checkRadio}
                    value={radioValue}
                />
            </div>
        </Row>

    const steps = [
        {
            title: 'First',
            content: firsContent
        },
        {
            title: 'Second',
            content: choosSecondContent()

        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];

    return (
        <ModalComponent
            show={props.showModal}
            width='600px'
            title={<ModalTitle text='License Upgrade'/>}
            cancel={props.clickCancel}
            content={
                <StepsModal
                    steps={steps}
                />
            }
        />

    )
}
export default LicenseUpgrade;

