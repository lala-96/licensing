import React from "react";
import {Row} from "antd";
import './style.css'
import NumberInputComponent from "../../../../components/NumberInput";
import InterfaceCountLicense from "./type";

const CountLicense: React.FC<InterfaceCountLicense> = (props) => {
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
                   {props.text}
                </span>
                <NumberInputComponent min={0} max={10}/>
            </div>
        </Row>
    )
}
export default CountLicense;