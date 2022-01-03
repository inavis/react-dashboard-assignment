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
import SearchIcon from '@mui/icons-material/Search';

import {  alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import DownloadIcon from '@mui/icons-material/Download';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// import { PieChart } from 'react-minimal-pie-chart';
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


import BarChart from 'react-bar-chart';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function App() {
  //already existing users list
  const [users,setusers]=useState([
    {firstname:"Robert",lastname:"Pattinson",email:"rob_patz@gmail.com",password:"Robpattinson@123"},
    {firstname:"Kiara",lastname:"Advani",email:"kiara.advent@yahoo.com",password:"Kiara$4566"},
    {firstname:"Rakesh",lastname:"Keshav",email:"rocky007@gmail.com",password:"rockrock@8888"}]);
  return (
    <div className="App">
    <div>
      <ColumnsGrid users={users} setusers={setusers}/>
      </div>
    </div>
  );
}

export default App;

function ColumnsGrid({users,setusers}) {
 //all routes
  return (
    <div>
      <Switch>
         {/* Each route is case, eg. - case '/about': */}
         <Route path="/Dashboard">
           <Dashboard/>
         </Route>

         <Route path="/Buttons">
           <Buttons/>
         </Route>

         <Route path="/Cards">
           <Cards/>
         </Route>
         <Route path="/Colors">
           <Colors />
         </Route>
         <Route path="/Borders">
           <Borders/>
         </Route>
         <Route path="/Animations">
              <Animations/>
         </Route> 
         <Route path="/Others">
              <Others/>
         </Route> 
         <Route path="/Login">
                <Login users={users} setusers={setusers}/>
          </Route> 
          <Route path="/Register">
              <Register users={users} setusers={setusers}/>
         </Route> 
         <Route path="/ForgotPassword">
              <ForgotPassword users={users} setusers={setusers}/>
         </Route> 
         <Route path="/BlankPage">
              <BlankPage/>
         </Route>

         <Route path="/Charts">
           <Charts/>
         </Route>

         <Route path="/Tables">
           <Tables/>
         </Route>

         <Route exact path="/">
           <Dashboard/>
         </Route>


         {/* For broken or links that does not exist */}
         <Route path="**">
           <NotExist/>
         </Route>
       </Switch>
    </div>
   
  );
}


//since the side bar is there for most of the pages just keeping it and adding the page which changes alone
function SideBar({extracode}){
  const [show,setshow] = useState(false);
  const showmore = (show)?( <ChevronLeftIcon/>):(<ChevronRightIcon/>);


  const history= useHistory();

  const [visible1,setvisible1] = useState(false);
  const style1 = (visible1)?{display:"block"}:{display:"none"}
  const [visible2,setvisible2] = useState(false);
  const style2 = (visible2)?{display:"block"}:{display:"none"}
  const [visible3,setvisible3] = useState(false);
  const style3 = (visible3)?{display:"block"}:{display:"none"}

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return(
    <div>
    <div className='main-divider'>

<div style={{width:"22%"}} className='side-bar bg-violet'>
<div>
     <EmojiEmotionsIcon /> <span><b>SB ADMIN <sup>2</sup></b></span>
   </div>
   <hr></hr>
   <div>
     <div><Button color="inherit" onClick={()=>history.push("/Dashboard")}>Dashboard</Button></div>
   </div>
   <hr></hr>
   <div>
     <div><small>Interface</small></div>
     <br></br>
     <div><Button color='inherit'  onClick={()=>{setvisible1(!visible1)}}><SettingsIcon/> Components <ChevronRightIcon /></Button></div>
     <br></br>
     <div style={style1} className='sub-menu'>
       <div><small className='color-lightgray'>CUSTOM COMPONENTS</small></div>
       <div><Button color="inherit" onClick={()=>history.push("/Buttons")}>Buttons</Button></div>
       <div><Button color="inherit" onClick={()=>history.push("/Cards")}>Cards</Button></div>
     </div>
     <div> <Button color="inherit"  onClick={()=>{setvisible2(!visible2)}}><BuildIcon/> Utilities <ChevronRightIcon  /></Button></div>
     
     <div style={style2} className='sub-menu' className='bg-white color-black spacing'>
       <div><small className='color-lightgray'>CUSTOM UTILITIES</small></div>
       <div><Button color="inherit" onClick={()=>history.push("/Colors")}>Colors</Button></div>
       <div><Button color="inherit" onClick={()=>history.push("/Borders")}>Borders</Button></div>
       <div><Button color="inherit" onClick={()=>history.push("/Animations")}>Animations</Button></div>
       <div><Button color="inherit" onClick={()=>history.push("/Others")}>Others</Button></div>
     </div>
   </div>
   <hr></hr>
   <div>
     <div><small>ADDONS</small></div>
     <div> <Button color="inherit" onClick={()=>{setvisible3(!visible3)}}><FolderIcon/> Pages <ChevronRightIcon /></Button></div>
     <div style={style3} className='sub-menu'>
       <div className='color-lightgray'>LOGIN SCREENS</div>
       <div><Button color="inherit" onClick={()=>history.push("/Login")}>Login</Button></div>
       <div><Button color="inherit" onClick={()=>history.push("/Register")}>Register</Button></div>
       <div><Button color="inherit" onClick={()=>history.push("/ForgotPassword")}>Forgot Password</Button></div>

       <div className='color-lightgray'>OTHER PAGES</div>
       <div><Button color="inherit" onClick={()=>history.push("/NotExist")}>404 Page</Button></div>
       <div><Button color="inherit" onClick={()=>history.push("/BlankPage")}>Blank Page</Button></div>
     </div>
     <div><WaterfallChartIcon/> <Button color="inherit" onClick={()=>history.push("/Charts")}>Charts</Button></div>
     <div><BackupTableIcon/><Button color="inherit" onClick={()=>history.push("/Tables")}>Tables</Button></div>
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
<div style={{width:"78%"}}>
    
<div>
  <div>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"white"}}>
        <Toolbar>
        <div className='search-container'>
            <input placeholder='Search for...' className='searchbar'/>
            <button className='bg-violet'><SearchIcon/></button>
        </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error" style={{color:"gray"}}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error" style={{color:"gray"}}>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <small style={{color:"gray",fontSize:"15px"}} >Douglas Mcgee</small>
              <AccountCircle style={{color:"gray"}} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  </div>
   
    
 </div>
  
 <div style={{display:"flex",flexDirection:"column"}}>
 <div>
  {extracode}
  </div>
  <div className='bg-white footer'>
      <small className='footer-text'>Copyright © Your Website 2021</small>
  </div>
 </div>
 
</div>



</div>
 </div>
  )
}


