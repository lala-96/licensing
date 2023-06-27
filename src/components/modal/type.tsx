interface ModalInterface {
    show: boolean;
    content?: any;
    cancel?: (e: React.MouseEvent<HTMLElement>) => void,
    width?: string,
    title?: string,
}

export default ModalInterface;