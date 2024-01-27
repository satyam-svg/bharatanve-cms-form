import React from 'react'
import './Mainbody.css'
import StorageIcon from '@material-ui/icons/Storage'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import { IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import docimage from '../Image/tshirt.png'
function Mainbody() {
  return (
   <div className='mainbody'>
     <div className="mainbody_top">
          <div className="mainbody_top_left" style={{fontSize:"16px",fontWeight:"500"}}>
          Recent forms
          </div>
          <div className="mainbody_top_right">
             <div className="mainbody_top_center" style={{fontSize:"14px",marginRight:"125px"}}>Owened By Anyone <ArrowDropDown/></div>
             <IconButton>
                <StorageIcon style={{fontSize:"16px",color:"black"}}/>
             </IconButton>
             <IconButton>
                <FolderOpenIcon style={{fontSize:"16px",color:"black"}}/>
             </IconButton>
            </div>
     </div>
     <div className="mainbody_docs">
         <div className="doc_card">
            <img src={docimage} alt="" className='doc_image' />
            <div className="doc_card_content">
                <h5></h5>
                <div className="doc_content" style={{fontSize:"12px",color:"grey"}}>
                    <div className="content_left">
                        <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594",padding:"3px",margin:"3px",borderRadius:"2px"}}/>
<MoreVertIcon style={{fontSize:"16px",color:"grey"}}/>
                    </div>
                </div>
            </div>
         </div>
     </div>
   </div>
  )
}

export default Mainbody
