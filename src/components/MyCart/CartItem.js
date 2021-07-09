import React from 'react';
import { useState } from 'react';


// Material UI Components
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { ListItem, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// React Componoentns


// Images
import amul_cool from '../../images/amul_cool.jpg';


const useStyles = makeStyles((theme) => ({
  product: {
    padding: '0.5rem 0.5rem',
    // width: '95vw',
    paddingRight: '0px',
    marginRight: '0px',
    marginLeft: '0px',
  },
  gridContainer: {
    // width: '100%',
    // width: '95vw',
  },
  gridImage: {},
  gridDetails: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    boxSizing: 'border-box',
  },
  gridAddButton: {},
  productImage: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    left: '1rem',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    boxSizing: 'border-box',
  },
  productDetails: {
    border: '0px',
  },
  productTitle: {
    margin: '5px 0px 0px 0px',

    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '18px',
    fontStyle: 'normal',

    color: '#000000',
  },
  productQuantity: {
    margin: '0px 0px 0px 0px',

    fontSize: '14px',
    lineHeight: '16px',
    color: '#24272C',
    fontWeight: '900',

    textDecoration: 'underline',

  },
  placeOrderList: {
    marginLeft: '0px', 
    paddingLeft: '0px',
    marginTop: '5px',
  },
  reducedPrice: {
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#28333F',
  },
  originalPrice: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#28333F',
  },
  discountPercentage: {
    background: '#41AF66',
    borderRadius: '4px',
    padding: '2px',
    margin: '5px 0px 0px 0px',

    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '-0.02em',
    color: '#FFFFFF',
  },
  addButton: {
    width: '6rem',
    height: '36px',
    top: '15%',
    marginRight: '0%',
    marginLeft: '9%',

    border: '1px solid #24272C',
    boxSizing: 'border-box',
    borderRadius: '4px',
  },
  iconWhite: {
    fill: '#FFFFFF',
    fontSize: '1.2rem',
    color: '#FFFFFF',
  },
}));



const CartItem = (props) => {

  const classes = useStyles();

  const [ isAddButtonEditable, setIsAddButtonEditable ] = useState(true);

  return (
    <div className={classes.product}>
      <Grid
        container
        direction="row"
        alignItems="stretch"
        // justify="center"
        // justify="space-around"
        // justify="space-between"
        justify="flex-start"
        className={classes.gridContainer}
        spacing={0}


      >
        <Grid item xs={4} sm={4} className={classes.gridImage}>
          <Paper component="form" className={classes.productImage}  >
            <img src={amul_cool}></img>
          </Paper>
        </Grid>
        <Grid item xs={8} sm={8} className={classes.gridDetails}>
          <Typography  >
            <b className={classes.reducedPrice}>₹ 61</b>&ensp;
            <strike className={classes.originalPrice}>₹ 68</strike>&ensp;
            <span variant="text" className={classes.discountPercentage}>12%off</span>&ensp;
            <span variant="text" className={classes.discountPercentage}>Buy 1, Get 1</span>
          </Typography>
          <Typography className={classes.productTitle} >Amul Taaza Milk Blue tetra-pack</Typography>
          <Grid container direction="row" alignItems="center"  justify="center"  >
            <Grid item xs={5} sm={8} md={10} >
              <ListItem className={classes.placeOrderList} >
                <span className={classes.productQuantity} style={{ marginLeft: '0px', paddingLeft: '0px'}} >1 Liter</span>
                <span>
                  <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                </span>
              </ListItem>
            </Grid>
            <Grid item xs={7} sm={4} md={2} >
              {isAddButtonEditable ? (
                <Button variant="contained" className={classes.addButton}   style={{ background: '#24272C', color: '#FFFFFF',}}  >
                    <RemoveIcon className={classes.iconWhite} />
                  <span><b>&ensp;2&ensp;</b></span>
                    <AddIcon className={classes.iconWhite}/>
                </Button>
              ) : (
                <Button variant="outlined" className={classes.addButton} style={{ background: '#FFFFFF', }} >
                  Add
                </Button>
              )}

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}


export default CartItem;





