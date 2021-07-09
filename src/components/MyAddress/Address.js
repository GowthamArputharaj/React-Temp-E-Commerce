import React from 'react';
import { Link } from 'react-router-dom';


// Material UI Components
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';



// React Componoentns

// Images


const useStyles = makeStyles((theme) => ({
  Address: {
    width: '100%',
    // padding: '0.2rem 0.2rem 0rem 0.2rem',
    padding: '0.2rem',
    fontFamily: 'Roboto',
    background: '#FFFFFF',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',


    // backgroundColor: 'yellow',
    backgroundColor: '#FFFFFF',
    marginTop: '0.5rem',

    //  TO SHOW BORDER
    borderRadius: '8px',
    border: '1px solid rgba(36, 39, 44, 0.5)',
  },
  checkBx: {

  },
  name: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#000000',
  },
  def: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#000000',
  },
  address: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '15px',
    color: '#000000',
    opacity: '0.7',
  },
  phone: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '15px',
    color: '#000000',
    opacity: '0.7',
  },
  buttons: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '15px',
    textTransform: 'uppercase',
    color: '#000000',
    opacity: '0.7',
    // padding: '1rem',
    // marginTop: '1rem',
  },
  editDeleteButton: {
    border: 'none', 
    backgroundColor: 'transparent',
    marginTop: '0.5rem',
    paddingLeft: '-16px',
    marginLeft: '-16px',
  },
}));


const Address = (props) => {

  const classes = useStyles();

  document.querySelector('body').classList.remove('stop_scrolling');

  return (
    <div>
      <div className={classes.Address}>
        <Grid container >
          <Grid item xs={2} sm={1}>
            <span >
              <Checkbox name="address_1" className={classes.checkBx} style={{ color: '#24272C', }} label="gowtham" />
            </span>
          </Grid>
          <Grid item xs={10} sm={11} style={{ paddingBottom: '0px', }} >
            <div style={{ marginTop: '0.7rem',}}>
              <span className={classes.name}>
                Saurabh Sharma
              </span>
              <span className={classes.def}>
                (Default)
              </span>
            </div>
            <div style={{ marginTop: '0.2rem',}}>
              <span className={classes.address} >
                F-74, Suresh Marg, CScheme, Jaipur, 302001
              </span>
            </div>
            <div style={{ marginTop: '0.1rem',}}>
              <span className={classes.phone}>
                9560355887
              </span>
            </div>
            <span className={classes.buttons} >
              <Grid container >
                <Grid item xs={10} md={11}>
                  {/* <button variant="text" className={classes.editDeleteButton} ><b>EDIT</b></button>
                  <button variant="text" className={classes.editDeleteButton} ><b>DELETE</b></button> */}
                  <Button variant="text" className={classes.editDeleteButton} ><b>EDIT</b></Button>
                  <Button variant="text" className={classes.editDeleteButton} style={{ marginLeft: '1vw',}} ><b>DELETE</b></Button>
                </Grid>
                <Grid item xs={2} md={1}>
                  <IconButton aria-label="" style={{  }} >
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </span>
          </Grid>
        </Grid>

      </div>
    </div>
  )
}


export default Address;





