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

// Files
// import logo_image from '../images/logo.jpg';
import logo_image from '../../images/logo_color.jpg';
import cart_svg from '../../images/cart_svg.svg';
import nav_search_svg from '../../images/nav_search_svg.svg';
import nav_btn_icon_svg from '../../images/nav_btn_icon_svg.svg';

// React Components
import SideMenu from './SideMenu';



const useStyles = makeStyles((theme) => ({
  appbar: {
    color: "#24272C",
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  palette: {
    common: {
      white: '#fff',
    },
    color: 'grey',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  logo_image: {
    width: '83px',
    // height: '42px',
    height: '62px',
    left: '139px',
    top: '12px',
  },
  gridContainer: {
    width: '360px !important',
    height: '64px !important',
    top: '0px',
    bottom: '0px',
  },
  logoGrid: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  badge: {
    borderRadius: '4px',
    marginLeft: '0rem',
    marginBottom: '1.1rem',
    width: '13px',
    height: '13px',
    background: '#24272C',

    fontSize: '12px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '11px',
    lineHeight: '13px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  backgroundBlur: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100vw',
    height: '100vh',
    background: 'rgba(36, 39, 44, 0.3)',
    backdropFilter: 'blur(10px)',
    zIndex: '9',
  }
}));

function NavigationBar() {
  const classes = useStyles();

  var [showSideMenu, setShowSideMenu] = React.useState(false);

  const toggleSide = () => {
    setShowSideMenu(!showSideMenu);
    console.log(showSideMenu);
    if(showSideMenu) {
      document.querySelector('body').classList.remove('stop_scrolling');
    } else {
      document.querySelector('body').classList.add('stop_scrolling');
    }
  }

  return (
    <div className={classes.root} >
      <AppBar position="static" className={classes.appbar} >
        <Toolbar>
          {showSideMenu ?
            <>
            <div className={classes.backgroundBlur} tabIndex="0" role="button" onClick={toggleSide}>
            </div> 
              <SideMenu />

            </>
            :
            (
              <>
                <Grid container direction="row" justify="space-between" alignItems="center" className={classes.gridContainer} >
                  <Grid item  >
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="open drawer"
                      onClick={toggleSide}
                    >
                      {/* <MenuIcon /> */}
                      <img src={nav_btn_icon_svg} alt="Nav"></img>
                    </IconButton>
                  </Grid>
                  <Grid item className={classes.logoGrid}>
                    <img src={logo_image} alt='Logo Image' className={classes.logo_image} />
                  </Grid>
                  <Grid item style={{ position: 'absolute', right: '0px', }} >
                    <IconButton aria-label="search" color="inherit" >
                      <img src={nav_search_svg} alt="Search"></img>
                    </IconButton>
                    <Link to="/my-cart" style={{ textDecorationLine: 'none',}}>
                      <IconButton aria-label="search" color="inherit" >
                        <img src={cart_svg} alt="cart"></img>
                        <span overlap="rectangle" className={classes.badge} >
                          3
                        </span>
                      </IconButton>
                    </Link>
                  </Grid>
                </Grid>
              </>
            )
          }
        </Toolbar>
      </AppBar>
      
    </div>
  );
}


export default NavigationBar




