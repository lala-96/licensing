import React, {useState} from "react";
import {Button, message, Radio, RadioChangeEvent, Row, Steps} from 'antd';
import InteerfaceStepModal from "./type";
import './style.css'
import RadioComponent from "../../components/radio";

const StepsModal: React.FC<InteerfaceStepModal> = (props) => {
    const [current, setCurrent] = useState(0);
    const [radioValue, setRadioValue] = useState<number>();

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    // const checkRadio = (e: RadioChangeEvent) => {
    //     setRadioValue(e.target.value);
    // }
    //
    // const choosSecondContent = () => {
    //     switch (radioValue) {
    //         case 1:
    //             return 'aaaaaaa';
    //             break
    //         case 2:
    //             return 'bbbbbb';
    //             break
    //     }
    // }
    //
    // const radios = licenseList.map((item, index) =>
    //     <Radio
    //         key={index}
    //         value={item.value}
    //     >
    //         {item.name}
    //     </Radio>
    // );
    //
    // const firsContent =
    //     <Row
    //         justify='center'
    //         align='middle'
    //         className='main-row-style'
    //     >
    //         <div
    //             className='main-div-style'
    //         >
    //             <span>
    //                 What do you want to do?
    //             </span>
    //             <RadioComponent
    //                 content={radios}
    //                 onChange={checkRadio}
    //                 value={radioValue}
    //             />
    //         </div>
    //     </Row>
    //
    // const steps = [
    //     {
    //         title: 'First',
    //         content: firsContent
    //     },
    //     {
    //         title: 'Second',
    //         content: choosSecondContent()
    //
    //     },
    //     {
    //         title: 'Last',
    //         content: 'Last-content',
    //     },
    // ];
    //

    return (
        <>
            <div className="steps-content">{props.steps[current].content}</div>
            <div className="steps-action">
                <div>
                    <span>stem {current+1} of  {props.count}</span>
                </div>
                <div>
                    {current < props.steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === props.steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>

            </div>
        </>

    )
}
export default StepsModal;

// const steps = [
//     {
//         title: 'First',
//         content: 'First-content',
//     },
//     {
//         title: 'Second',
//         content: 'Second-content',
//     },
//     {
//         title: 'Last',
//         content: 'Last-content',
//     },
// ];

// const licenseList = [{
//     value: 1,
//     name: 'Add New Device License'
// }, {
//     value: 2,
//     name: 'Extend Current License'
// }, {
//     value: 3,
//     name: 'Add & Extend License'
// }, {
//     value: 4,
//     name: 'Web Balance'
// },
// ];