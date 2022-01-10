import React from 'react';
import './style.css';
import Carousel from './Component/Carousel'
const Home = () =>{
    return(

        <>
        <div className={"CitiesAboutUs"}>
            <div className={"text-best-services"}>
                    <h1 className={"heading-Title"}>
                        Cities We Covered In Pakistan
                    </h1>
                    <div className={"bar"}/>
                <p className={"mt-3 heading-Para  citespara"}>
                    Uncle Fixer is exceeding your expectations by providing a wide range of professional <b>handyman services</b> in many cities of Pakistan.
                </p>
            </div>
            <div>

            </div>
            <div className={"carousel-best-services"}>
<Carousel/>
            </div>
        </div>
        </>
    )
}
export default Home;
