import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={2}>
          
          
            <div>
              <EmojiEmotionsIcon /> <span><b>SB ADMIN <sup>2</sup></b></span>
            </div>
            <hr></hr>
            <div>
              <DashboardCustomizeIcon/><span>Dashboard</span>
            </div>
            <hr></hr>
            <div>
              <div><small>Interface</small></div>
              <div><SettingsIcon/> Components </div>
              <div><BuildIcon/> Utilities </div>
            </div>
            <hr></hr>
            <div>
              <div><small>ADDONS</small></div>
              <div><FolderIcon/> Pages</div>
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
        </Grid>
        <Grid item xs={14}>
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
        </Grid>
      </Grid>
    </Box>
  );
}
