import React from 'react';
import { Link } from 'react-router-dom';


// Material UI Components
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';


// React Componoentns
import Footer from './Home/Footer';
import CartCalculations from './MyCart/CartCalculations';
import CartItems from './MyCart/CartItems';

// Images
import my_cart_header_back_svg from '../images/my_cart_header_back_svg.svg';



const useStyles = makeStyles((theme) => ({
	Header: {
		height: '10vh',
    backgroundColor: '#FFFFFF',
    fontStyle: 'normal',

	},
  headerTitle: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#000000',
    position: 'absolute',
    transform: 'translate(15%, 130%)',
  },
  headerDescription: {
    fontWeight: 'normal',
    fontSize: '11px',
    lineHeight: '13px',    
    color: '#000000',
    opacity: '0.5',
  },
}));


const MyCart = (props) => {

  const classes = useStyles();

  document.querySelector('body').classList.remove('stop_scrolling');

  return (
    <div>
      <div className={classes.Header}>
        <span className={classes.headerTitle}>
          <Link to="/" style={{ textDecorationLine: 'none',}}>
            <img src={my_cart_header_back_svg} alt="Back"></img>
          </Link>
          &ensp;My Cart
          <span className={classes.headerDescription}>&ensp;12 items</span>
        </span>
      </div>
      <CartItems />
      <CartCalculations style={{ marginBottom: '20vh', }} />
      <Footer />
    </div>
  )
}


export default MyCart;





