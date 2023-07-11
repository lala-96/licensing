interface NumberInterface {
    min?: number;
    max?: number;
    onChange?:any;
    default?:any;
    // onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

export default NumberInterface;