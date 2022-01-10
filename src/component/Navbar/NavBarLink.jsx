import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {HashLink as Link, NavHashLink} from 'react-router-hash-link'
import Dropdown from './Dropdown/Dropdown'
import { CSSTransition } from 'react-transition-group'
import AppButton from "../Reuseable/Button/Button";

function NavBarLink(props) {
  const {link, clickEvent} = props
  return (
    <div>
    <NavHashLink
    to={link.link}
    exact={link.exact}
    activeClassName='activelink'
    onClick={()=>{clickEvent && clickEvent()}}
    isActive={(match, location)=> {if(match) return true}}
   >
      <span>{link.text}</span>

      <div className="dot"></div>
    </NavHashLink>
       {
        link.dropdown
        &&
          <Dropdown dropdown={link.dropdown} link={link}/>
        }
    </div>
  )
}
export default NavBarLink
