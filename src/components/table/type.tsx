interface TableInterface {
    columns?: any,
    dataSource?: any,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    // TableProps<RecordType>.onChange?: ((pagination: any,
    //                                     filters: Record<string, any | null>,
    //                                     sorter: (any<any> | any<...>[]),
    // extra: TableCurrentDataSource<...>) => void) | undefined
}

export default TableInterface