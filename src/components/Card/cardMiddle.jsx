import React from 'react';
import {formatNumber} from './api';
import {makeStyles, withStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme =>({
    root:{
        width: 326,
        height: 308,
        padding:0
    },
    upperLeftBox:{
        width: 163,
        height: 48,
        fontFamily: 'AppleSDGothicNeo',
        fontSize: 16,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle:'normal',
        paddingLeft:20,
        paddingTop:12,
        lineHeight: 1.63,
        letterSpacing: -0.43,
        color: '#1b2334'   
   
    },
    upperRightBox:{
        width: 163,
        height: 48,
        fontFamily: 'SFProText',
        fontSize: 16,
        fontWeight: 600,
        paddingRight:20,
        paddingTop:12,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.63,
        letterSpacing: -0.38,
        color: '#1b2334'   
    },
    marginDiv:{
        marginTop:12
    },
    divider:{
        width: 286,
        height: 1,
        marginLeft:20,
        backgroundColor: 'rgba(27, 35, 52, 0.08)',
    },
    cell:{
        width: 163,
        height: 64,
    },
    cellUpper:{
        paddingLeft:20,
        fontFamily: 'AppleSDGothicNeo',
        fontSize: 13,
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle:'normal',
        lineHeight: 1.54,
        letterSpacing: -0.35,
        color: 'rgba(50, 60, 81, 0.6)',
    },
    cellBottom:{
        fontFamily: 'SFProText',
        fontSize: 14,
        paddingTop:5,
        paddingLeft:20,
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.43,
        letterSpacing: -0.37,
        color: '#1b2334'   
    },

}));

let CardMiddle = ({value}) =>{
    const style = useStyles();

    return(     //테이블 배치 예정
        <Container display="flex" className={style.root}>
            <Box display="flex">
                <Box display="flex" flexDirection="row" className={style.upperLeftBox}>판매가</Box>
                <Box display="flex" flexDirection="row-reverse"className={style.upperRightBox}>{formatNumber(value[0])}원</Box>
            </Box>
            <Box className={style.divider}></Box>

            <Box className={style.marginDiv}>
                <Box display="flex">
                    <Box className={style.cell}>
                        <Box className={style.cellUpper}>업체지급액</Box>
                        <Box className={style.cellBottom}>{formatNumber(value[1])}원</Box>
                    </Box>
                    <Box className={style.cell}>
                        <Box className={style.cellUpper}>마진율</Box>
                        <Box className={style.cellBottom}>{Math.round(value[2]*1e2)}%</Box>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box className={style.cell}>
                        <Box className={style.cellUpper}>주문수량</Box>
                        <Box className={style.cellBottom}>{formatNumber(value[3])}개</Box>
                    </Box>
                    <Box className={style.cell}>
                        <Box className={style.cellUpper}>총주문금액</Box>
                        <Box className={style.cellBottom}>{formatNumber(value[4])}원</Box>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box className={style.cell}>    
                        <Box className={style.cellUpper}>순주문금액</Box>
                        <Box className={style.cellBottom}>{formatNumber(value[5])}원</Box>
                    </Box>
                    <Box className={style.cell}>
                        <Box className={style.cellUpper}>예상취급액</Box>
                        <Box className={style.cellBottom}>{formatNumber(value[6])}원</Box>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box className={style.cell}>
                       <Box className={style.cellUpper}>누적UV</Box>
                        <Box className={style.cellBottom}>{formatNumber(value[7])}</Box>
                    </Box>
                    <Box className={style.cell}>
                        <Box className={style.cellUpper}>누적CR</Box>
                        <Box className={style.cellBottom}>{formatNumber(value[8])}%</Box>
                    </Box>
                </Box>
                </Box>
        </Container>
   );

}
export default CardMiddle;