//Buttons Page
function Buttons(){
  document.body.style.background="whitesmoke";
  return(
    <div>

    <SideBar extracode={
    <div>
      <div className='large-font spacing color-lightgray'>Buttons</div>
      <div className='flex-row'>
        <div className='spacing width50'>
          <div style={{height:"min-content"}} className='spacing'>
            <div className='heading-area color-violet'>Circle buttons</div>
            <div className='bg-white'>
              <div className='spacing'>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</div>
              <div className='spacing'>.btn-circle</div>
              <div>
                <button className="btn-circle bg-violet"><i class="fab fa-facebook-f"></i></button>
                <button className="btn-circle bg-success"><i class="fas fa-check"></i></button>
                <button className="btn-circle bg-info"><i class="fas fa-info-circle"></i></button>
                <button className="btn-circle bg-warning"><i class="fas fa-exclamation-triangle"></i></button>
                <button className="btn-circle bg-danger"><i class="fas fa-trash"></i></button>
              </div>
              <div>.btn-circle .btn-sm</div>
              <div>
                <button className="btn-circle btn-sm bg-violet"><i class="fab fa-facebook-f"></i></button>
                <button className="btn-circle btn-sm bg-success"><i class="fas fa-check"></i></button>
                <button className="btn-circle btn-sm  bg-info"><i class="fas fa-info-circle"></i></button>
                <button className="btn-circle btn-sm bg-warning"><i class="fas fa-exclamation-triangle"></i></button>
                <button className="btn-circle btn-sm bg-danger"><i class="fas fa-trash"></i></button>
              </div>
              <div>.btn-circle .btn-lg</div>
              <div>
                <button className="btn-circle btn-lg bg-violet"><i class="fab fa-facebook-f"></i></button>
                <button className="btn-circle btn-lg bg-success"><i class="fas fa-check"></i></button>
                <button className="btn-circle btn-lg  bg-info"><i class="fas fa-info-circle"></i></button>
                <button className="btn-circle btn-lg bg-warning"><i class="fas fa-exclamation-triangle"></i></button>
                <button className="btn-circle btn-lg bg-danger"><i class="fas fa-trash"></i></button>
              </div>
            </div>
          </div>
          <div style={{height:"min-content"}} className='spacing'>
            <div className='heading-area color-violet'>Brand buttons</div>
            <div className='bg-white'>
              <div className='spacing'>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages</div>
              <div className='spacing'>
              You can create more custom buttons by adding a new color variable in the <span className='color-red'>_variables.scss</span> file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <span className='color-red'>_buttons.scss</span> file.
              </div>
              <div>
                 <button className='social-button bg-red'><GoogleIcon/>.btn-google</button>
              </div>
              <div>
                  <button className='social-button bg-primary'><i class="fab fa-facebook-f"></i>.btn-facebook</button>
              </div>
            </div>
          </div>
        </div>
        <div className='spacing width50'>
            <div className='spacing' >
              <div className='heading-area color-violet'>Split buttons with icon</div>
            <div className='bg-white'>
              <div className='spacing'>
              Works with any button colors, just use the <span className='color-red'>.btn-icon-split</span> class and the markup in the examples below. The examples below also use the <span className='color-red'>.text-white-50</span> helper class on the icons for additional styling, but it is not required.
              </div>
              <div class="btn-group spacing">
                  <a class="btn color-white" href="#" style={{background:"royalblue"}}><i class="fas fa-flag"></i></a>
                  <a class="btn bg-violet color-white" href="#">Split Button Primary</a>
                </div>
                <br></br>
                <div class="btn-group spacing">
                  <a class="btn color-white" href="#" style={{background:"green"}}><i class="fas fa-check"></i></a>
                  <a class="btn bg-success color-white" href="#">Split Button Success</a>
                </div>
                <br></br>
                <div class="btn-group spacing">
                  <a class="btn color-white" href="#" style={{background:"lightblue"}}><i class="fas fa-info-circle"></i></a>
                  <a class="btn bg-blue color-white" href="#">Split Button Info</a>
                </div>
                <br></br>
                <div class="btn-group spacing">
                  <a class="btn color-white" href="#" style={{background:"rgb(190, 190, 29)"}}><i class="fas fa-exclamation-triangle"></i></a>
                  <a class="btn bg-yellow color-white" href="#">Split Button Warning</a>
                </div>
                <br></br>
                <div class="btn-group spacing">
                  <a class="btn color-white" href="#" style={{background:"red"}}><i class="fas fa-trash"></i></a>
                  <a class="btn bg-red color-white" href="#">Split Button Danger</a>
                </div>
                <br></br>
                <div class="btn-group spacing">
                  <a class="btn color-white" href="#" style={{background:"gray"}}><i class="fas fa-arrow-right"></i></a>
                  <a class="btn bg-darkgray color-white" href="#">Split Button Secondary</a>
                </div>
                <br></br>
                <div class="btn-group spacing">
                  <a class="btn color-white" href="#" style={{background:"lightgray"}}><i class="fas fa-arrow-right"></i></a>
                  <a class="btn bg-lightgray color-white" href="#">Split Button Light</a>
                </div>
                <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    }/>
    </div>
    
    
  );
}


