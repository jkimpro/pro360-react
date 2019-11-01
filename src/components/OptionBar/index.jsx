import React from 'react';
import ImgLookBar from './imgLookBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Toolbar, IconButton} from '@material-ui/core';
import { makeStyles,withStyles  } from '@material-ui/core/styles';

import cameraImage from '../../media/secondBarImages/camera.png';
import excelImage from '../../media/secondBarImages/excelIcon.png';


const useStyles = makeStyles(theme =>({
    root:{
        minWidth:1024,
        height: 56,
        backgroundColor:'#ffffff', //나중에 context로 재조정
        marginTop:64,
    },
    leftBox:{
        width: "100%",
        height: 56,     
        alignItems:"center"
    },
    rightBox:{
        width: "100%",
        height: 56,     
        alignItems:"center"
    },
    captureBtn:{
        width: 107,
        height: 40,
        color: '#1b2334',
        fontSize:14,
        marginLeft: 8,
        letterSpacing:-0.37
    },
    excelBtn:{
        width: 130,
        height: 40,
        color: '#1b2334',
        fontSize:14,
        marginLeft: 8,
        letterSpacing:-0.37
    }
}));


let OptionBar = () =>{
    const barStyle = useStyles();
    return(
        <Box className={barStyle.root}>
            <Toolbar>   
                <Box display="flex" flexDirection="row" className={barStyle.leftBox}>
                    <ImgLookBar/>
                </Box>
                <Box display="flex" flexDirection="row-reverse" className={barStyle.rightBox}>
                    <Button className={barStyle.excelBtn}> <img src={excelImage}></img>&nbsp;엑셀 다운로드</Button>
                    <Button className={barStyle.captureBtn}> <img src={cameraImage}></img>&nbsp;화면 캡쳐</Button>
                </Box>
            </Toolbar>
        </Box>
    )
}

export default OptionBar