import React from "react";
import BtnInterface from "./type";
import {Button} from "antd";

const BtnComponent: React.FC<BtnInterface> = (props) => {
    return (
        <Button type={props.type} className={props.className} style={props.style} onClick={props.onClick}
                loading={props.loading}>{props.text}</Button>
    )
}
export default BtnComponent;