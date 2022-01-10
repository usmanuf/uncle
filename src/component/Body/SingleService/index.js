import React, {Component, useEffect, useState} from 'react';
import "./style.css";
import SubServices from "../../Reuseable/ContentService";
import {URL_API} from "../../../variables";
import axios from "axios";
import Loaders from "../../Reuseable/Loader";

const ServicesCountry = (props) => {
    console.log('data',props);
    const [service, setService] = useState('');
    const [content, setContent] = useState('');


    useEffect(()=>{
        getPosts();
        getPost();

    },[])

    const getPosts = () => {

        axios.get(`${URL_API}service-post/showService/${props.match.params.services_slug}/${props.match.params.slug}`).then(response => {
            console.log('city_id', response.data.data)
            setService(response.data.data)
        });

    }
    const getPost = () => {

        axios.get(`${URL_API}service-post/getPost/${props.match.params.services_slug}`).then(response => {
            console.log('contentNew', response.data)
            setContent(response.data)
        });

    }
    // const getPost = () => {
    //     axios.get(`${URL_API}service-post/getPost/${props.match.params.services_slug}`).then(response => {
    //         console.log('content', response.data.data)
    //         setContent(response.data.data)
    //     });
    // }
    console.log("servicessssss",service)
    return (
        <React.Fragment>
            {service?.length>0 && service? <SubServices service_post={service}/>
:
                <div className={'d-flex justify-content-center my-5'}>
                <Loaders />
                </div>
                }
        </React.Fragment >
    );
}

export default ServicesCountry;
