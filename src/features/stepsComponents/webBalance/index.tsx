import React from "react";
import NumberInputComponent from "../../../components/NumberInput";
import {Row} from "antd";
import SelectComponent from "../../../components/select";

const SelectPackage: React.FC = () => {
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
                   Select the package you want to add
                </span>
                <SelectComponent
                    className='select-component-style'
                    options={OPTIONS}
                    defaultValue='100 feedback'/>
            </div>
        </Row>
    )
}
export default SelectPackage;

const OPTIONS = [
    {value: '100 feedback', label: '100 feedback'},
    {value: '200 feedback', label: '200 feedback'},
    {value: '300 feedback', label: '300 feedback'},
    {value: '400 feedback', label: '400 feedback'},
];