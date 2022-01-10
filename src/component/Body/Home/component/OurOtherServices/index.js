import React, {useEffect, useState} from 'react';
import './style.css';
import {ImageURL} from "../../../../../variables";
import axios from "axios";
import {Link} from 'react-router-dom';
const Home = () =>{
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

            <div className={"other-services"}>
                <div className={"text-best-services"}>
                    <div className={"heading-Title"}>
                        Our Other Services
                    </div>
                    <div className={"bar"}/>
                    <div className={"heading-Para mt-3"}>
                        Our Other Services are also accessible to be performed and provide comfort to the Customer.
                    </div>
                </div>
                <div className={"othersServices"}>
                    {/*<Some data={service}/>*/}
                    <div className={"row"}>
                        {service.slice(0, 8).map((service,key)=>{
                            return(<>
                                { service.slug ? ( <Link className={"linkServices col-lg-3 col-xl-3 col-md-3 col-sm-4 col-xs-12 p-2"} to={"/" + service.slug + '-services'}>

                <div className={"bastServicesDiv "} key={key}>
            <div className={"card-otherServices"}>
                <img className={"cardImg"} alt={"#"} src={ImageURL + service.image}/>
                <div className={"cardHeading"}>{service.service_name} Services</div>
                <button className={"bookNow"}><Link className={'link'} to={'/book-now/'}>Book Now</Link></button>
            </div>
        </div>

               </Link>):(
                                    <div key={key} className={"col-lg-3 col-xl-3 col-md-3 col-sm-4 col-xs-12 p-2"}>
                                    <div className={"bastServicesDiv "}>
                                        <div className={"card-otherServices"}>
                                            <img className={"cardImg"} alt={"#"} src={ImageURL + service.image}/>
                                            <h2 className={"cardHeading"}>{service.service_name} Services</h2>
                                            <button className={"bookNow"}><Link className={'link'} to={'/book-now/'}>Book Now</Link></button>
                                        </div>
                                    </div>
                                    </div>
                                  ) }
                                    </>)
                                    })}


                    </div>
                    <div className={"OurServiceBtn"}>
<Link to={"/services/"}>
    <button className="btnHome">
        More Services
    </button>
</Link>

                    </div>

                </div>




            </div>
        </>
    )
}
export default Home;
