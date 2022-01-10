import React, { useContext } from 'react'
import { HashLink as Link} from 'react-router-hash-link'
import Columns from './Columns'
import './Footer.css'
import Icon from '../../Reuseable/Icon/Icon'
import { linksfooter, contactboxes, services, socialicons } from '../../Appconstant'
import Logo from '../../Reuseable/Logo/Logo'
function Footer(props) {
  const columns = [
    {
      title: <> <Logo /> </>,
      logo: true
    },
    {
      title: 'services',
      links: services,
      linktitle: true
    },
    {
      title: 'Contact Me',
      links: contactboxes,
      copy: true
    },
    {
      title: 'Portfolio',
      links: [
        {
          text: 'Github',
          icon: 'fab fa-github',
          link: 'https://github.com/Joshua131313'
        },
        {
          text: 'Dribbble',
          icon: 'fab fa-dribbble',
          link: 'https://dribbble.com/josh1231'
        }
      ],
      blank: true
    },
    {
      // title: 'Policies',
      // links: [
      //  {
      //   text: 'Privacy Policy',
      //   link: '/website/privacy',
      //   icon: 'fad fa-shield'
      //  },
      //  {
      //  text: 'Terms and Conditions',
      //  link: '/website/terms',
      //  icon: 'fad fa-file'
      //  },
      //  {
      //  text:  'Learn More',
      //  link: '/website/about',
      //  icon: 'fad fa-info-circle'
      // }
      // ]
    }
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
              Copyright © 2021 All Rights Reserved  | Uncle Fixer Private LTD
          </small>
        </div>
        <div className="socialicons">
          {socialiconsrow}
        </div>
      </div>
  </div>
}

export default Footer