//Dashboard Page
function Dashboard() {

  //for line graph
  const data = [
    {name: 'Jan', uv: 0, pv:0, amt: "0"},
    {name: '', uv:10000, pv: 10000, amt: "10,000"},
  {name: 'Mar', uv: 5000, pv: 5000, amt: "5,000"},
  {name: '', uv:15000, pv: 15000, amt: "15,000"},
  {name: 'May', uv: 10000, pv: 10000, amt: "10,000"},
  {name: '', uv:20000, pv: 20000, amt: "20,000"},
  {name: 'Jul', uv: 15000, pv: 15000, amt: "15,000"},
  {name: '', uv:25000, pv: 25000, amt: "25,000"},
  {name: 'Sep', uv: 20000, pv: 20000, amt: "20,000"},
  {name: '', uv:30000, pv: 30000, amt: "30,000"},
  {name: 'Nov', uv: 25000, pv: 25000, amt: "25,000"},
  {name: '', uv:40000, pv: 40000, amt: "40,000"}                
];
  const renderLineChart = (
    <LineChart width={600} height={350} data={data} margin={{ top: 5, right:0, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );


  //for status bar
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      backgroundColor:"#36b9cc",
    },
  }));
  const BorderLinearProgress1 =  styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:"#e74a3b",
    },
  }));
  const BorderLinearProgress2 =  styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:"#f6c23e",
    },
  }));
  const BorderLinearProgress3 =  styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:"#4e73df",
    },
  }));
  const BorderLinearProgress4 =  styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:"#36b9cc",
    },
  }));
  const BorderLinearProgress5 =  styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:"#1cc88a",
    },
  }));

