import React, { useContext, useEffect, useState } from 'react'
import Mappedarray from '../Body/Mappedarray/Mappedarray'
import Logo from '../Reuseable/Logo/Logo';
import NavBarLink from './NavBarLink';
import './Navbar.css'
import { ContextApp } from '../../ContextAPI'
import { HashLink as Link } from 'react-router-hash-link'
import Themebtn from '../Reuseable/Button/Themebtn'
import AppButton from '../Reuseable/Button/Button'
function Navbar(props){
  const {links} = props
  const {scrolled, setScrolled} = useContext(ContextApp)
  const [navmenu, setNavmenu] = useState(false)

   const linksrow = <Mappedarray array={links}>
      {({prop})=>(
        <NavBarLink link={prop}  />
      )}

  </Mappedarray>

  function handleScroll(){
    if(window.scrollY > 50) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[])

  return <div className={`navbar ${scrolled?'navscrolled':''}`}>
     <Logo text='Uncle' text2='Fixer'/>
     <div className="links">
      {linksrow}
         {/*<AppButton text='Fixer' link={''} onClick={() => setNavmenu(!navmenu)}/>*/}
         <Link to={'/become-a-customer/'} className={'customer-bnt'}>Customer</Link>

         <Link to={'/become-a-fixer/'} className={'fixer-bnt'}>Fixer</Link>
     </div>


      <div className={`mobbtn ${navmenu?"open":"closed"}`} onClick={() => setNavmenu(!navmenu)}>
            <hr className="l1"/>
            <hr className="l2"/>
            <hr className="l3"/>
     </div>

     <div className={navmenu?'navmenu navmenu-enter':'navmenu navmenu-exit'}>
        <Logo text='TurtleX' text2='Digital'/>
        <div className="linksmenu">
        {links?.map((link, index)=>{
          return <NavBarLink key={index}  link={link} clickEvent={()=>setNavmenu(false)}/>
        })}
            <Link to={'/become-a-customer/'} onClick={()=>setNavmenu(false)} className={'customer-bnt pt-2'}>View Customer</Link>
            <Link to={'/become-a-fixer/'} onClick={()=>setNavmenu(false)} className={'fixer-bnt pt-2'}>View Fixer</Link>
        </div>
      </div>

  </div>
}
export default Navbar
