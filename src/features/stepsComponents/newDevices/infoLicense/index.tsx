import React, {useEffect, useState} from "react";
import TableComponent from "../../../../components/table";
import qmeterService from "../../../../apis/qmeterService";
import './style.css'
import InfoLicenseType from "./type";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

const InfoLicense: React.FC<InfoLicenseType> = (props) => {
    const [addList, setAddList] = useState<any[]>();

    const store = useSelector((state: RootState) => state.params)
    console.log('store  ', store)

    useEffect(() => {
        qmeterService.get('/license/upgrade-license/add/?',
            {
                params: {
                    device_count: store
                }
            }
        ).then((data) => {
                setAddList([data.data.add])
            }
        )
    }, []);
    return (
        <div className='div-style'>
            <span className='text'>You Almost Done !</span>
            <TableComponent columns={columns} dataSource={addList} bordered={true}/>
        </div>

    )
}
export default InfoLicense;


const columns: any = [
    {
        title: 'License name',
        dataIndex: 'expire_date',
        width: '63%',
        ellipsis: true,
        render: (text: any, record: any, index: number) =>
            (
            <span style={{fontSize: '12px'}}>Add New Device License
                 <br/>
                 (Adding new device licenses to current license period. Expire on {text})
            </span>
        ),

    },
    {
        title: 'Quantity',
        dataIndex: 'device_count',
        key: 'device_count',
    },
    {
        title: 'Period',
        dataIndex: 'days',
        key: 'days',
    },
    {
        title: 'Cost',
        dataIndex: 'total_price',
        key: 'total_price',
    },
];