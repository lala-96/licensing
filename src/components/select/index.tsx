import React from "react";
import SelectInterface from "./type";
import {Select} from "antd";

const SelectComponent: React.FC<SelectInterface> = (props) => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    return (
        <Select
            mode={props.mode}
            defaultValue={props.defaultValue}
            style={props.style}
            // onChange={handleChange}
            onChange={props.onChange}
            options={props.options}
            placeholder={props.placeholder}
            maxTagCount="responsive"
            className={props.className}
        />
    )
}
export default SelectComponent;