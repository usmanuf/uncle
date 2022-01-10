 import React from 'react';
import Fixerbenefits from './Component/FixerBenefits'
import Img from '../../../assets/Images/hero-become-fixer.jpg';
import Img1 from '../../../assets/Images/hero-become-fixer-mobile.jpg';
import Faqs from './Component/Faqs'
import FeatureBenefits from './Component/FeatureBenefits'
import Offers from './Component/Offer/index'
import GetFeature from './Component/GetFeature'
import OurBestServices from "../Home/component/OurBestServices";
import Requirement from './Component/Requirmentfeature/index'
import BreadCrumb from "../../Reuseable/BreadCrumb/breadCrumb";
import Package from "./Component/Package";
const Name = () =>{
    return(
        < div className={""}>

            <BreadCrumb title={'Become a Fixer'} img={Img} Imgs={Img1}/>
<Fixerbenefits/>
<Faqs/>
<FeatureBenefits/>
            {/*<Offers/>*/}
            <Package/>
            <GetFeature/>
            <Requirement/>
<OurBestServices />


        </div>
    )
}
export default Name;
