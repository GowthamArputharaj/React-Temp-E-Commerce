import React from 'react'

// Material UI Components
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, Button } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { ListItem } from '@material-ui/core';

// React Components

// Images

// All styles here..
const useStyles = makeStyles((theme) => ({
  footerPaper: {
    position: 'fixed',
    bottom: '0px',
    height: '3.5rem',
    zIndex: '2',
    
		width: '100%',

    background: '#24272C',
    boxShadow: '0px -2px 14px rgba(0, 0, 0, 0.3)',
    
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: '15px',
    lineHeight: '18px',
    color: '#FFFFFF',
    borderRadius: '0px',
    margin: 'auto',
  },
  footerPaperGrid: {
    padding: '0%',
    marginTop: '1rem',
    width: '85vw',
    margin: 'auto',
  },
  priceItems: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    padding: '0px',
    margin: '0px',
  },
  placeOrderList: {
    padding: '0px',
    margin: '0px',
  },
  price: {
    // fontSize: '1rem',
  },
  item: {
    // fontSize: '0.8rem',
  },
  arrowUp: {
    // marginTop: '5px',
    fontSize: '25px', 
    color: 'white',
    margin: '0px',
    padding: '0px',
  },
  arrowRight: {
    // marginTop: '0px',
    fontSize: '25px', 
    color: 'white',
    margin: '0px',
    padding: '0px',
  }
}));


// Footer Field
function Footer(props) {
	const classes = useStyles();

	return (
    <Paper component="form" className={classes.footerPaper}>
      <div className={classes.footerPaperGrid} >
        <Grid container 
          direction="row"
          alignItems="center"
          justify="space-between"
          >
          <Grid item xs={6} sm={10}>
            <ListItem className={classes.priceItems}>
            <span className={classes.price}><b>₹1624</b></span>
            <span className={classes.item}>&nbsp;| 12 items </span>
            <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            </ListItem>
          </Grid>
          <Grid item  xs={6} sm={2}>
            <ListItem className={classes.placeOrderList}>
              &emsp;&emsp;Place Order<KeyboardArrowRightIcon ></KeyboardArrowRightIcon>
            </ListItem>
          </Grid>
        </Grid>
      </div>
    </Paper>
	)
}





export default Footer;

