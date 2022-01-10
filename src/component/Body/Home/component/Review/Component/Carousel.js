import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../style.css'
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import {Data} from './Data'
const Carousel = () =>{
    const [images, setImage] = useState('');
    const [service, setSetvices] = useState('');

    const Services = () => {
        axios.get("https://unclefixer.co.uk/api/services").then((response) => {
            console.log("response",response.data)
            setImage(response.data)
            setSetvices(response.data)
        })
    }
    useEffect(()=>{
        Services()
    },[])
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    };
    return(
        <div className={"Carousel-Review"}>
  <div className={"Slider-Review"}>
            <Slider {...settings}>
                {Data.map((item)=>(
                    <div className="Review-card">
                        <div className={'review-style'}>
                            <img src={item.img}
                                 className="review-img" title="" alt="" data-edit="false"
                                 data-editor="field"
                                 data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
                            <h2 className="card-heading">{item.title}</h2>
                            <div>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                            </div>
                            <p className="Review-para" >{item.heading}</p>
                            <h2 className="card-headings" >"{item.user}"</h2>
                            <small className="review-data" >{item.address} </small>
                        </div>

                    </div>
                ))}


            </Slider>
            </div>
        </div>
    )
}
export default Carousel;
