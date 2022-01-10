import React, { useEffect, useState } from 'react'
import { profile } from '../../Appconstant'
import Carouselcont from '../../Reuseable/Carousel/Carouselcont'
import Typeonload from '../../Reuseable/Typeonload/Typeonload'
import Aboutsection from '../Aboutsection/Aboutsection'
import Aboutuser from './component/AboutUncleFixer/index'
import Banner from '../Banner/Banner';
import Bestservices from './component/OurBestServices'
import Slide from '../Banner/Slide'
import Other from './component/OurOtherServices';
import Featuressection from '../Featuressection/Featuressection'
import WhyChoose from "./component/WhyChouseUs";
import Review from "./component/Review";
import HeroSection from "./component/HeroSection";
import Helmets from "../../Reuseable/Halmet";
import ContextAppProvider from "../../../ContextAPI";
function Classified(props) {
  const [currentslide, setCurrentslide] = useState(0)
  const slidesrow = profile?.map((el, i)=>{
    return <Slide  slide={el} index={i} currentslide={currentslide}/>
  })

  const bannercont = {
  html:
      <>
      <div className="title">
        <h2>
            <Typeonload text={'unclefixer'} />
          <small className='graytext' style={{fontSize: '14px'}}>
            <Typeonload text='Web Developer' startDelay={1000} />
          </small>
        </h2>
        <div className='hr'></div>
    </div>
      <Carouselcont slides={slidesrow} setCurrentslide={setCurrentslide} currentslide={currentslide}/>
    </>
  }

  useEffect(()=>{
    setCurrentslide(0)
  },[])

  return (
    <div className='home'>
        <Helmets title={' Best Handyman Services | Home Maintenance Services'} keyword={'Best Handyman Services, Home Maintenance Services, Home Repair Services, Freelance Platform, Freelancing Sites, Ac Services,\n' +
        '  Electrician Services, Plumber Services, CCTV Services, Home Appliance Repair, Solar Panel Installation Services, Car Rental Services, Cleaning Services,\n' +
        '  Travel Agent Services, Car Towing Services, Carpentry Services, Refrigerator Services, Curtain Services, Data Entry Services, Door Lock Repair Services,\n' +
        '  Furniture Polish Services, Graphic Designer Services, Building Contractors Services, Home Generator Service, Home Tailoring Service, Led repair services,\n' +
        '  Masonry Services, Mobile Repair Services, Mover and Packers Service, Networking Service, Online Tutor Services, Wall Painter Services, Pickup Services,\n' +
        '  Tank Cleaning Service'} description={'Uncle Fixer is the best Handyman service provider. We provide Electrician, CCTV, Solar Installation, Carpenter and Home Appliance services to our customers.'}/>
        {/*<Showcase />*/}
        <HeroSection/>
        <Aboutuser/>
        <Bestservices/>
        <Other/>
        <WhyChoose/>
        <Review/>

        {/*<Banner*/}
        {/*name='unclefixer'*/}
        {/*hr={true}*/}
        {/*html={bannercont.html}*/}
        {/*height='100vh'*/}
        {/*// style={{*/}
        {/*//   backgroundImage: 'url(https://i.imgur.com/n743WDX.png)',*/}
        {/*//   backgroundAttachment: 'fixed'*/}
        {/*// }}*/}
        {/*/>*/}
        {/*<Aboutsection />*/}
        {/*<Featuressection />*/}
    </div>
  )
}
export default Classified;
