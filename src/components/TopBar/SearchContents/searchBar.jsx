import React, { useContext, useEffect } from 'react';
import {CardContext} from '../../Provider/index';

import SearchInput from './searchInput';
import SearchImage from '../../../media/topBarImages/searchIcon.png';
import SettingImage from '../../../media/topBarImages/settingIcon.png';

import Data from '../../../mockTable.json';


import Box from '@material-ui/core/Box';

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';


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
    leftBox:{
        maxWidth:700,
    },
    rightBox:{
        width: 44
    },
    schBtn:{
        width:35,
        height:35,
        padding: theme.spacing(0, 0),
        alignItems: "center"
    }
  }));

let SearchBar = ({...props}) =>{
    let barStyle = useBarStyles();    
    let [,setCardData] = useContext(CardContext);
    useEffect(() => {
    }, []);

    let handleSubmit = (e) => {
        e.preventDefault();
    }
    let handleChange = (e) => {
        // fetchData().then(data => {
        //     setCardData(data);
        // })
        console.log(Data);
        setCardData(Data);
    }
    return(
        <Box display="flex" className={barStyle.root}>
            <Box display="flex" className={barStyle.leftBox}>
                <IconButton className={barStyle.schBtn} onClick={handleChange}> 
                    <img src = {SearchImage}></img>
                </IconButton>
                <SearchInput></SearchInput>
            </Box>
            <Box display="flex" flexDirection="row-reverse" className={barStyle.rightBox}>
                <IconButton className={barStyle.schBtn}> <img src = {SettingImage}></img>  </IconButton>
            </Box>
        </Box>
    )
}

export default SearchBar;