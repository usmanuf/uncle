import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style.css'
import {ImageURL} from "../../../../../../variables";
import axios from "axios";
import {Link} from "react-router-dom";


const Carousel = () =>{
    const [service, setSetvices] = useState([]);

    const Services = () => {
        axios.get("https://unclefixer.co.uk/api/services").then((response) => {
            console.log("response",response.data)
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
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,

        responsive: [
            {
                breakpoint: 1924,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
        <div className={"Carousel-bestServices"}>

                <Slider {...settings}>

                    {service?.slice(0, 8).map((service, key) => {
                        return (<>
                                {service.slug ? (<Link className={'servicesCaro linkServices'}
                                                       to={"/" + service.slug + '-services'}>
                                    <div className="a-box " key={key}>
                                        <div className="img-container">
                                            <div className="img-inner">
                                                <div className="inner-skew">
                                                    <img
                                                        src={ImageURL + service.image}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-container">
                                            <h3 className={'linkServices'}>{service.service_name} Service</h3>
                                            <Link to={'/book-now/'} className={"link"}>
                                                <button className={"bookNowServices"}> Book Now
                                                </button>
                                            </Link>
                                        </div>

                                    </div>
                                </Link>) : (
                                    <div className={' servicesCaro '}>
                                        <div className="a-box">
                                            <div className="img-container">
                                                <div className="img-inner">
                                                    <div className="inner-skew">
                                                        <img
                                                            src={ImageURL + service.image}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h3 className={'linkServices'}>{service.service_name} Service</h3>
                                                <Link to={'/book-now/'} className={"link"}>
                                                    <button className={"bookNowServices"}> Book Now
                                                    </button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </>
                        )
                    })

                    }
                </Slider>

                </div>
    );
}
export default Carousel;
