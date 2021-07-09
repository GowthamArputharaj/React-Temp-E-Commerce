import React from 'react'
import ReactDOM from 'react-dom'

// Material UI Components
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, Button } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';
// React Components

// Images


// All styles here..
const useStyles = makeStyles((theme) => ({
  viewMenuPaper: {
    position: 'fixed',
    bottom: '1vh',
    width: '100%',
    background: '#FFFFFF',
    
  },
  paper: {
    border: '2px solid #000',
    fontFamily: 'Roboto',
    padding: '1rem',
    width: '80vw',
    // height: '40vh',
    backgroundColor: '#FFFFFF',
    bottom: '10vh',
    
    position: 'absolute',
    // top: '60%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -25%)',

    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    borderWidth: '0px',
  },
  modal: {},
  viewMenuItem: {
    marginTop: '1rem',
    marginBottom: '1rem',

    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '18px',
    
    color: '#24272C',
  },
  viewMenuButton: {
    position: 'absolute',
    left: '33vw',
    bottom: '10vh',

    background: '#FFFFFF',
    boxShadow: '0px 4px 14px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '38px',
    width: '8rem',
  },
  viewMenuButtonClose: {
    position: 'absolute',
    left: '40vw',
    bottom: '10vh',

    background: '#FFFFFF',
    boxShadow: '0px 4px 14px 2px rgba(0, 0, 0, 0.25)',
    borderRadius: '38px',
    zIndex: '2222',

  }
}));


// ViewMenu Field
function ViewMenu(props) {
	const classes = useStyles();
  const [visibility, setVisibility] = React.useState(false);

  
  const handleOpen = () => { 
    // document.querySelector('#gowtham').className = 'hide';
    // document.querySelector('#oriViewMenuBtn').setAttribute('style', 'display:none;');
    // document.querySelector('#dupViewMenuBtn').setAttribute('style', 'display:block;');

    setVisibility(true);
  };

  const handleClose = () => {
    // document.querySelector('#gowtham').className = 'show';
    // document.querySelector('#dupViewMenuBtn').setAttribute('style', 'display:none;');
    // document.querySelector('#oriViewMenuBtn').setAttribute('style', 'display:block;');

    setVisibility(false);
  };

	return (
    <Paper component="form"  className={classes.viewMenuPaper} >
      <Button variant="text" onClick={handleOpen} className={classes.viewMenuButton} id="oriViewMenuBtn">
        View Menu
      </Button>

      <Modal
        open={visibility}
        onClose={handleClose}
        closeAfterTransition
        style={{ zIndex: '3333'}}
      >
        <Fade in={visibility} >
        <div >
          <Button variant="text" onClick={handleClose} className={classes.viewMenuButtonClose} id="oriViewMenuBtn">
            View Menu
          </Button>
        </div>
        </Fade>
      </Modal>

      <Modal
        // className={classes.modal}
        open={visibility}
        onClose={handleClose}
        closeAfterTransition
        style={{ zIndex: '3333'}}

        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}  
        // disableEnforceFocus 
      >
        <Fade in={visibility} >
          <div className={classes.paper}>
            <p className={classes.viewMenuItem}>Dairy Products (20)</p>
            <p className={classes.viewMenuItem}>Juices & Beverges (12)</p>
            <p className={classes.viewMenuItem}>Grains & Rice (12)</p>
            <p className={classes.viewMenuItem}>Cereals & pulses (25)</p>
            <p className={classes.viewMenuItem}>Fruits & vegetables (31)</p>
            <p className={classes.viewMenuItem}>Chocolates (12)</p>
          </div>
        </Fade>
      </Modal>
    </Paper>
	)
}





export default ViewMenu;

