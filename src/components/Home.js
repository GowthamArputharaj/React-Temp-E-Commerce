import React from 'react'

// Material UI Components
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';

// React Components
import ShopImage from './Home/ShopImage.js';
import SearchShop from './Home/SearchShop.js';
import Products from './Home/Products.js';
import ViewMenu from './Home/ViewMenu.js';
import Footer from './Home/Footer.js';
import NavigationBar from './Home/NavigationBar.js';

// Images


// All styles here..
const useStyles = makeStyles((theme) => ({
	Products: {
		marginTop: '22rem',
	},
	// ViewMenu: {
	// 	position: 'static',
	// 	bottom: '20vh',
	// 	left: '10vw',
	// }
}));

// Home
function Home(props) {

	const classes = useStyles();
	var main_search_shop = '';

	const searchFieldHandle = (event) => {
		let target_name = event.target.name;
		let target_value = event.target.value;

		console.log(target_name, target_value);

		// this.setState({
		// 	[target_name]: target_value,
		// });
		main_search_shop = main_search_shop + target_value;
	}

	return (
		<div>
			<NavigationBar />
			<ShopImage />
			<SearchShop main_search_shop={main_search_shop} onChange={searchFieldHandle} />
			<Products className={classes.Products}/>
			<ViewMenu className={classes.ViewMenu} />
			<Footer />
		</div>
	)

}



export default Home;

