import React from "react";
import {InputNumber} from "antd";
import NumberInterface from "./type";

const NumberInputComponent: React.FC<NumberInterface> = (props) => {
    // const onChange = (value: number) => {
    //     console.log('changed', value);
    // };
    return (
        <InputNumber min={props.min} max={props.max} defaultValue={props.default}
                     // onChange={(e: any) => onChange(e.target.value)}
            onChange={props.onChange}
                     style={{width: '100%', borderRadius:'0'}}/>
    )
}
export default NumberInputComponent;