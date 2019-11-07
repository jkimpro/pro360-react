import React from 'react';
import $ from 'jquery';
import {formatNumber} from './api';
import {makeStyles, withStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SampleImg from '../../media/cardImages/sample.png'

const useStyles = makeStyles(theme =>({
    root:{
        width: 304,
        height: 96
    },
    imgBox:{
        width: 80,
        height: 80,
        border: 'solid 1px rgba(0, 0, 0, 0.04)',
    },
    leftBox:{
        width: 116,
        height: '100%',
        paddingRight: 16,
        alignItems: 'center',
    },
    rightBox:{
        width: 188,
        height: '100%',
    }
}));

//main system call the name all the send setText();
//AS MAIN IS THE CALL ON IT

const useDetailStyles = makeStyles(theeme=>({
    prdCode:{
        width: 190,
        height: 14,
        textOverflow:'ellipsis',
        overflow:'hidden',
        marginTop:8,
        marginBottom:4,
        fontFamily: 'SFProText',
        fontSize: 11,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.27,
        letterSpacing: 'normal',
        color: '#323c51', 
    },
    compName:{
        width: 190,
        height: 18,
        textOverflow:'ellipsis',
        overflow:'hidden',
      
        fontFamily: 'AppleSDGothicNeo',
        fontSize: 12,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: -0.32,
        color: '#03919d'
    
    },
    prdName:{
        width: 190,
        height: 24,
        textOverflow:'ellipsis',
        overflow:'hidden',
      
        fontFamily: 'AppleSDGothicNeo',
        fontSize: 16,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: -0.43,
        color: '#1b2334'
    },
    prdSub:{
        width: 190,
        height:20,
        textOverflow:'ellipsis',
        overflow:'hidden',
        fontFamily: 'SFProText',
        fontSize: 13,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.54,
        letterSpacing: -0.35,
        color: '#323c51'
    },
}));

let CardTop = ({value}) =>{
    const style = useStyles();
    const detailStyle = useDetailStyles();
    let imageUrl = `http://image.gsshop.com/image/${String(value[0]).substring(0, 2)}/${String(value[0]).substring(2, 4)}/${value[0]}${$(".nav-link.active").attr('id') === 'pc'? '_N1.jpg':'_B1.jpg'}`;
  
    return(
        <>
            <Box className={style.root} display="flex">
                <Box className = {style.leftBox}display="flex" flexDirection="row-reverse">
                    <img src = {imageUrl} className={style.imgBox}></img> 
                </Box>
                <Box className = {style.rightBox}>
                    <Box className={detailStyle.prdCode}>상품코드: {value[0]}</Box>
                    <Box className={detailStyle.compName}>{value[1]}</Box>
                    <Box className={detailStyle.prdName}>{value[2]}</Box>
                    <Box className={detailStyle.prdSub}>{value[3]}</Box>
                </Box>
            </Box>
        </>
    );

}
export default CardTop;