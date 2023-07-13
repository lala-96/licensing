import React, {useState} from "react";
import {Radio, RadioChangeEvent, Row} from "antd";
import RadioComponent from "../../../components/radio";
import './style.css'

const LongOfLicense: React.FC = () => {
    const [radioValue, setRadioValue] = useState<number>();
    const checkRadio = (e: RadioChangeEvent) => {
        setRadioValue(e.target.value);
    }
    const license = licenseList.map((item, index) =>
        <Radio
            key={index}
            value={item.value}
        >
            {item.name}
        </Radio>
    );
    return (
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
    )
}
export default LongOfLicense

const licenseList = [{
    value: 1,
    name: '1 months'
}, {
    value: 2,
    name: '2 months'
}, {
    value: 3,
    name: '3 months'
}, {
    value: 4,
    name: '4 months'
},
];