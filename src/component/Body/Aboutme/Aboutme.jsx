import React from 'react';
import Cities from './Component/Cities';
import Banner from './Component/Banner';
import Tabs from './Tabs/index';
import './Aboutme.css';
import Helmets from "../../Reuseable/Halmet";
const Aboutme = () =>{

  return (
    <div className="aboutme ">
        <Helmets title={'About Us – uncle Fixer'} description={'Are you looking for handyman services? Uncle Fixer provides you the best \n' +
        'handyman and home maintenance and repair services. Our goal is customer \n' +
        'satisfaction'} keyword={'Home Repair Services, Home Repair Services, Home Repair Services,Freelance Platform, Freelance Platform, Freelancing Sites'}/>
        <Banner/>
        <Cities/>
<Tabs/>

    </div>
  )
}
export default Aboutme;
