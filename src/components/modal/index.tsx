import React from "react";
import BtnComponent from "../button";
import {Modal} from "antd";
import {useState} from "react";
import ModalInterface from "./type";
import SmsPricing from "../../features/SmsPricing/ined";


const ModalComponent: React.FC<ModalInterface> = (props) => {


    return (
        <>
            <Modal title={props.title} open={props.show} onCancel={props.cancel} footer={[]} width={props.width}>
                {props.content}
            </Modal>
        </>
    );
}
export default ModalComponent