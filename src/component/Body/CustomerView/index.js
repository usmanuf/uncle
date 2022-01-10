import React from 'react';
import Customerbenefits from './Component/Customerbenefits'
import Faqs from './Component/Faqs';
import Img from '../../../assets/Images/become-a-customerss (1).jpg';

import FeatureBenefits from './Component/FeatureBenefits'
import packages from './Component/Package'
import GetFeature from './Component/GetFeature'
// import {OurBestServices, OurOtherServices, Review} from "../index";

import OurBestServices from "../Home/component/OurBestServices";
import OurOtherServices from "../Home/component/OurOtherServices";
import Review from "../Home/component/Review";
import WhyChoose from "../Home/component/WhyChouseUs";
import BreadCrumb from "../../Reuseable/BreadCrumb";
const Name = () =>{
    return(
        < div className={""}>
            <BreadCrumb title={"Become a Customer"} img={Img} />
<Customerbenefits/>
<OurBestServices/>
<OurOtherServices/>
<Faqs/>
<WhyChoose/>
<Review/>

        </div>
    )
}
export default Name;
