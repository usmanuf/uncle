import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../../assets/Logo/unclefixer-logo-1.png';
import './Logo.css'
function Logo(props) {
  const {text='Uncle', text2='Fixer'} = props

  return <Link className="logo" to='/'>

    <img src={Img} alt=""/>
    <span>
      {/*<strong>{text}</strong>*/}
      {/*<span>{text2}</span>*/}
    </span>
  </Link>
}
export default Logo
