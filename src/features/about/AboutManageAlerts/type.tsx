interface AboutAlert {
    default?:any;
    clickCancel?: (e: React.MouseEvent<HTMLElement>) => void,
    setShow?:any
    showModal:boolean

}
export default AboutAlert