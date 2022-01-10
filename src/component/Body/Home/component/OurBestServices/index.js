import React from 'react';
import './style.css';
import Carousel from './Component/Carousel';
const Home = () =>{
    return(

        <>

        <div className={"Best-services"}>
            <div className={"text-best-services"}>
                    <div className={"heading-Title"}>
                        Our best Services
                    </div>
                    <div className={"bar"}/>
                <div className={"mt-3 heading-Para container"}>
                    The global service sector is becoming increasingly competitive.
                    Uncle fixer makes it more competitive by offering hot services right at your door step.
                </div>
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
