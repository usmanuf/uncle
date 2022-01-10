import React from 'react';
import './style.css';
import Tabs from '../Tabs/index'
import Img from '../../../../../assets/Images/decoration-star.svg';
import Contacta from "../../../../../assets/Images/about-section-img.png";
const Banner = ()=>{
    return(
        <>
            <div id="aboutUs" className="form-1">
                <img className="decoration-star" src={Img} alt="alternative"/>
                    <img className="decoration-star-2" src={Img} alt="alternative"/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image-container">
                                        <img className="img-fluid" src={Contacta} alt="alternative"/>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="About-container">
                                       <div className={'aboutHeader'}>
                                           <h1>WELCOME TO UNCLE FIXER</h1>
                                           <p>Uncle Fixer is Pakistan’s well-known Handyman service provider and one of the first <b>freelancing site.</b> Our purpose is to accomplish two goals with a single action. We improve the lives of both customers and fixers. Uncle Fixer enraptured thousands of hearts over more than one year by connecting customers to fixers. By simplifying, the process of acquiring home maintenance services, Uncle Fixer made users’ lives easier. Uncle fixer provides all kinds of services from cleaning to electrical services with low-cost, high-quality right at your door. Currently, Uncle Fixer provides 50+ services to our residential and business clients. We will soon increase our services by 100+ to better serve you.</p>
                                       </div>
<div>
    <Tabs/>
</div>

                                    </div>

                                </div>

                            </div>

                        </div>
                <img className="decoration-star" src={Img} alt="alternative"/>
                <img className="decoration-star-2" src={Img} alt="alternative"/>
            </div>
        </>
    )
}
export default Banner
