import React from 'react'

// Material UI Components
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

// React Components
import Home from './components/Home.js';
import MyCart from './components/MyCart';
import MyAddress from './components/MyAddress.js';
import NewAddress from './components/MyAddress/NewAddress.js';


// Images


// All styles here..
const useStyles = makeStyles((theme) => ({

}));


const Error = (props) => {
  return (
    <div>
      <h1>Enter Valid URL</h1>
    </div>
  )
};


// Shop
const Shop = (props) => {
	const classes = useStyles();
	return (
		<main>
      <Switch>
        <Route path="/" component={Home} exact ></Route>
        <Route path="/my-cart" component={MyCart} exact ></Route>
        <Route path="/my-address" component={MyAddress} exact ></Route>
        {/* <Route path="/new-address" component={NewAddress} exact ></Route> */}
        <Route component={Error} ></Route>
      </Switch>
		</main>
	)

}

export default Shop;


