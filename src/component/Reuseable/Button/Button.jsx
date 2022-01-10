import React from 'react'
import './Button.css'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";





function AppButton(props) {
  const {
      link,
    icon, clickEvent,
    text} = props

    return (
        <Link className={'LinksBtn'} to={link}>
      <Button
      type='submit'
       className='button'
       onClick={()=>clickEvent && clickEvent()}>
        <span>{text}</span>
        <i className={icon}></i>
      </Button>
        </Link>
    )
}
export default AppButton
