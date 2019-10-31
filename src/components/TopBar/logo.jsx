import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import prdlogo from '../../media/topBarImages/logo-space.png';
import { Container } from '@material-ui/core';

let useStyles = makeStyles(theme =>({
    root:{
        width: 176,
        height: 40,
        padding: 4
    }
}));

let Logo = () =>{
    const logoStyle = useStyles();
    return(
        <div className = {logoStyle.root}>
            <img css="" src={prdlogo}/>
        </div>
    )
}

export default Logo;
