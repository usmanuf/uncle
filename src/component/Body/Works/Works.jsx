import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { ContextApp } from '../../../ContextAPI'
import { links, works } from '../../Appconstant'
import Card from '../../Reuseable/Card/Card'
import Skeleton from '../../Reuseable/Card/Skeleton'
import Bannerprops from '../Banner/Bannerprops'
import './Works.css'

const Works = (props) => {
  const {keyword, setKeyword} = useContext(ContextApp)
  const filtersrow = links[3].dropdown.map(link=>{
    return (
      <span className={`graytext ${link.link === keyword?'active':''}`} onClick={()=>setKeyword(link.link)}>
      {link.text}
      </span>
    )
  })
  const worksrow = works?.filter(x=>x.filterby === keyword || keyword===''|| keyword==='all').map(card=>{
    return (
      <HashLink >
        <Card themeshadow card={card} learnmorebtn={true}/>
      </HashLink>
    )
  })

  return (
    <div className="services">
        <Bannerprops 
        img='https://i.imgur.com/akOOO5O.png'
        title='Works'
        text='View the projects that I have made in the past!'
        />
      <div className="servicescontainer">
        <h2 className='graytext title'>
          <small>My Projects</small>
          <div className="hr"></div>
        </h2>
        <div className="filter_cards">
          <div className="filters">
            {filtersrow}
          </div>
          <div className="cards">
            {worksrow.length===0?
              <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              </>
              :worksrow}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Works