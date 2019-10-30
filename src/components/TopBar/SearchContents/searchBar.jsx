import React from 'react';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        margin: '0 ',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  }));

let SearchBar = () =>{

    let barStyle = useStyles();

    return(
        <Paper className={barStyle.root}>
            <Button> shit </Button>
            <Button> shit</Button>
        </Paper>
    )
}

export default SearchBar;