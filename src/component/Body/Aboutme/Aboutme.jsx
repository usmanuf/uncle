import React from 'react'
import Aboutsection from '../Aboutsection/Aboutsection'
import Bannerprops from '../Banner/Bannerprops'
import Cities from './Component/Cities'
import Banner from './Component/Banner'
import Tabs from './Tabs/index'
import './Aboutme.css'
import BreadCrumb from "../../Reuseable/BreadCrumb";
import Img from '../../../assets/Images/about1.jpg';
import Feature from './Component/Feature/index'
import Helmets from "../../Reuseable/Halmet";
// import Labraries from './Component/Labraies/index'
// import Slider from './Component/Slider/index'
const Aboutme = () =>{

  return (
    <div className="aboutme ">
        <Helmets title={'About Us – uncle Fixer'} description={'Are you looking for handyman services? Uncle Fixer provides you the best \n' +
        'handyman and home maintenance and repair services. Our goal is customer \n' +
        'satisfaction'} keyword={'Home Repair Services, Home Repair Services, Home Repair Services,Freelance Platform, Freelance Platform, Freelancing Sites'}/>
        {/*<BreadCrumb img={Img} title={'About Us'}/>*/}
        <Banner/>
        <Cities/>
<Tabs/>
{/*<Slider/>*/}
{/*<Labraries/>*/}
{/*<Feature/>*/}
{/*       <Bannerprops*/}
{/*        img='https://i.imgur.com/1PBKN6Z.png'*/}
{/*        title='About Me'*/}
{/*        text='Learn More about me and my skills.'/>*/}
{/*        <div className="aboutmepart">*/}
{/*          <Aboutsection fulltext limit={Infinity}/>*/}
{/*        </div>*/}
    </div>
  )
}
export default Aboutme
