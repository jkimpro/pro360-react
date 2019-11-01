import React from 'react';

import SearchInput from './searchInput';
import SearchImage from '../../../media/topBarImages/searchIcon.png';
import SettingImage from '../../../media/topBarImages/settingIcon.png';


import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useBarStyles = makeStyles(theme => ({
    root: {
        background: '#eef1f7',
        borderRadius: 4,
        border: 0,
        color: 'white',
        width: 849,
        height: 40,
        margin: '0 26px',
        padding: theme.spacing(0.5, 1),
        alignItems:"center"
    },
  }));

let SearchBar = ({colorStyle}) =>{
    let barStyle = useBarStyles();
    return(
        <Paper className={barStyle.root}>
            <Button> 
                <img src = {SearchImage}></img>
            </Button>
            <SearchInput ></SearchInput>
            <Button> <img src = {SettingImage}></img>  </Button>
        </Paper>
    )
}

export default SearchBar;