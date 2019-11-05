import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from'@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardTop from './cardTop';
import CardMiddle from './cardMiddle';
import CardBottom from './cardBottom';



import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
      width:326,
      height:490,
      boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
      backgroundColor: "#ffffff",
      marginTop: 15,
      marginRight:24
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
  
let ProductCard = ({isMoblie}) =>{

    let style = useStyles();
    return(
        <Card className={style.card}>
            <div className={style.divider}/>

            <CardTop/>
            
            <Box display="flex" className={style.divider}>
              <div className={style.line}></div>
            </Box>

            <CardMiddle/>
            <Box display="flex" className={style.divider}>
              <div className={style.line}></div>
            </Box>

            <CardBottom/>
        </Card>
    )
}

export default ProductCard;