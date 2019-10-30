import React from 'react';
import Logo from './logo';

import Paper from '@material-ui/core/Paper';
import {AppBar, Toolbar} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SearchBar from './SearchContents/searchBar';


const theme = createMuiTheme({
    primary: {
        main: '#ffffff',
    },
    secondary: {
        light: '#0269e6',
        main: 'rgba(50, 60, 81, 0.6)',
    },
    searchBarColor:{
        main:'#eef1f7',
    }
})

let TopBar = ({...props}) =>{
    let backGroundColor = theme.primary.main;
    let fontColor = theme.secondary.main;
    let searchBarBackgroundColor = theme.searchBarColor.main;

    return(
        <ThemeProvider theme={theme}>
            <AppBar position="static" color={backGroundColor}>
                <Toolbar>   
                    <Logo/>
                    <SearchBar color={searchBarBackgroundColor}/>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default TopBar;