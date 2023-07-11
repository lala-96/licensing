import React, {useEffect, useState} from "react";
import {message, Upload, UploadFile, UploadProps} from "antd";
import {RcFile, UploadChangeParam} from "antd/es/upload";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import axios from "axios";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};


const UploadComponent: React.FC = () => {

    const [loadFile, setLoadFile] = useState<{}>();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {

            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
                console.log('url== ' ,  url)
                const product = {logo:url}
                axios.patch('https://apinew.testqmeter.net/api/v1/auth/company-edit/',product,{headers:{'Authorization': `${token}`}}
                ).then(respons=>{
                    console.log('respons ', respons)
                })
            });

        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );

    const token = 'Token 05d852a833f2d5c3c9b2133d8fd3eae77b30b9333eb32919d03bfaccf99a84f9';

    useEffect(() => {
        axios.get('https://apinew.testqmeter.net/api/v1/auth/company-edit/', {
            headers: {'Authorization': `${token}`}
        }).then((data) => {
            setImageUrl(data.data.logo)
        })

    }, []);
    return (
        <Upload
            name="avatar"
            listType="picture-circle"
            // className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}

        >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
        </Upload>
    )
}
export default UploadComponent;