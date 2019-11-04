import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    maxWidth: 360,
    backgroundColor: '#f7f9fc',
  },
  boxStyle:{
    alignItems:'center',
  }
}));

let SelectMenu = ({value, dropDown, check}) =>{

    const options = value;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClickListItem = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };


    return(
      <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            variant="contained"
            onClick={handleClickListItem}
          >
          <ListItemText primary={options[selectedIndex]} />
          <Box component="span" ml={1} mt={0.5} className={classes.boxStyle}>
            <img src={dropDown}></img> 
          </Box>
        </ListItem>
      </List>
      {/* <Button component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            variant="contained"
            onClick={handleClickListItem}
          >
          <ListItemText primary={options[selectedIndex]} />
          <Box component="span" ml={1} mt={0.5} className={classes.boxStyle}>
            <img src={dropDown}></img> 
          </Box>
        </ListItem>
      </Button> */}
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'top',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'top',
        }}
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
          {option}
          <Box component="span" ml={1} mt={0.5} className={classes.boxStyle}>
            <img src={ index===selectedIndex ? check : ''}></img>
          </Box>
          </MenuItem>
        ))}
      </Menu>
    </div>
    );
}

export default SelectMenu;
