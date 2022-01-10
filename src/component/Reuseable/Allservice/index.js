import React, {useEffect, useState} from 'react';
import './styles.css'
import {ImageURL} from "../../../variables";
// import Slider from "react-slick";
import axios from "axios";
import {Link} from 'react-router-dom'
// import Sample from './Sample'
import ServiceLoader from '../Loader/serviceLoader'
const Allservices = () =>{
    const [searchTerm, setSearchTerms] = useState('')
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
    return(
        <>
            {/*<Sample/>*/}
            <div className={'container mb-4'}>
                <div className={'d-flex flex-column justify-content-center align-item-center m-auto mt-4 mb-4'}>
                    <br/>
                    <br/>
                    <div className={"heading-Title m-auto"}>
                        Our All Services
                    </div>
                    <div className="bar m-auto"></div>
                    <br/>
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input onChange={event => {setSearchTerms(event.target.value)}} className="search_input" type="text" name="" placeholder="Search..."/>
                                <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                        </div>
                    </div>
                </div>



                  <div className={'row'}>

                        {service.filter((val)=>{
                            if(searchTerm == ''){
                                return val
                            }else if (val.service_name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val
                            }
                        }
                        ).map((service)=>{
                            return(<>
                                    { service.slug ? ( <Link className={'col-md-6 col-lg-4 col-xl-3 col-sm-12 m-auto allServices linkServices'}
                                                             to={"/" + service.slug + '-services'}>
                                        <div className="a-box ">
                                            <div className="img-container">
                                                <div className="img-inner">
                                                    <div className="inner-skew">
                                                        <img
                                                            src={ImageURL + service.image}
                                                            alt="services"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h3 className={'linkServices'}>{service.service_name} Services</h3>
                                                <Link to={'/book-now/'} className={"link"}>
                                                    <button className={"bookNowServices"}> Book Now
                                                    </button>
                                                </Link>
                                            </div>

                                        </div> </Link>):(
                                        <div className={'col-md-6 col-lg-4 m-auto col-xl-3 col-sm-12 allServices'}>
                                            <div className="a-box">
                                                <div className="img-container">
                                                    <div className="img-inner">
                                                        <div className="inner-skew">
                                                            <img
                                                                src={ImageURL + service.image}
                                                                alt="services"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-container">
                                                    <h3 className={'linkServices'}>{service.service_name} Services</h3>
                                                    <Link to={'/book-now/'} className={"link"}>
                                                        <button className={"bookNowServices"}> Book Now
                                                        </button>
                                                    </Link>
                                                </div>

                                            </div></div>
                                    ) }
                                </>
                            ) })}
                    </div>



            </div>
        </>
    )
}
export default Allservices;
