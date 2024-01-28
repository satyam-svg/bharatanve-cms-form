import React from 'react'
import from_image from '../Image/icons8-google-forms-new-logo-48.png'
import {FiStar,FiSettings} from "react-icons/fi"
import {AiOutlineEye} from 'react-icons/ai'
import { IconButton } from '@material-ui/core'
import avtarimage from '../Image/icons8-administrator-male-50.png'
import {IoMdFolderOpen} from 'react-icons/io'
import ColorLensIcon from "@material-ui/icons/ColorLens"
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import './formheader.css'
function Formheader() {
  return (
    <div className='form_header'>
        <div className="form_header_left">
            <img src={from_image} alt="loadingimage" style={{height:"45px",width:"40px"}} />
            <input type='text' placeholder='Untitled form' className='form_name'></input>
            <IoMdFolderOpen className='form_header_icon' style={{marginRight:"10px"}}></IoMdFolderOpen>
            <FiStar className='form_header_icon' style={{marginRight:"10px"}}/>
            <span style={{fontSize:"12px",fontWeight:"600"}}>All Changes Saved in the drive</span>
        </div>
        <div className="form_header_right">
             <IconButton>
                <ColorLensIcon size="small" className='form_header_icon'/>
             </IconButton>
             <IconButton>
                <AiOutlineEye  className='form_header_icon'/>
             </IconButton>
             <IconButton>
                <FiSettings className='form_header_icon'/>
             </IconButton>
             <Button  variant='contained' color="primary" href='#contained-buttons'>Send</Button>
             <IconButton>
                <MoreVertIcon  className='form_header_icon'/>
             </IconButton>
             <IconButton>
                <Avatar style={{height:"30px",width:"30px "}}  className='form_header_icon'/>
             </IconButton>
        </div>
    </div>
  )
}

export default Formheader
