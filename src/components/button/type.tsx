interface BtnInterface {
    type?:"link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
    text?: any;
    className?: string;
    style?: {},
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
    loading?:boolean,
}

export default BtnInterface;