import React from 'react'
import Iconbox from '../../Reuseable/Icon/Iconbox'
import './Skeleton.css'

const Skeleton = () => {

  return (
    <div className="skeleton">
      <Iconbox />
      <h4></h4>
      <div className='skeletondiv'></div>
    </div>
  )
}
export default Skeleton
