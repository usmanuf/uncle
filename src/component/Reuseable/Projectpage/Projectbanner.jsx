import React from 'react'

function Projectbanner(props) {
  const {project} = props
  return (
    <div className="projectbanner">
    <div className="left">
      <div>
      <div>
        <i className={project.icon}></i>
        <span>{project.title}</span>
      </div>
      <small className="graytext">{project.type}</small>
      </div>
    </div>
    <div className="img">
      <img src={project.banner} alt=""/>
    </div>
  </div>
  )
}
export default Projectbanner;