//for donut chart
  const donut_data = {
    labels: ['Direct','Social','Referral'],
    datasets: [
        {
            label: 'Stats',
            data: [55,27,18],
            // borderColor: [''],
            backgroundColor: ['#4e73df',
            '#1cc88a',
            '#36b9cc' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
            // backgroundImage: 'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center'
        }
        
    ]
}

const donut_options = {
    plugins: {
        // title: {
        //     display: true,
        //     text: 'Doughnut Chart',
        //     color:'blue',
        //     font: {
        //         size:34
        //     },
        //     padding:{
        //         top:30,
        //         bottom:30
        //     },
        //     responsive:true,
        //     animation:{
        //         animateScale: true,
        //         color: true            }
        // }
    }
    
}



return(
  <div>

<SideBar extracode={
<div style={{background:"whitesmoke"}}>

 <div>
   <div className='flex-row'>
     <div className='large-font color-darkgray'>Dashboard</div>
     <div className='float-right'><button className=' button-style bg-violet color-white'><DownloadIcon/>Generate Report</button></div>
   </div>
   <div className='flex-row'>
         <div  className='small-box border-violet flex-row bg-white width25'>
           <div className='width80'>
             <div><small>EARNINGS(MONTHLY)</small></div>
            <div><b>$40,000</b></div>
           </div>
           <div  className='icon-style width20'><CalendarTodayIcon/></div>
         </div>
         <div  className='small-box border-green flex-row bg-white width25'>
            <div className='width80'>
                <div><small>EARNINGS(ANNUAL)</small></div>
                <div><b>$215,000</b></div>
              </div>
              <div  className='icon-style width20'><AttachMoneyIcon/></div>
         </div>
         <div  className='small-box border-blue flex-row bg-white width25'>
            <div className='width80'>
                <div><small>TASKS</small></div>
                <div className='flex-row'>
                  <div className='width20'><b>50%</b></div>
                  <div style={{padding:"10px"}} className='width80'><BorderLinearProgress variant="determinate" value={50}  /></div>
                  </div>
              </div>
              <div  className='icon-style width20'><FeaturedPlayListIcon/></div>
         </div>
         <div  className='small-box border-yellow flex-row bg-white width25' >
            <div className='width80'>
                <div><small>PENDING REQUESTS</small></div>
                <div><b>18</b></div>
              </div>
              <div  className='icon-style width20'><ChatBubbleIcon/></div>
         </div>
   </div>
 </div>

 <div className='flex-row'>
   <div  className='bg-white spacing width70'>
      <div className='heading-area'>Earnings overview</div>
      <div>
          {
          renderLineChart
          }
      </div>
   </div>
   <div  className='bg-white spacing width30'> 
      <div className='heading-area'>Revenue sources</div>
      <div>
          <Doughnut data={donut_data} options={donut_options} />
      </div>
   </div>
 </div >

 <div className='flex-row'>
   <div className='width50'> 
     <div style={{height:"min-content"}} className='bg-white spacing'>
     <div className='heading-area'>Projects</div>
     <div className='spacing'>
       <div><span>Server Migration</span><span className='float-right'>20%</span></div>
        <BorderLinearProgress1 variant="determinate" value={20}  />
     </div>
     <div className='spacing'>
       <div><span>Server Migration</span><span className='float-right'>40%</span></div>
        <BorderLinearProgress2 variant="determinate" value={40} background={"red"} />
     </div>
     <div className='spacing'>
       <div><span>Server Migration</span><span className='float-right'>60%</span></div>
        <BorderLinearProgress3 variant="determinate" value={60}  />
     </div>
     <div className='spacing'>
       <div><span>Server Migration</span><span className='float-right'>80%</span></div>
        <BorderLinearProgress4 variant="determinate" value={80}  />
     </div>
     <div className='spacing'>
       <div><span>Server Migration</span><span className='float-right'>Complete!</span></div>
        <BorderLinearProgress5 variant="determinate" value={100}  />
     </div>
     </div>

     <div >
     <div className='flex-row'>
         <div  className='small-box spacing bg-violet width50'>
           <div>Primary</div>
           <div><small>#4e73df</small></div>
         </div>
         <div  className='small-box spacing bg-green width50'>
           <div>Success</div>
           <div><small>#1cc88a</small></div>
         </div>
     </div>
     <div className='flex-row'>
        <div  className='small-box spacing bg-blue width50'>
           <div>Info</div>
           <div><small>#36b9cc</small></div>
         </div>
         <div  className='small-box spacing bg-yellow width50' >
           <div>Warning</div>
           <div><small>#f6c23e</small></div>
         </div>
     </div>
     <div className='flex-row'>
        <div  className='small-box spacing bg-red width50'>
           <div>Danger</div>
           <div><small>#e74a3b</small></div>
         </div>
         <div  className='small-box spacing bg-lightgray width50'>
           <div>Secondary</div>
           <div><small>#858796</small></div>
         </div>
     </div>
     <div className='flex-row'>
        <div  className='small-box spacing bg-white width50'>
           <div>Light</div>
           <div><small>#f8f9fc</small></div>
         </div>
         <div className='small-box spacing bg-darkgray width50'>
           <div>Dark</div>
           <div><small>#5a5c69</small></div>
         </div>
     </div>
   </div>
     
   </div>  

   <div className='width50'>
    <div style={{height:"min-content"}} className='bg-white spacing'>
        <div className='heading-area'>Illustrations</div>
        <div>
          <div  className='illustration'><img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"/></div>
        </div>
        <div className='spacing'>
        Add some quality, svg illustrations to your project courtesy of <span className='link'>unDraw</span>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
        </div>
        <div className='link spacing'>
        Browse Illustrations on unDraw →
        </div>
    </div>

    <div >
     <div className='bg-white spacing'>
     <div className='heading-area'>Development approach</div>
     <div className='spacing'>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</div>
     <div className='spacing'>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</div>
     </div>
   </div>
   </div>
 </div >

 

</div>



}/>
</div>

)
}


