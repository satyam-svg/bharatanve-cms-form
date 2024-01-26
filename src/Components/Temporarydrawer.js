import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Drawer, List, ListItem } from '@material-ui/core';
import ListItemtext from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles';
import formimage from '../Image/form.png'
import docsimage from '../Image/icons8-google-docs-48.png'
import slides from '../Image/icons8-google-slides-48.png'
import excel from '../Image/icons8-microsoft-excel-48.png'
import drive from '../Image/icons8-google-drive-48.png'
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from 'react-icons/bs'
import './Drawer.css'
import Divider from '@material-ui/core/Divider'
const useStyles=makeStyles({
    listitems:{
        marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"gray"
    },
    slideimages:{
        height:"20px",width:"20px"
    }
})
function TemporaryDrawer() {
const classes=useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };
    

    const list=(anchor)=>(
    <div style={{width:"250px"}} role='presentation'>
        <Divider/>
        <List>
            <ListItem>
               <ListItemtext style={{fontSize:"48px",marginLeft:"5px"}}>
                <span style={{color:"green",fontWeight:"700",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>B</span>
                <span style={{color:"gray",fontWeight:"500",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>H</span>
                <span style={{color:"orange",fontWeight:"500",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>A</span>
                <span style={{color:"blue",fontWeight:"500",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>R</span>
                <span style={{color:"yellow",fontWeight:"500",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>T</span>
                <span style={{color:"red",fontWeight:"500",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>A</span>
                <span style={{color:"gray",fontWeight:"500",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>N</span>
                <span style={{color:"red",fontWeight:"500",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>V</span>
                <span style={{color:"black",fontWeight:"500",fontSize:"22px",marginRight:"10px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>E</span>
                <span style={{color:"#5f6368",fontWeight:"500",fontSize:"22px",fontFamily:"'Prodcut Sans',Arial,sans-serif"}}>Docs</span>

               </ListItemtext>
  
            </ListItem>
        </List>
        <Divider/>
        <List style={{marginLeft:'08px',marginRight:"8px",marginTop:"15px"}}>
            <ListItem className='list_item'>
               <img src={docsimage} alt='loadingimage' className={classes.slideimages}/>
               <div className={classes.listitems}>Docs</div>
            </ListItem>

            <ListItem className='list_item'>
               <img src={excel} alt='loadingimage' className={classes.slideimages}/>
               <div className={classes.listitems}>Sheets</div>
            </ListItem>

            <ListItem className='list_item'>
               <img src={slides} alt='loadingimage' className={classes.slideimages}/>
               <div className={classes.listitems}>Slides</div>
            </ListItem>

            <ListItem className='list_item'>
               <img src={formimage} alt='loadingimage' className={classes.slideimages}/>
               <div className={classes.listitems}>Forms</div>
            </ListItem>
        </List>
        <Divider/>
        <List style={{marginLeft:'08px',marginRight:"08px",marginTop:"15px"}}>
            <ListItem className='list_item'>
    <FiSettings/>
    <div style={{marginLeft:"20px",fontSize:"14px"}}>Settings</div>

            </ListItem>
            <ListItem className='list_item'>
    <BsQuestionCircle/>
    <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"gray"}}>Help & Feedback</div>
    
            </ListItem>
        </List>
        <Divider/>
        <List style={{marginLeft:'08px',marginRight:"08px",marginTop:"15px"}}>
            <ListItem className='list_item'>
    <img src={drive} alt="loadingimage" className={classes.slideimages} />
    <div style={{marginLeft:"20px",fontSize:"14px"}}>Drive</div>

            </ListItem>
            </List>
            <Divider/> 
    </div>
    )
    return (
        <>
            <React.Fragment>
                <IconButton onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer('left', false)} anchor={'left'}>
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </>
    );
}

export default TemporaryDrawer;
