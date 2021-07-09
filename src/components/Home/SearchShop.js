import React from 'react'
import ReactDOM from 'react-dom'

// Material UI Components
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles, useTheme, withTheme } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

// React Components

// Images
import main_search_svg from '../../images/main_search_svg.svg';

// All styles here..
const useStyles = makeStyles((theme) => ({
	main_search_shop_MOBILE: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
		width: '90%',
    marginTop: '-2vh',

		background: '#FFFFFF',
		boxShadow: '0px 3px 16px rgba(0, 0, 0, 0.15)',
		borderRadius: '6px',
    position: 'absolute',
    // top: '50%',
    // left: '52.3%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -20%)',
  },
	main_search_shop: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
		width: '80vw',
		marginLeft: '7vw',
		marginRight: '7vw',
		marginTop: '-5vw',
		backgroundColor: 'white',
  },
	searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchIconButton: {
    padding: 10,
  },
}));


// Main Search Field
function SearchShop(props) {
	const classes = useStyles();

	return (
    <Paper component="form" className={classes.main_search_shop_MOBILE}>
      <InputBase
        className={classes.searchInput}
        placeholder="Search"
				value = {props.main_search_shop}
				onChange = {props.onChange}
				name = 'main_search_shop'
      />
      <IconButton type="submit" className={classes.searchIconButton} aria-label="search">
        <img src={main_search_svg} alt="Search"></img>
      </IconButton>
    </Paper>
	)
}




export default SearchShop;

