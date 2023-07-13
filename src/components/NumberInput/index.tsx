import React from "react";
import {InputNumber} from "antd";
import NumberInterface from "./type";

const NumberInputComponent: React.FC<NumberInterface> = (props) => {
    return (
        <InputNumber
            min={props.min}
            max={props.max}
            defaultValue={props.default}
            onChange={props.onChange}
            style={{width: '100%', borderRadius: '0'}}/>
    )
}
export default NumberInputComponent;