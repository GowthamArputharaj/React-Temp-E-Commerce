import React from 'react';


// Material UI Components
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';

// React Componoentns
import CartItem from './CartItem';

// Images

const useStyles = makeStyles((theme) => ({
 
}));



const CartItems = (props) => {

  const classes = useStyles();

  return (
    <div className={classes.CartItem}>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  )
}


export default CartItems;





