import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core'
import SearchIcons from '@material-ui/icons/Search';
import formimage from './Image/form.png'
import AppIcons from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar';
import profile from './Image/icons8-administrator-male-50.png'
const Header = () => {
  return (
    <>
        <div className="header">
            <div className="header_info">
            <IconButton>
            <MenuIcon/>
           </IconButton>
           <img src={formimage} alt="loadingimage" style={{width:'30px'}}/>
           <div className="info">
            Bharatanve Forms
           </div>
            </div>
           
       

        <div className="header_search">
           <IconButton>
           <SearchIcons/>
           </IconButton>
     <input type="text" name='search' />
        </div>

        <div className="header_right">
            <IconButton>
            <AppIcons/>
            </IconButton>
    <IconButton>
        <Avatar src={profile}/>
    </IconButton>
        </div>
        </div>
    </>
  )
}

export default Header
