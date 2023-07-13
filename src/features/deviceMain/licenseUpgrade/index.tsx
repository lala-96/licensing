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
    const [radioValue, setRadioValue] = useState<number>(-1);

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
        <CountLicense text=' What do you want to do?'/>,
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
                    },
                    {
                        title: 'fourth',
                        content: webBalance[2]
                    }
                ]);
                setCount(webBalance.length + 1)
                break
        }
    }
    console.log('radioValue  ', radioValue)

    const choosSecondContent = () => {
        switch (radioValue) {
            case 1:
                return addNewLicense[0]
                break
            case 2:
                return extendCurrentLicense[0];
                break
            case 3:
                return addExtendLicense[0];
                break
            case 4:
                return webBalance[0];
                break
        }
    }

    const choosthirdContent = () => {
        switch (radioValue) {
            case 1:
                return addNewLicense[1]
                break
            case 2:
                return extendCurrentLicense[1];
                break
            case 3:
                return addExtendLicense[1];
                break
            case 4:
                return webBalance[1];
                break
        }
    }

    const choosfourthContent = () => {
        switch (radioValue) {
            case 3:
                return addExtendLicense[2];
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

    const firsContent =(radioValue:number)=>
        <Row
            justify='center'
            align='middle'
            className='main-row-style'
        >
            <div
                className='main-div-style'
            >
                <span>
                    What do you want to do? {radioValue}
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
        content: ()=>firsContent(radioValue)
    },])

    useEffect(() => {
        console.log('tetstst')
        setSteps([...steps])
    }, [radioValue])

    //
    // const steps = [
    //     {
    //         title: 'First',
    //         content: firsContent
    //     },
    //     {
    //         title: 'Second',
    //         content: choosSecondContent()
    //     },
    //     {
    //         title: 'Last',
    //         content: choosthirdContent(),
    //     },
    //     {
    //         title: 'Last4',
    //         content: choosfourthContent(),
    //     },
    // ];

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
                />
            }
        />

    )
}
export default LicenseUpgrade;