//Cards Page
function Cards(){
  document.body.style.background="whitesmoke";

    //for status bar
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
      height: 15,
      borderRadius: 15,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor:"#36b9cc",
      },
    }));

    const [visible,setvisible]=useState(true);
    const visiblestyle = (visible)?{display:"block"}:{display:"none"};
    const arrow = visible?<i class="fas fa-chevron-down" style={{cursor:"pointer"}} onClick={()=>setvisible(!(visible))}></i>:<i class="fas fa-chevron-right" style={{cursor:"pointer"}} onClick={()=>setvisible(!(visible))}></i>;
  return(
    <div>

    <SideBar extracode={
    <div>

        <div className='spacing large-font color-lightgray'>Cards</div>

        <div className='flex-row'>
         <div  className='small-box border-violet flex-row bg-white width25'>
           <div className='width80'>
             <div><small>EARNINGS(MONTHLY)</small></div>
            <div><b>$40,000</b></div>
           </div>
           <div  className='icon-style width20'><CalendarTodayIcon/></div>
         </div>
         <div  className='small-box border-green flex-row bg-white width25'>
            <div className='width80'>
                <div><small>EARNINGS(ANNUAL)</small></div>
                <div><b>$215,000</b></div>
              </div>
              <div  className='icon-style width20'><AttachMoneyIcon/></div>
         </div>
         <div  className='small-box border-blue flex-row bg-white width25'>
            <div className='width80'>
                <div><small>TASKS</small></div>
                <div className='flex-row'>
                  <div className='width20'><b>50%</b></div>
                  <div style={{padding:"10px"}} className='width80'><BorderLinearProgress variant="determinate" value={50}  /></div>
                  </div>
              </div>
              <div  className='icon-style width20'><FeaturedPlayListIcon/></div>
         </div>
         <div  className='small-box border-yellow flex-row bg-white width25' >
            <div className='width80'>
                <div><small>PENDING REQUESTS</small></div>
                <div><b>18</b></div>
              </div>
              <div  className='icon-style width20'><ChatBubbleIcon/></div>
         </div>
   </div>

   <div className='flex-row'>
        <div className='spacing width50'>
            <div style={{height:"min-content"}} className='spacing'>
              <div className='heading-area color-lightgray'>Default Card Example</div>
              <div className='bg-white'>
              This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
              </div>
            </div>
            <div style={{height:"min-content"}} className='spacing'>
              <div className='heading-area color-violet'>Basic Card Example</div>
              <div className='bg-white'>
              The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
              </div>
            </div>
        </div>
        <div className='spacing width50'>
            <div style={{height:"min-content"}} className='spacing'>
              <div className='heading-area color-violet'>Dropdown Card Example</div>
              <div className='bg-white'>
              Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
              </div>
            </div>
            <div style={{height:"min-content"}} className='spacing'>
              <div className='heading-area color-violet'>Collapsable Card Example <span className='float-right'>{arrow}</span></div>
              <div className='bg-white ' style={visiblestyle}>
              This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!
              </div>
            </div>
        </div>
   </div>
    
    </div>
    
    }/>
    </div>
    
    
  );
}


//Colors Page
function Colors(){
  return(
    <div>

    <SideBar extracode={
    <div>
    <div className='large-font spacing'>Color Utilities</div>
    <div className='spacing'>Bootstrap's default utility classes can be found on the official <span className='link'>Bootstrap Documentation page</span>. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</div>
    <div className='flex-row'>
      <div className='width33 spacing'>
        <div className='bg-white'>
          <div className='heading-area color-violet'>Custom Text Color Utilities</div>
          <div className='spacing bg-white'>
            <div className='square bg-darkgray color-white'>.text-gray-100</div>
            <div className='square bg-darkgray color-white'>.text-gray-200</div>
            <div className='square bg-darkgray color-lightgray'>.text-gray-300</div>
            <div className='square bg-darkgray color-lightgray'>.text-gray-400</div>
            <div className='square color-lightgray bg-white'>.text-gray-500</div>
            <div className='square color-lightgray bg-white'>.text-gray-600</div>
            <div className='square color-darkgray bg-white'>.text-gray-700</div>
            <div className='square color-darkgray bg-white'>.text-gray-800</div>
            <div className='square bg-white'>.text-gray-900</div>
          </div>
        </div>
        <div className='spacing'>
          <div className='heading-area color-violet'>Custom Font Size Utilities</div>
          <div className='bg-white'>
              <div className='small-font '>.text-xs</div>
              <div className='large-font '>.text-lg</div>
          </div>
        </div>
      </div>
      <div className='width33 spacing'>
        <div className='bg-white'>
          <div className='heading-area color-violet'>Custom Background Gradient Utilities</div>
          <div className='bg-white spacing'>
            <div className='bg-violet big-square color-white'>bg-gradient-primary</div>
            <div className='bg-darkgray big-square color-white'>bg-gradient-dark</div>
            <div className='bg-green big-square color-white'>bg-gradient-success</div>
            <div className='bg-blue big-square color-white'>bg-gradient-info</div>
            <div className='bg-yellow big-square color-white'>bg-gradient-warning</div>
            <div className='bg-red big-square color-white'>bg-gradient-danger</div>
            <div className='bg-lightgray big-square color-white'>bg-gradient-light</div>
          </div>
        </div>
      </div>
      <div className='width33 spacing'>
        <div className='bg-white'>
          <div className='heading-area color-violet'>Custom Grayscale Background Utilities</div>
          <div className='spacing bg-white'>
            <div className='square color-lightgray' style={{background:"#F0F0F0"}}>.bg-gray-100</div>
            <div className='square color-lightgray' style={{background:"#D3D3D3"}}>.bg-gray-200</div>
            <div className='square color-darkgray' style={{background:"#A0A0A0"}}>.bg-gray-300</div>
            <div className='square color-darkgray' style={{background:"#989898"}}>.bg-gray-400</div>
            <div className='square color-white' style={{background:"#696969"}}>.bg-gray-500</div>
            <div className='square color-white' style={{background:"#505050"}}>.bg-gray-600</div>
            <div className='square color-white' style={{background:"#383838"}}>.bg-gray-700</div>
            <div className='square color-white' style={{background:"#202020"}}>.bg-gray-800</div>
            <div className='square color-white' style={{background:"#101010"}}>.bg-gray-900</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    }/>
    </div>
    
    
  );
}


