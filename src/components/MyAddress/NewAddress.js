import React from 'react';
import { Link } from 'react-router-dom';


// Material UI Components
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import { Button, Drawer, Grid, Slide, Slider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';




// React Componoentns


// Images
import place_order_footer_svg from '../../images/place_order_footer_svg.svg';



const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '80vh',
    backgroundColor: '#FFFFFF',
    zIndex: '10',
    // padding: '1rem 0rem 0.2rem 0rem',
    marginTop: '20vh',
    // marginBottom: '20vh',
    // paddingBottom: '20vh',
    fontFamily: 'Roboto',
  },
  Form: {
    width: '90vw',
    paddingBottom: '20vh',

    // height: '100%',
    margin: 'auto',
    marginTop: '1rem',
  },
  addNewAddress: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
  },
  inputPaper: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: '8px',
    backgroundColor: '#F2F3F7',
    border: 'none',
    marginTop: '3rem',
    boxSizing: 'border-box',
  },
  TextField: {
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#F2F3F7',

    // fontSize: '1.1rem',
    fontSize: '15px',

    height: '1.8rem',
    padding: '1.8rem 1.8rem 1.8rem 1rem',
    borderRadius: '4px',

    border: '1px solid #e2e2e1',
    lineHeight: '2rem',

  },
  RedditTextField: {
    width: '100%',
    marginTop: '1rem',
    backgroundColor: '#F2F3F7',
  },
  checkBx: {
    color: '#24272C',
    fill: '#24272C',
  },
  ckboxText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '13px',
    lineHeight: '17px',
    color: '#000000',
    opacity: '0.7',
  },


}));

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#F2F3F7',
  },
}));

function RedditTextField(props) {
  const classes = useStylesReddit();
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}


const NewAddress = (props) => {

  const classes = useStyles();

  document.querySelector('body').classList.remove('stop_scrolling');

  return (
    <div className={classes.root}>
      <Slide direction="up" in={true} mountOnEnter timeout={800} >
        <div className={classes.Slide}>
          <Grid container className={classes.Form}>
            <Grid item xs={12} md={12}>
              <span className={classes.addNewAddress}>Add New Address</span>
            </Grid>
            <Grid item xs={12} md={12}>
              <InputBase
                className={classes.TextField}
                placeholder="Full Name"
                name="full_name"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <RedditTextField
                label="Flat / House No."
                defaultValue="L1051"
                variant="filled"
                id="flat_house_no"
                className={classes.RedditTextField}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <RedditTextField
                label="Street Locality"
                defaultValue="F-7"
                variant="filled"
                id="street_locality"
                className={classes.RedditTextField}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputBase
                className={classes.TextField}
                placeholder="City"
                name="city"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputBase
                className={classes.TextField}
                placeholder="Pincode"
                name="pincode"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container style={{ marginTop: '1rem', }} alignItems="center"  >
                <Grid item xs={2} md={1}>
                  <Checkbox name="address_1" className={classes.checkBx} label="gowtham" style={{ color: '#24272C', }} />
                </Grid>
                <Grid item xs={10} md={11}  >
                  <span className={classes.ckboxText} >Set the address as default</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container alignItems="center"  >
                <Grid item xs={2} md={1}>
                  <Checkbox name="address_1" className={classes.checkBx} label="gowtham" style={{ color: '#24272C', }} />
                </Grid>
                <Grid item xs={10} md={11}  >
                  <span className={classes.ckboxText} ><br></br>Save the address details for other shops powered by easysocial.io</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container alignItems="center" justify="space-between" style={{ marginTop: '1rem', }} >
                <Grid item xs={8} md={1}>
                  <Button variant="contained" size="large" style={{ backgroundColor: '#24272C', color: 'white', }}>
                    Save Address &ensp; <img src={place_order_footer_svg} alt="Go"  ></img>
                  </Button>
                </Grid>
                <Grid item xs={4} md={11}  >
                  <Button variant="text"  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Slide>
    </div>
  )
}


export default NewAddress;





