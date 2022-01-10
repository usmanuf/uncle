import React, {Component, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {URI, ImageURL, URL_API, ProfileURL} from '../../../variables';
import './style.css';
import BreadCrumb from "../BreadCrumb/breadCrumb";
import Img1 from '../../../assets/Images/all-services-bg-mobile.jpg';

import ContentService from '../ContentService'
import Loaders from "../Loader";
import Helmets from "../Halmet";
import Home from "../../Body/Home/Home";
import { useParams } from 'react-router-dom';
const axios = require('axios').default;
const Cities = (props) =>{
const {handle} = useParams();
    const slug= props.match.params.handle
    const[services,setServices]=useState([]);
    const[content,setContent]=useState([]);
    const[Img,setImg]=useState('');
    const[Img1,setImg1]=useState('');
    const [general, setGeneral] = useState('')
    useEffect(() => {
        const getServiesData = () => {
            axios.get( URL_API + 'service-post/service/'+handle+'s').then((responce) => {
                console.log('s cities', responce.data.data)
                setServices(responce.data?.data?.servicePost)
                setImg(responce.data?.data?.servicePost[0])

                setContent(responce.data.data?.serviceContent)
                setGeneral(responce.data.data?.serviceContent[0])
                setImg1(responce.data.data?.serviceContent[0])
            })
                .catch(error => console.error(`Error: ${error}`));
        };

        getServiesData();
        // gernalContent();
    }, []);
    const downloadpdf = (e) =>{
        console.log('slug',e.target)
    }
    return(<>

            <div className={''}>
                {/*<BreadCrumb img={content[0]?ProfileURL+content[0].image:''} />*/}
                <Helmets title={services[0]? services[0].title: general?.sub_title} keyword={services[0]? services[0].title: general?.sub_title} description="title"/>

                <BreadCrumb title={services[0]? services[0].sub_title: general?.sub_title}  img={services[0]?ProfileURL+services[0].image:ProfileURL+general?.image}/>


                <div className={'cities'}>
                    <div className="container  mt-4">

                        <div className="row ">

                                <ContentService data={content}
                                />

                        </div>


                    </div>
                </div>


            </div>

        </>
    )
}
export default Cities;
