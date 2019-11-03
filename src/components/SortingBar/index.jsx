
import React from 'react';
import SortButton from './sortButton';

import {makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import SelectMenu from './selectMenu';


const optionList = [
    '50개씩보기',
    '100개씩보기',
    '200개씩보기',
    '300개씩보기'
];


let useStyles = makeStyles(theme =>({
    root:{
        minWidth:1024,
        height: 56,
    },
    leftBox:{
        width: "50%",
        height: 56,     
        alignItems:"center"
    },
    rightBox:{
        width: "100%",
        height: 56,     
        alignItems:"center"
    },
}));

let SortingBar = () =>{
    
    let barStyle = useStyles();
    return (
        <>
        <Box className={barStyle.root}>
            <Toolbar>   
                <Box display="flex" flexDirection="row" className={barStyle.leftBox}>
                    <SortButton optionName={"판매량순"} />
                    <SortButton optionName={"업체순"} />
                    <SortButton optionName={"브랜드순"} />
                    <SortButton optionName={"지금베스트순"} />
                    <SortButton optionName={"UV"} />
                    <SortButton optionName={"CR"} />
                </Box>
                <Box display="flex" flexDirection="row-reverse" className={barStyle.rightBox}>
                    <SelectMenu/>
                    <SelectMenu/>
                    
                    {/* <SelectMenu/> */}
                </Box>
            </Toolbar>
        </Box>
        </>
    )
}

export default SortingBar;