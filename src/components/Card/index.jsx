import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from'@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardTop from './cardTop';
import CardMiddle from './cardMiddle';
import CardBottom from './cardBottom';


const useStyles = makeStyles(theme => ({
    card: {
      width:326,
      height:490,
      boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
      backgroundColor: "#ffffff",
      marginTop: 28,
      marginLeft: 12,
      marginRight:12
    },
    divider:{
      width: 326,
      height:16,
      alignItems:"center"
    },
    line:{
      width: 326,
      height:1,
      backgroundColor: 'rgba(27, 35, 52, 0.08)'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
}));
  
let ProductCard = ({value}) =>{

    let style = useStyles();
                 
    let topData = [value.prd_cd, value.sup_nm, value.prd_nm, value.ec_expos_prd_nm];
    let middleData = [value.prd_sale_prc,
      value.sup_giv_amt,
      value.margn_rt,
      value.tot_ord_qty,
      value.tot_ord_amt,
      value.net_ord_amt,
      value.expct_sal_amt,
      value.daily_uv,
      value.daily_cr
    ];
    console.log(topData);

    return(
        <Card className={style.card}>
            <div className={style.divider}/>
            <CardTop key={value.prd_cd} value={topData}/>

            <Box display="flex" className={style.divider}>
              <div className={style.line}></div>
            </Box>
            
            <CardMiddle key={value.prd_sale_prc} value={middleData}/>
            <Box display="flex" className={style.divider}>
              <div className={style.line}></div>
            </Box>

            <CardBottom/>
        </Card>
    )
}

export default ProductCard;