//Borders Page
function Borders(){
  document.body.style.background="whitesmoke";
  return(
    <div>

    <SideBar extracode={
    <div>
        <div className='spacing color-darkgray large-font'>Border Utilities</div>
        <div className='spacing'>Bootstrap's default utility classes can be found on the official <span className='link'>Bootstrap Documentation page</span>. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</div>
        <div className='flex-row'>
          <div className='width50'>
            <div className='bg-white spacing big-square border-violet'>.border-left-primary</div>
            <div className='bg-white spacing big-square border-light'>.border-left-light</div>
            <div className='bg-white spacing big-square border-green'>.border-left-success</div>
            <div className='bg-white spacing big-square border-blue'>.border-left-info</div>
            <div className='bg-white spacing big-square border-yellow'>.border-left-warning</div>
            <div className='bg-white spacing big-square border-red'>.border-left-danger</div>
            <div className='bg-white spacing big-square border-dark'>.border-left-dark</div>
          </div>

          <div className='width50'>
            <div className='bg-white spacing big-square borderb-violet'>.border-bottom-primary</div>
            <div className='bg-white spacing big-square borderb-light'>.border-bottom-light</div>
            <div className='bg-white spacing big-square borderb-green'>.border-bottom-success</div>
            <div className='bg-white spacing big-square borderb-blue'>.border-bottom-info</div>
            <div className='bg-white spacing big-square borderb-yellow'>.border-bottom-warning</div>
            <div className='bg-white spacing big-square borderb-red'>.border-bottom-danger</div>
            <div className='bg-white spacing big-square borderb-dark'>.border-bottom-dark</div>
          </div>
        </div>
    </div>
    
    }/>
    </div>
    
    
  );
}


//Animations Page
function Animations(){
  return(
    <div>

    <SideBar extracode={
    <div>
        <div className='spacing color-darkgray large-font'>Animations</div>
        <div>Bootstrap's default utility classes can be found on the official <span className='link'><a>Bootstrap Documentation page</a></span>. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</div>
        <div className='flex-row'>
          <div className='spacing bg-white'>
            <div className='heading-area  color-violet'>Grow In Animation Utilty</div>
            <div className='spacing color-red'>.animated--grow-in</div>
            <div className='spacing color-lightgray'>Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, the grow in animation is only being used on dropdowns within the navbar.</div>
          </div>
          <div className='spacing bg-white'>
            <div className='heading-area  color-violet'>Fade In Animation Utilty</div>
            <div className='spacing color-red'>.animated--fade-in</div>
            <div className='spacing color-lightgray'>Note: This utility animates the CSS opacity property, meaning it will override any existing opacity on an element being animated!</div>
          </div>
        </div>
    </div>
    
    }/>
    </div>
    
    
  );
}


//Others Page
function Others(){
  return(
    <div>

    <SideBar extracode={
     <div>
     <div className='spacing color-darkgray large-font'>Other Utilities</div>
     <div>Bootstrap's default utility classes can be found on the official <span className='link'><a>Bootstrap Documentation page</a></span>. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</div>
     <div className='flex-row'>
       <div>
       <div className='spacing bg-white'>
         <div className='heading-area  color-violet'>Overflow Hidden Utilty</div>
         <div className='spacing'>Use <span className='color-red'>.o-hidden </span>to set the overflow property of any element to hidden.</div>
       </div>
       <div className='spacing bg-white'>
         <div className='heading-area  color-violet'>Progress Small Utility</div>
         <div className='spacing'>Use the <span className='color-red'>.progress-sm </span>class along with <span className='color-red'>.progress</span></div>
       </div>
       <div className='spacing bg-white'>
         <div className='heading-area  color-violet'>Overflow Hidden Utilty</div>
         <div className='spacing'>Add the <span className='color-red'>.no-arrow</span> class alongside the <span className='color-red'>.dropdown</span></div>
       </div>
       </div>
       <div>
       <div className='spacing bg-white'>
         <div className='heading-area  color-violet'>Rotation Utilities</div>
         <div className='spacing color-red'>.rotate-15 , .rotate-n-15</div>
       </div>
       </div>
     </div>
 </div>
    
    }/>
    </div>
    
    
  );
}


