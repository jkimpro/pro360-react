import React from 'react';
import Logo from './logo';

import {AppBar, Toolbar} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    primary: {
        main: '#ffffff',
    },
    secondary: {
        light: '#0269e6',
        main: 'rgba(50, 60, 81, 0.6)',
    },
})
let TopBar = ({...props}) =>{
    const backGroundColor = theme.primary.main;
    const fontColor = theme.secondary.main;

    return(
        <ThemeProvider theme={theme}>
            <AppBar position="static" color={backGroundColor}>
                <Toolbar>   
                    <Logo/>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default TopBar;