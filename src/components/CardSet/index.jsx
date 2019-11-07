import React from 'react';
import ProductCard from '../Card/index';
import {CardContext} from '../Provider/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


let CardSet = ({}) => {
    let [cardData, ] = React.useContext(CardContext);

    return(
        <>
        <Container maxWidth="xl">
            <Grid
                container
                justify="flex-start"
                direction="row"
                alignItems="center"
            >
            {
                cardData.map((element, index) =>(
                    <ProductCard key={index}
                     value={element}>
                     </ProductCard>
                ))
            }
            </Grid>
        </Container>
        </>
    );
}

export default CardSet;