//Login Page
//If email and password match redirected to dashboard
function Login({users,setusers}){
  const history= useHistory();
  document.body.style.backgroundColor="rgb(69, 68, 126)";
  const [uname,setuname] = useState("");
  const [pwd,setpwd]=useState("")

  return(
    <div>
    <div className='flex-row formarea'>
      <div  className='picture form-grid-1'><img src="https://i.pinimg.com/736x/aa/ea/05/aaea05f82cc4511e3dfbdfd536c454c0.jpg"/></div>
      <div  className='form form-grid-2'>
        <br></br>
        <div className='large-font'>Welcome Back!</div>
        <br></br>
        <div>
          <input  placeholder='Enter email Address...' className='textbox width-80'
              onChange={(e)=>setuname(e.target.value)}
          />
        </div>
        <div>
          <input  placeholder='Password' className='textbox width-80'
              onChange={(e)=>setpwd(e.target.value)}
          />
        </div>
        <div className='float-left'>
          <input type="checkbox" />Remember Me
        </div>
        <div>
          <button className='form-button bg-violet' 
              onClick={()=>{
                // console.log(uname,pwd);
                const find = (users.filter((e)=>e.email===uname));
                // console.log(find[0].email,find[0].password===pwd);
                find[0].password===pwd?history.push("/Dashboard"):alert("check username or password");
              }}
          >Login</button>
        </div>
        <hr></hr>
        <div>
          <button className='form-button bg-red'><GoogleIcon/>Register with Google</button>
        </div>
        <div>
          <button className='form-button bg-blue'><FacebookIcon/>Register with facebook</button>
        </div>
        <hr></hr>
        <div className='link' onClick={()=>history.push("/ForgotPassword")}>
          Forgot Password
        </div>
        <div className='link' onClick={()=>history.push("/Register")}>
          Create an Account!
        </div>
      </div>
    </div>
</div>
  );
}


//Register Page
//New user is added if that email is not already in list and is passwords match
//Once user is added redirected to Login Page
function Register({users,setusers}){
  const history= useHistory();
  document.body.style.backgroundColor="rgb(69, 68, 126)";

  const [uname,setuname] = useState("");
  const [pwd1,setpwd1]=useState("");
  const [pwd2,setpwd2]=useState("");
  const [lname,setlname]=useState("");
  const [fname,setfname] = useState("");

  return(
    <div>
        <div className='flex-row formarea'>
          <div  className='picture form-grid-1'><img src="https://image.freepik.com/free-photo/vertical-shot-cute-dog-sitting-fluffy-white-fabric_181624-35794.jpg"/></div>
          <div  className='form form-grid-2'>
            <br></br>
            <div className='large-font'>Create an Account!</div>
            <br></br>
            <div>
              <input  placeholder='First Name' className='textbox width-40'
                  onChange={(e)=>setfname(e.target.value)}
              />
              <input  placeholder='Last name' className='textbox width-40'
                  onChange={(e)=>setlname(e.target.value)}
              />
            </div>
            <div>
              <input  placeholder='Email Address' className='textbox width-80'
                  onChange={(e)=>setuname(e.target.value)}
              />
            </div>
            <div>
              <input  placeholder='Password' className='textbox width-40'
                  onChange={(e)=>setpwd1(e.target.value)}
              />
              <input   placeholder='Repeat Password' className='textbox width-40'
                onChange={(e)=>setpwd2(e.target.value)}
              />
            </div>
            <div>
              <button className='form-button bg-violet'
                  onClick={()=>{
                    if(pwd1===pwd2){
                      console.log(fname,lname,uname,pwd1,pwd2);
                      console.log({firstname:fname,lastname:lname,email:uname,password:pwd1})
                      console.log("find",users.filter((e)=>e.email===uname).length)
                      if(users.filter((e)=>e.email===uname).length){
                        alert("User with a email already exists");
                      }else{
                        setusers([...users,{firstname:fname,lastname:lname,email:uname,password:pwd1}])
                        history.push("/Login")
                        console.log(users);
                      }
                      
                      
                    }else{
                      alert("Passwords do not match")
                    }
                  }}
              >Register account</button>
            </div>
            <hr></hr>
            <div>
              <button className='form-button bg-red'><GoogleIcon/>Register with Google</button>
            </div>
            <div>
              <button className='form-button bg-blue'><FacebookIcon/>Register with facebook</button>
            </div>
            <hr></hr>
            <div className='link' onClick={()=>history.push("/ForgotPassword")}>
              Forgot Password
            </div>
            <div className='link' onClick={()=>history.push("/Login")}>
              Already have an account? Login!
            </div>
          </div>
        </div>
    </div>
  );
}

function ForgotPassword({users,setusers}){
  const history= useHistory();
  document.body.style.backgroundColor="rgb(69, 68, 126)";

  return(
    <div>
    <div className='flex-row formarea'>
      <div  className='picture form-grid-1'><img src="https://wallpapershome.com/images/pages/pic_v/16641.jpg"/></div>
      <div  className='form form-grid-2'>
        <br></br>
        <div className='large-font'>Forgot your Password?</div>
        <div>
        We get it, stuff happens. Just enter your email <br></br> address below and we'll send you a link to <br></br>reset your password!
        </div>
        <br></br>
        <div>
          <input  placeholder='Enter email Address' className='textbox width-80'/>
        </div>
        <div>
          <button className='form-button bg-violet'>Login</button>
        </div>
        <hr></hr>
        <div className='link' onClick={()=>history.push("/Register")}>
          Create an Account!
        </div>
        <div className='link' onClick={()=>history.push("/Login")}>
          Already have an account? Login!
        </div>
      </div>
    </div>
</div>
  );
}


