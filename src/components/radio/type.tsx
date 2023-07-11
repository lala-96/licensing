import type {RadioChangeEvent} from 'antd';

interface RadioInterface {
    onChange?: (e: RadioChangeEvent) => void,
    value?: number,
    content?:any,
}

export default RadioInterface;