import React from "react";
import {Row} from "antd";
import './style.css'
import NumberInputComponent from "../../../../components/NumberInput";
import InterfaceCountLicense from "./type";
import {sendParam} from "../../../../store/params";
import {useDispatch} from "react-redux";

const CountLicense: React.FC<InterfaceCountLicense> = (props) => {
    const dispatch = useDispatch();

    const getInputValue = (value: any) => {
        dispatch(sendParam(value));
    }
    return (
        <Row
            justify='center'
            align='middle'
            className='main-row-style'
        >
            <div
                className='main-div-style'
            >
                <span className='header-text-style'>
                   {props.text}
                </span>
                <div className='input-div'>
                    <NumberInputComponent min={0} max={10} onChange={getInputValue} default={1}/>
                </div>
            </div>
        </Row>
    )
}
export default CountLicense;