import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';



import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
      width:304,
      height:490,
      boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
      backgroundColor: "#ffffff",
      marginRight:24,
      marginBottom:32
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
    
        </Card>
    )
}

export default ProductCard;