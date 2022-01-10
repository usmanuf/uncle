import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { gridservices } from '../../Appconstant'
import Bannerprops from '../Banner/Bannerprops';
import Allservices from '../../Reuseable/Allservice';
import Gridservice from './Gridservice'
import Img from '../../../assets/Images/all-services-bg.jpg';
import Img2 from '../../../assets/Images/all-services-bg-mobile.jpg';
import './Services.css'
import BreadCrumb from "../../Reuseable/BreadCrumb/breadCrumb";
import Helmets from "../../Reuseable/Halmet";
function Services() {
  const gridservicesrow = gridservices?.map(service=>{
    return (
       <Gridservice
        service={service}
       />
    )
  })

     const gridser = gridservices?.map(service=>{
    return (
       <Gridservice
        service={service}
       />
    )
  })




  return (
    <div className="services">

        <Helmets title={'Handyman Services | Freelancing Sites – Uncle Fixer'} keyword={'Best Handyman Services, Home Maintenance Services, Home Repair Services, \n' +
        'Freelance Platform, Freelancing Sites, Ac Services, Electrician Services, Plumber'} description={'For the maintenance of your home, you require the best home repair services. From\n' +
        'Uncle Fixer’s best services, you will save far more money in the long term.'}/>

        <BreadCrumb title={'All Services'} img={Img} Imgs={Img2}/>
        {/*<Bannerprops*/}
        {/*img='https://i.imgur.com/oFYPpob.png'*/}
        {/*title='Services'*/}
        {/*text='Learn More about the services I offer and how they can get your dream website up and running as soon as possible!'/>*/}
       <Allservices id={'service'}/>

        {/*<div className="servicescontainer">*/}
        {/*  {gridservicesrow}*/}
        {/*</div>*/}
     </div>
  )
}
export default Services
