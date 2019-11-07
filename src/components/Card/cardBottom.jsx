import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import warnIcon from '../../media/cardImages/warningIcon.png';

const useStyles =makeStyles(theme =>({
    root:{
        width: 326,
        height: 40,
    },
    imgCss:{
        width:16,
        height:16
    },
    leftBox:{
        width:163,
        height:40,
        paddingTop:5,
        paddingLeft:20,
        fontFamily: 'AppleSDGothicNeo',
        fontSize: 12,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: -0.32,
        color: '#1b2334'
    },
    rightBox:{
        width:163,
        height:40,
        
        paddingTop:5,
        paddingRight:20,
        fontFamily: 'SFProText',
        fontSize: 12,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.33,
        letterSpacing: -0.32,
        color: '#0269e6'
    },
}));

let CardBottom = () =>{
    const style =useStyles();
    return(     //경고문 배치 예정
        <>
            <Box display='flex' className={style.root}>
                <Box display='flex' flexDirection="row" className={style.leftBox}>
                    <img src={warnIcon} className={style.imgCss}></img>
                     &nbsp;일부 속성 품절
                </Box>
                <Box display='flex' flexDirection="row-reverse" className={style.rightBox}>
                    <a href="#"> 연락하기 </a>
                </Box>
            </Box>
        </>
   
    );
}

export default CardBottom;