import React, {useState} from "react";
import {Button, message, Steps} from 'antd';
import InteerfaceStepModal from "./type";
import './style.css'

const StepsModal: React.FC<InteerfaceStepModal> = (props) => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <div className="steps-content">{props.steps[current].content}</div>
            <div className="steps-action">
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