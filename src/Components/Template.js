import React from 'react'
import './Template.css'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton } from '@material-ui/core'
import  UnfoldMoreIcon  from '@material-ui/icons/UnfoldMore'

import blanck from '../Image/forms-blank-googlecolors.png'
import partyinvite from '../Image/1m0UYQl1LSGxl3sGsh9_xjim4hUYQ8BO_zbvcFXv1Qug_400_1.png'
import contact from '../Image/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400_1.png'
import {useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
function Template() {
  const navigate=useNavigate();
  const CreateForm=()=>{
   const id=uuid();
   
  navigate("/form/"+id)
  }
  return (
    <div className='template_section'>
        <div className="template_top">
            <div className="template_left">
                 <span style={{fontSize:"16px",color:"#202124"}}>Start New Form</span>
            </div>
            <div className="template_right">
                <div className="gallery_button">
                        Template Gallery
                        <UnfoldMoreIcon/>
                </div>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="template_body">
  <div className="card" onClick={CreateForm}>
    <img src={blanck} alt="loading" className='card_image' />
    <p className='card_title'>Blank</p>
  </div>
  <div className="card">
    <img src={partyinvite} alt="loading" className='card_image' />
    <p className='card_title'>Party Invite</p>
  </div>
  <div className="card">
    <img src={contact} alt="loading"className='card_image'  />
    <p className='card_title'>Contact Information</p>
  </div>
  

        </div>
    </div>
  )
}

export default Template
