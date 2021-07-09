import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Material UI Componenets
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import { Button, Drawer, Slide, Slider } from '@material-ui/core';
import Box from '@material-ui/core/Box';

// Files
import nav_side_logo_image from '../../images/nav_side_logo_image.jpg';
import nav_side_call_svg from '../../images/nav_side_call_svg.svg';
import nav_side_whatsapp_svg from '../../images/nav_side_whatsapp_svg.svg';
import pencil_svg from '../../images/pencil_svg.svg';


const useStyles = makeStyles((theme) => ({
  DrawerContent: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '80vw',
    height: '100vh',
    backgroundColor: '#FFFFFF',
    zIndex: '10',
    padding: '1rem 0.2rem 0.2rem 0.2rem',
  },
  logoLang: {
    marginTop: '0.5rem',
    padding: '0px',
  },
  logoImage: {
    width: '35vw',
  },
  languageBox: {
    background: '#FFFFFF',
    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',
    marginTop: '8%',
    // marginLeft: '10%',
    right: '30%',
    padding: '0.4rem 0.3rem 0.3rem 0.3rem',
    width: '6rem',
  }, 
  languageEnglish: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '12px',
    fontFamily: 'Roboto',
    color: '#24272C',
    // opacity: '0.7',
  },
  languageHindi: {
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '12px',
    textDecorationLine: 'underline',
    color: '#1B98CA',
  },
  addressTitle: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
    marginLeft: '5%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  addressLine2: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#000000',

    opacity: '0.7',
    marginTop: '0.3rem',
    marginLeft: '5%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  phone: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#000000',

    opacity: '0.7',
    marginTop: '0.3rem',
    marginLeft: '5%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  callWhatsapp: {
    marginTop: '0.5rem',
    paddingLeft: '0px',
    width: '100%', 
    marginLeft: '3%',
  },
  callWhatsappImage: {
    width: '25vw',
  }, 
  nameEditPhone: {
    marginLeft: '4%',
    marginTop: '5%',
  },
  nameEdit: {

  },
  name: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#000000',
  },
  pencilButton: {
    marginTop: '0px',
    backgroundColor: 'transparent',
    padding: '0px',
    border: '0px',
    transform: 'translate(0%, 25%)',
  },
  phone2: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#000000',
    opacity: '0.5',
    marginTop: '0.3rem',
  },
  MyDetails: {
    marginLeft: '8%',
    marginTop: '10%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '32px',
    color: '#000000',
  },
  PoweredBy: {
    position: 'absolute',
    bottom: '4vh',
    marginLeft: '8%',
  },
  poweredByText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '13px',
    color: '#000000',
    opacity: '0.7',
  }
}));

const SideMenu = (props) => {
  const classes = useStyles();

  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSide = () => {
    setShowSideMenu(!showSideMenu);
    console.log('SideMenu toggleSide');
  }

  return (
    <Slide direction="right" in={true}  mountOnEnter timeout={300} >
      <div className={classes.DrawerContent} >
        {/* <Drawer anchor="right"   ></Drawer> */}
        <div style={{ width: '100%', }}>
          <Box display="flex" p={1}   className={classes.logoLang} >
            <Box p={1} flexGrow={2}  >
              <img src={nav_side_logo_image} alt="Logo" className={classes.logoImage} ></img>
            </Box>
            <Box p={1} flexGrow={3}  >
              <div className={classes.languageBox}>
                <span className={classes.languageEnglish}>English</span>
                <span style={{ color: '#1B98CA', }}>|</span>
                <span className={classes.languageHindi}> हिंदी </span>
              </div>
            </Box>
          </Box>
        </div>
        <div>
          <div className={classes.addressTitle} >
            Country Store, C-Scheme
          </div>
          <div className={classes.addressLine2} >
            B-12, Ashok Nagar, C-Scheme, Jaipur
          </div>
          <div className={classes.phone}>
            +91 9560 355 887
          </div>
        </div>
        <div className={classes.callWhatsapp} >
          <span>
            <img src={nav_side_call_svg} alt="call" className={classes.callWhatsappImage} ></img>
            <img src={nav_side_whatsapp_svg} alt="whatsapp" className={classes.callWhatsappImage} ></img>
          </span>
        </div>
        <hr></hr>
        <div className={classes.nameEditPhone}>
          <div className={classes.nameEdit} >
            <span className={classes.name}>Saurabh Sharma </span>
            <button className={ classes.pencilButton } >
              <img src={pencil_svg} alt="Edit"></img>
            </button>
          </div>
          <div className={classes.phone2} >
            +91 9560 355 887
          </div>
        </div>
        <div className={classes.MyDetails}>
          <p>
            {/* <span>My Cart</span> */}
            <span>
              <Link to="/my-cart" style={{ textDecorationLine: 'none',}}>My Cart </Link>
            </span>
          </p>
          <p>
            <span>
              <Link to="/my-address" style={{ textDecorationLine: 'none',}}>My Addresses</Link>
            </span>
          </p>
          <p>
            <span>My Orders</span>
          </p>
        </div>
        <div className={classes.PoweredBy}>
          <p className={classes.poweredByText}>
            Powered by: <span><u>easysocial.io</u></span>
          </p>
        </div>
      </div>
    </Slide>
  );
}


export default SideMenu