//Blank Page
function BlankPage(){
  return(
    <div>

    <SideBar extracode={
    <div>
        <div className='large-font spacing color-darkgray'>Blank Page</div>
    </div>
    
    }/>
    </div>
    
    
  );
}


//Charts Page
function Charts() {
  document.body.style.background="whitesmoke";

  //for bar graph
  const data = [
    {text: 'January', value: 4000}, 
    {text: 'February', value: 5000} ,
    {text: 'March', value: 6000} ,
    {text: 'April', value: 8000} ,
    {text: 'May', value: 9000} ,
    {text: 'June', value: 15000} 
  ];
   
  const margin = {top: 20, right: 20, bottom: 30, left: 70};

  //for donut chart
  const donut_data = {
    labels: ['Direct','Social','Referral'],
    datasets: [
        {
            label: 'Stats',
            data: [55,27,18],
            // borderColor: [''],
            backgroundColor: ['#4e73df',
            '#1cc88a',
            '#36b9cc' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
            // backgroundImage: 'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center'
        }
        
    ]
}

const donut_options = {
    plugins: {
        // title: {
        //     display: true,
        //     text: 'Doughnut Chart',
        //     color:'blue',
        //     font: {
        //         size:34
        //     },
        //     padding:{
        //         top:30,
        //         bottom:30
        //     },
        //     responsive:true,
        //     animation:{
        //         animateScale: true,
        //         color: true            }
        // }
    }
    
}

//for line graph
  const data_line = [
    {name: 'Jan', uv: 0, pv:0, amt: "0"},
    {name: '', uv:10000, pv: 10000, amt: "10,000"},
  {name: 'Mar', uv: 5000, pv: 5000, amt: "5,000"},
  {name: '', uv:15000, pv: 15000, amt: "15,000"},
  {name: 'May', uv: 10000, pv: 10000, amt: "10,000"},
  {name: '', uv:20000, pv: 20000, amt: "20,000"},
  {name: 'Jul', uv: 15000, pv: 15000, amt: "15,000"},
  {name: '', uv:25000, pv: 25000, amt: "25,000"},
  {name: 'Sep', uv: 20000, pv: 20000, amt: "20,000"},
  {name: '', uv:30000, pv: 30000, amt: "30,000"},
  {name: 'Nov', uv: 25000, pv: 25000, amt: "25,000"},
  {name: '', uv:40000, pv: 40000, amt: "40,000"}                
];
  const renderLineChart = (
    <LineChart width={600} height={350} data={data_line} margin={{ top: 5, right:0, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  
  return(
    <div>

    <SideBar extracode={
    <div>
        <div className='spacing large-font'>Charts</div>
        <div className='spacing'>Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the official <span className='link'>Chart.js documentation</span>.</div>
        
        <div className='flex-row'>
          <div  className=' width70'>
              <div className='spacing bg-white'> 
                  <div className='heading-area color-violet'>Area chart</div>
                  <div className='text-center'>
                      {
                      renderLineChart
                      }
                  </div>
              </div>
              <div className='spacing bg-white text-center'>
                  <div className='heading-area color-violet'>Donut chart</div>
                        <div style={{width: '100%'}}> 
                      <BarChart ylabel=''
                        width={500}
                        height={500}
                        margin={margin}
                        data={data}
                        />
                      </div>
              </div>
          </div>
          <div  className='width30'> 
              <div className='bg-white spacing ' style={{height:"min-content"}}>
              <div className='heading-area color-violet'>Bar Chart</div>
              <div>
                  <Doughnut data={donut_data} options={donut_options} />
              </div>
              </div>
          </div>
        </div >
        <div>
        </div>
    </div>
    
    }/>
    </div>
    
    
  );
}





//Tables )Page
function Tables() {

  document.body.style.background="whitesmoke";


  //Table data and configuration
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];
  
  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
   

  return(
    <div>

    <SideBar extracode={
    <div>
      <div className='spacing color-darkgray large-font'>Tables</div>
      <div className='spacing'>DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official <span className='link'>DataTables documentation</span>.</div>
      <div className="spacing bg-white">
          <div className='heading-area color-violet'>DataTables Example</div>
          <div>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
          </div>
      </div>
    </div>
    
    }/>
    </div>
    
    
  );
}


//404 page
function NotExist(){
  const history = useHistory();
  document.body.style.background="whitesmoke";
  return(
    <div>

    <SideBar extracode={
    <div>
    <div className='text-center spacing'>
      <div >
        <img src="https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif"/>
      </div>
      <br></br><br></br><br></br>
      <div>It looks like you found a glitch in the matrix...</div>
      <div className='link' onClick={()=>history.push("/Dashboard")}><i class="fas fa-arrow-left"></i>  Back to Dashboard </div>
    </div>
    </div>
    
    }/>
    </div>
    
    
  );
}

