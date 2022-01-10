import React, { useContext } from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import Columns from './Columns'
import './Footer.css'
import Icon from '../Reuseable/Icon/Icon'
import { linksfooter, contactboxes, services, socialicons } from '../Appconstant'
import Logo from '../Reuseable/Logo/Logo'
function Footer(props) {
  const columns = [
    {
      title: <> <Logo />
      <div>
          <h2 className={'footerHeading'}>About Us</h2>
          <div className={'bar-footer'}></div>
          <p className={'paraFooter'}>
              Uncle Fixer is Pakistan’s most reputable top Handyman services provider and one ofthe first freelancing sites. Our mission is to accomplish two goals with single action. We offer productivity in both customer and worker’s (fixers) lives.
          </p>
      </div>
      </>,
      logo: true
    },
    {
      title: 'Popular Services',
      links: services,
      linktitle: true
    },
      {
          title: 'Main Menu',
          links: [
              {
                  text: 'Home',
                  icon: 'fa fa-home',
                  link: '/'
              },
              {
                  text: 'About Us',
                  icon: 'fab fa-angellist',
                  link: '/about-us/'
              },
              {
                  text: 'Services',
                  icon: "fab fa-servicestack",
                  link: '/services/'
              },

              {
                  text: 'Jobs',
                  icon: "fas fa-laptop-house",
                  link: '/jobs/'
              },
              {
                  text: 'Contact Us',
                  icon: "fas fa-address-card",
                  link: '/contact-us/'
              },
          ],
          blank: true
      },
    {
      title: 'Contact Me',
      links: contactboxes,
      copy: true
    },

    // {
    //   title: 'Policies',
    //   links: [
    //    {
    //     text: 'Privacy Policy',
    //     link: '/',
    //     icon: 'fad fa-shield'
    //    },
    //    {
    //    text: 'Terms and Conditions',
    //    link: '/',
    //    icon: 'fad fa-file'
    //    },
    //    {
    //    text:  'Learn More',
    //    link: '/',
    //    icon: 'fad fa-info-circle'
    //   }
    //   ]
    // }
  ]


  const columnsrow = columns?.map(column=>{
    return <Columns column={column}/>
  })
  const socialiconsrow = socialicons?.map(icon=>{
    return (
      <a href={icon.link} target='__blank'>
      <Icon icon={icon.icon+' socialicon'}/>
     </a>
    )
  })
  return <div className="footer" id='footer'>
      <div className="footergrid">
          {columnsrow}
      </div>

      <div className="bottomcontent">
        <div className="rightsreserved">
          <small className='graytext'>
              Copyright © 2021 All Rights Reserved | Uncle Fixer Private LTD
          </small>
        </div>
        <div className="socialicons">
          {socialiconsrow}
        </div>
      </div>
  </div>
}

export default Footer
