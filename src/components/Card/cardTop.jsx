import React from 'react';
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

const useDetailStyles = makeStyles(theeme=>({
    prdCode:{
        width: '100%',
    
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
        width: '100%',
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
        width: '100%',
    
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
        width: '100%',
    
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


let CardTop = ({data}) =>{
    const style = useStyles();
    const detailStyle = useDetailStyles();

    //data에서 분리할 것
    let prd_code = "34181899";
    let comp_name = "올리비아비  / 주식회사 세정글로벌";
    let prd_name = "[몬테밀라노] 몬테밀라노";
    let prd_sub = "[OLIVIA.B] 레인 드롭 후드...";

    return(
        <>
            <Box className={style.root} display="flex">
                <Box className = {style.leftBox}display="flex" flexDirection="row-reverse">
                    <img src = {SampleImg} className={style.imgBox}></img> 
                </Box>
                <Box className = {style.rightBox}>
                    <Box className={detailStyle.prdCode}>상품코드: {prd_code}</Box>
                    <Box className={detailStyle.compName}>{comp_name}</Box>
                    <Box className={detailStyle.prdName}>{prd_name}</Box>
                    <Box className={detailStyle.prdSub}>{prd_sub}</Box>
                </Box>
            </Box>
        </>
    );

}
export default CardTop;