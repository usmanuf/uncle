import React, { useState } from "react";
import'./style.css';
import uploadFile from "./upload";
import { FiUploadCloud } from 'react-icons/fi';
import { ProgressBar, Count } from "./WidgetStyles";

function UploadWidget() {
    const [percentage, setPercentage] = useState(0);
    const [imgName, setImgName] = useState('')

    const handleFile = async (e) => {


            const file = e.target.files[0];
            const formData = new FormData();
        console.log('file',file)
        setImgName(file.name)
            formData.append("image", file);

            await uploadFile(formData, setPercentage);
            setPercentage(0);

    };
    console.log('perstage',percentage)
    return (
        <div className={'Wrapper mt-2'}>
            <div className={'WidgetWrapper'}>
                <div className="uploadIcon">
                  <FiUploadCloud/>
                </div>
                <div className="right">
                    <p className={'text-left'}>Add Pictures</p>
                    <ProgressBar percentage={percentage} className=" ProgressBar">
                        <div />
                    </ProgressBar>
                    <div>{imgName}</div>
                </div>
                <div className={'count'}>{percentage}%</div>
                <input onChange={handleFile} type="file" />
            </div>
        </div>
    );
}

export default UploadWidget;
