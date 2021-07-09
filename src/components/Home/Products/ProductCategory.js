import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import '@fontsource/roboto';

// React Componenets
import Product from './Product';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    paddingTop: '0px',
    paddingBottom: '0.1rem',
    // borderBottom: '1px solid #CCC',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  productCategoryTitle: {
    position: 'absolute',
    width: '157px',
    height: '21px',
    left: '24px',
    top: '336px',
    
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#24272C',
  },
  categoryDescription: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    /* identical to box height */

    // color: '#CCC',
    color: '#24272C',

    opacity: '0.5',
  },
  hr: {
    color: '#24272C',
    backgroundColor: '#24272C',
    
    opacity: '0.5',
  }

}));

function ProductCategory() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      className={classes.root}
    >
      <ListItem button onClick={handleClick} style={{ width: '95vw', paddingRight: '0px'}} >
        {/* <ListItemText primary="Dairy Products (20)" /> */}
        <ListItemText style={{fontWeight: '900', fontSize: '18px', lineHeight: '21px', color: '#24272C', }}>
          <b>Dairy Products (20)</b><br></br>
          <span className={classes.categoryDescription}>Milk, Skim Milk, Cheese, Paneer, Eggs, Yogur...</span>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit >
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </Collapse>
    </List>
  );
}


export default ProductCategory;