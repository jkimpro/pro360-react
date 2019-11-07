
import React from 'react';
import SortButton from './sortButton';
import OptionProvider from './context';

import {makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import SelectMenu from './selectMenu';
import CheckIcon from '../../media/selectImages/checkIcon.png';
import DropDownIcon from '../../media/selectImages/dropDownIcon.png';

const numList = [
    '50 개씩 보기',
    '100 개씩 보기',
    '200 개씩 보기',
    '300 개씩 보기'
];

const optionList = [
    '필터',
    '1',
    '2',
    '3'
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
                <OptionProvider>
                    <Box display="flex" flexDirection="row" className={barStyle.leftBox}>
                        <SortButton optionName={"판매량순"} />
                        <SortButton optionName={"업체순"} />
                        <SortButton optionName={"브랜드순"} />
                        <SortButton optionName={"지금베스트순"} />
                        <SortButton optionName={"UV"} />
                        <SortButton optionName={"CR"} />
                    </Box>    
                </OptionProvider>   
                <Box display="flex" flexDirection="row-reverse" className={barStyle.rightBox}>
                    <SelectMenu value={optionList} dropDown={DropDownIcon} check={CheckIcon}/>
                    <SelectMenu value={numList} dropDown={DropDownIcon} check={CheckIcon}/>
            
                    {/* <SelectMenu/> */}
                </Box>
            </Toolbar>
        </Box>
        </>
    )
}

export default SortingBar;