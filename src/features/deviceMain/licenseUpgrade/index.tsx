import React, {useEffect, useState} from "react";
import RadioComponent from "../../../components/radio";
import {Radio, RadioChangeEvent, Row} from "antd";
import ModalComponent from "../../../components/modal";
import InterfaceUpgrade from "./type";
import ModalTitle from "../../modalTitle";
import StepsModal from "../../stepsModal";
import './style.css'
import CountLicense from "../../stepsComponents/newDevices/countLicense";
import InfoLicense from "../../stepsComponents/newDevices/infoLicense";
import LongOfLicense from "../../extendLicenses/longOfLicense";
import SelectPackage from "../../stepsComponents/webBalance";

const LicenseUpgrade: React.FC<InterfaceUpgrade> = (props) => {
    const [disable, setDisable] = useState<boolean>(true);
    const [radioValue, setRadioValue] = useState<number>();
    const [count, setCount] = useState<number>(0)

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

    const addNewLicense = [
        <CountLicense text=' How many device license do you want to add ?'/>,
        <InfoLicense/>
    ];
    const extendCurrentLicense = [
        <LongOfLicense/>,
        <InfoLicense/>
    ];
    const addExtendLicense = [
        <CountLicense text='How many device license do you want to add ?'/>,
        <LongOfLicense/>,
        <InfoLicense/>
    ];
    const webBalance = [
        <SelectPackage/>,
        <InfoLicense/>
    ]
    const checkRadio = (e: RadioChangeEvent) => {
        setDisable(false);
        setRadioValue(e.target.value);
        switch (e.target.value) {
            case 1:
                setSteps((steps) => [
                        ...steps,
                        {
                            title: 'second',
                            content: addNewLicense[0]
                        },
                        {
                            title: 'third',
                            content: addNewLicense[1]
                        }
                    ]
                );
                setCount(addNewLicense.length + 1)
                break
            case 2:
                setSteps((steps) => [
                    ...steps,
                    {
                        title: 'second',
                        content: extendCurrentLicense[0]
                    },
                    {
                        title: 'third',
                        content: extendCurrentLicense[1]
                    }
                ]);
                setCount(extendCurrentLicense.length + 1)
                break
            case 3:
                setSteps((steps) => [
                    ...steps,
                    {
                        title: 'second',
                        content: addNewLicense[0]
                    },
                    {
                        title: 'third',
                        content: addExtendLicense[1]
                    },
                    {
                        title: 'fourth',
                        content: addExtendLicense[2]
                    }
                ]);
                setCount(addExtendLicense.length + 1)
                break
            case 4:
                setSteps((steps) => [
                    ...steps,
                    {
                        title: 'second',
                        content: webBalance[0]
                    },
                    {
                        title: 'third',
                        content: webBalance[1]
                    }
                ]);
                setCount(webBalance.length + 1)
                break
        }
    };

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
                <span className='header-text-style'>
                    What do you want to do?
                </span>
                <RadioComponent
                    content={license}
                    onChange={checkRadio}
                    value={radioValue}
                />
            </div>
        </Row>;

    const [steps, setSteps] = useState<any[]>([{
        title: 'First',
        content: firsContent
    }]);

    useEffect(() => {
        steps[0] = {
            title: 'First',
            content: firsContent
        }
        setSteps([...steps])
    }, [radioValue]);

    return (
        <ModalComponent
            show={props.showModal}
            width='800px'
            title={<ModalTitle text='License Upgrade'/>}
            cancel={props.clickCancel}
            content={
                <StepsModal
                    steps={steps}
                    count={count}
                    disableBtn={disable}
                />
            }
        />

    )
}
export default LicenseUpgrade;

