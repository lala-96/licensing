interface ModalInterface {
    show: boolean;
    content?: any;
    cancel?: (e: React.MouseEvent<HTMLElement>) => void,
    width?:string,
}
export default ModalInterface;