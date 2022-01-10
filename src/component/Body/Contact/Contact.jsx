import React, { useContext, useState } from 'react'
import Banner from '../Banner/Banner'
import './Contact.css';
import Img from '../../../assets/Images/contact-us-bg.jpg'
import Img1 from '../../../assets/Images/contact-us-bg-mobile.jpg';
import Details from './component/details';
import Card from  '../../Reuseable/Card/Card'
import Map from './component/Map';
import { contactboxes, contactinputs } from '../../Appconstant'
import Iconbox from '../../Reuseable/Icon/Iconbox'
import Objectinput from '../../Reuseable/Input/Objectinput'
import AppButton from '../../Reuseable/Button/Button'
import emailjs from 'emailjs-com';
import { addNotification } from '../../Appfunctions'
import { ContextApp } from '../../../ContextAPI'
import Bannerprops from '../Banner/Bannerprops'
import BreadCrumb from "../../Reuseable/BreadCrumb/breadCrumb";
import Helmets from "../../Reuseable/Halmet";

function Contact() {
  const {notifisystem} = useContext(ContextApp)
  const [formvalues, setFormvalues] = useState({
    name: '',
    email: '',
    msg: ''
  })
  function sendEmail(e) {
    console.log('asd')
    e.preventDefault();
    emailjs.sendForm('service_jsaoihr', 'template_h5vq1co', e.target, 'user_B0W0FA6EBGqj9vC542Rs3')
      .then((result) => {
          console.log(result.text);
          const parameters = {
            msg: 'Email Sent!',
            icon: 'fad fa-envelope',
            notifisystem
          }
          addNotification(parameters)
      }, (error) => {
          console.log(error.text);
      });
  }
  const forminputs = contactinputs?.map(input=>{
    return <Objectinput
    text={input.text}
    value={formvalues}
    setValue={setFormvalues}
    obj={input.value}
    textarea={input.textarea}
    name={input.name}
    />
  })
  const contactboxesrow = contactboxes?.map(box=>{
    return (
       <Card copy={true} card={box} iconlink={
        <a href={box.link} target={!box.notblank&&'__blank'}>
          <i className='fal fa-chevron-right'></i>
        </a>
       }/>
    )
  })

  return (
    <div className="">
        <Helmets title={'Contact Us – Uncle Fixer'} description={'If you want Handyman service, Home appliance or emergency Home repair service, \n' +
        'Uncle Fixer is the best option. Call us to hire experienced fixer for any Query.' } keyword={'Home Repair Services, Home Repair Services, Home Repair Services, \n' +
        'Freelance Platform, Freelance Platform, Freelancing Sites'}/>
        <BreadCrumb title={'Contact Us'} img={Img} Imgs={Img1}/>
        <Details/>
        <Map/>
          {/*<Bannerprops*/}
          {/*img='https://i.imgur.com/fzc9vDw.png'*/}
          {/*title='Contact'*/}
          {/*text='Contact me to get your dream website up and ready for the rest of the world to see!'*/}
          {/*/>*/}
          {/*<div className="contactinfo">*/}
          {/*    <div className="contactitle">*/}
          {/*      <h2>Contact Me</h2>*/}
          {/*      <small className="graytext">*/}
          {/*        Don't hesitate to reach out to me!*/}
          {/*      </small>*/}
          {/*    </div>*/}
          {/*    <div className="contactboxes">*/}
          {/*      {contactboxesrow}*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="contactform">*/}
          {/*    <div className="leftcontact">*/}
          {/*      <Iconbox icon='fad fa-envelope'/>*/}
          {/*      <h2>Send Me a Message</h2>*/}
          {/*    </div>*/}
          {/*    <form onSubmit={(e)=>sendEmail(e)}>*/}
          {/*      {forminputs}*/}
          {/*      <AppButton text={'Submit'} icon='fad fa-envelope'/>*/}
          {/*    </form>*/}
          {/*</div>*/}
    </div>
  )
}
export default Contact
