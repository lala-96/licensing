import React from "react";
import {Modal} from "antd";
import ModalInterface from "./type";
import './style.css';


const ModalComponent: React.FC<ModalInterface> = (props) => {


    return (
        <>
            <Modal title={props.title} open={props.show} onCancel={props.cancel} width={props.width} footer={[]}>
                {props.content}
            </Modal>
        </>
    );
}
export default ModalComponent