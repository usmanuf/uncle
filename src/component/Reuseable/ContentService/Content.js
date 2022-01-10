import React, {useEffect, useState} from 'react';
import Services from './component/Services';
import BreadCrumb from "../BreadCrumb/breadCrumb";
import {ProfileURL, URL_API} from "../../../variables";
import axios from "axios";

const SubService = (props) =>{
    console.log("propsssss",props)
    // const [general, setGeneral] = useState('')
    // useEffect(() => {
    //     const getServiesData = () => {
    //         axios.get( URL_API + 'service-post/service/' +slug+'s').then((responce) => {
    //             console.log('s cities', responce.data.data)
    //             setServices(responce.data?.data?.servicePost)
    //             setImg(responce.data?.data?.servicePost[0])
    //
    //             setContent(responce.data.data?.serviceContent)
    //             setGeneral(responce.data.data?.serviceContent[0])
    //             setImg1(responce.data.data?.serviceContent[0])
    //         })
    //             .catch(error => console.error(`Error: ${error}`));
    //     };
    //     getServiesData();
    //     // gernalContent();
    // }, []);
    return(
        <>
            {props?.service_post &&<BreadCrumb title={props?.service_post[0]?.title} img={ProfileURL+props?.service_post[0]?.image}/>}

            <Services data={props.data? props.data : props.service_post}/>

        </>
    )
}
export default SubService;
