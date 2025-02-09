import React from 'react'

import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import { assets } from '../../assets/assests'
const MyWork = () => {
  return (
    <div className='mywork' id='Mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img}/>
               
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show MORE</p>
          <img src={assets.arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default MyWork
