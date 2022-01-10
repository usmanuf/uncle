import React from 'react';
import './style.css';
import Carousel from './Component/Carousel'
const Review = () =>{
    return(

        <div className={"Review"}>
            <div className={'py-5'}>
            <div className={"text-best-services"}>
                <h1 className={"heading-Title"}>
                    Our Valuable Customer Review
                </h1>
                <div className={"bar"}/>

                <p className={"heading-Para container mt-3"}>
                    We'd love to get feedback about our services. We've taken your suggestions into consideration, and we hope you’ll appreciate our all service.
                </p>
            </div>
            <div>
                <div className="container">
                </div>
            </div>
            <div className={"container"}>
<Carousel/>
            </div>
        </div>
        </div>
    )
}
export default Review;
