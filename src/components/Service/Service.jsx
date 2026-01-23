import React from 'react'
import './Service.css'
import Services_Data from '../../assets/services_data'
import { assets } from '../../assets/assests'
const Service = () => {
  return (
    <div className='services' id='Services'>
      
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src={assets.the} alt="" /> */}
      </div>
      <div className="services-container">
        {Services_Data.map((service,index)=>{
            return <a 
              key={index}
              href={service.doc_url}
              target="_blank"
              rel="noopener noreferrer"
              className="services-format"
              style={{textDecoration: 'none', color: 'inherit'}}
            >
<h3>{service.s_no}</h3>
<h2>{service.s_name}</h2>
<p>{service.s_desc}</p>
<div className="services-readmore">
    <p>Read More</p>
    <img src={assets.arrow_icon} alt="" />
</div>
            </a>
        })}
      </div>
    </div>
  )
}

export default Service
