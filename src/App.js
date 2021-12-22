import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { Switch, Route, Link,Redirect, useHistory } from "react-router-dom";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  return (
    <div className="App">
    <div>
      <ColumnsGrid/>
      </div>
    </div>
  );
}

export default App;

function ColumnsGrid() {
  const [show,setshow] = useState(false);
  const showmore = (show)?( <ChevronLeftIcon/>):(<ChevronRightIcon/>);

  const [visible1,setvisible1] = useState(false);
  const style1 = (visible1)?{display:"block"}:{display:"none"}
  const [visible2,setvisible2] = useState(false);
  const style2 = (visible2)?{display:"block"}:{display:"none"}
  const [visible3,setvisible3] = useState(false);
  const style3 = (visible3)?{display:"block"}:{display:"none"}
  return (

    <div className='main-divider'>

      <div style={{width:"15%"}} className='side-bar'>
         <div>
              <EmojiEmotionsIcon /> <span><b>SB ADMIN <sup>2</sup></b></span>
            </div>
            <hr></hr>
            <div>
              
            </div>
            <hr></hr>
            <div>
              <div><small>Interface</small></div>
              <div><SettingsIcon/> Components <ChevronRightIcon onClick={()=>{setvisible1(!visible1)}}/> </div>
              <div style={style1}>
                <div>CUSTOM COMPONENTS</div>
                <div>Buttons</div>
                <div>Cards</div>
              </div>
              <div><BuildIcon/> Utilities <ChevronRightIcon onClick={()=>{setvisible2(!visible2)}} /> </div>
              <div style={style2}>
                <div>CUSTOM UTILITIES</div>
                <div>Colors</div>
                <div>Borders</div>
                <div>Animations</div>
                <div>Others</div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div><small>ADDONS</small></div>
              <div><FolderIcon/> Pages <ChevronRightIcon onClick={()=>{setvisible3(!visible3)}}/></div>
              <div style={style3}>
                <div>LOGIN SCREENS</div>
                <div>Login</div>
                <div>Register</div>
                <div>Forgot Password</div>

                <div>OTHER PAGES</div>
                <div>404 Page</div>
                <div>Blank Page</div>
              </div>
              <div><WaterfallChartIcon/> Charts</div>
              <div><BackupTableIcon/> Tables</div>
            </div>
            <hr></hr>
            <div>
                <IconButton color="primary" aria-label="show movie details" onClick={()=>{setshow(!show);}} >
                    {showmore}
                 </IconButton>
            </div>
            <div>
              <div></div>
              <div>SB Admin Pro is packed with premium features, components, and more!</div>
              <div><Button variant="contained" color="success"> Upgrade to Pro!</Button></div>
            </div>
      </div>
      

      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <div style={{width:"85%"}}>
      <div>
              Search bar  notofications username avatar
          </div>

          <div>
            <div>Dashboard generatereport-button</div>
            <div className='flex-row'>
                  <div style={{width:"33%"}}>color1</div>
                  <div style={{width:"33%"}}>color2</div>
                  <div style={{width:"33%"}}>color1</div>
                  <div style={{width:"33%"}}>color2</div>
            </div>
          </div>

          <div className='flex-row'>
            <div style={{width:"70%"}}>Chart</div>
            <div style={{width:"30%"}}>stat</div>
          </div >

          <div className='flex-row'>
            <div style={{width:"50%"}}>Complete status</div>
            <div style={{width:"50%"}}>Illustration</div>
          </div >

          <div className='flex-row'>
            <div style={{width:"50%"}}>
              <div className='flex-row'>
                  <div style={{width:"50%"}}>color1</div>
                  <div style={{width:"50%"}}>color2</div>
              </div>
              <div className='flex-row'>
                  <div style={{width:"50%"}}>color3</div>
                  <div style={{width:"50%"}}>color4</div>
              </div>
              <div className='flex-row'>
                  <div style={{width:"50%"}}>color5</div>
                  <div style={{width:"50%"}}>color6</div>
              </div>
              <div className='flex-row'>
                  <div style={{width:"50%"}}>color7</div>
                  <div style={{width:"50%"}}>color8</div>
              </div>
            </div>
            <div style={{width:"50%"}}>Development approach</div>
          </div >
      </div>
    </div>
   
  );
}
