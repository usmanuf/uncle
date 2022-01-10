import React, {useState} from 'react';
import Services from './component/Services';
import BreadCrumb from "../BreadCrumb/breadCrumb";
import {ProfileURL} from "../../../variables";
import Helmets from "../Halmet";

const SubServices = (props) =>{
    console.log("propsssss",props)


    return(
        <>

            {props?.service_post &&<BreadCrumb title={props?.service_post[0]?.title} img={ProfileURL+props?.service_post[0]?.image}/>}

            <Services data={props.data? props.data : props.service_post}/>

        </>
    )
}
export default SubServices;
