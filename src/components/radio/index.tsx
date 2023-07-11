import React from "react";
import type {RadioChangeEvent} from 'antd';
import {Input, Radio, Space} from 'antd';
import RadioInterface from "./type";

const RadioComponent: React.FC<RadioInterface> = (props) => {
   return (
        <Radio.Group onChange={props.onChange} value={props.value}>
            <Space direction="vertical">
                {props.content}
                {/*<Radio value={1}>Option A</Radio>*/}
                {/*<Radio value={2}>Option B</Radio>*/}
                {/*<Radio value={3}>Option C</Radio>*/}
            </Space>
        </Radio.Group>
    )
}
export default RadioComponent;