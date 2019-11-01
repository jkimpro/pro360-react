import React from 'react'
import ProductCard from '../Card/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

let CardSet = ({}) => {
    let [data, ] = React.useState();

    return(
    <>
        <CssBaseline />
        <Container maxWidth="xl">
            <Grid
                container
                justify="flex-start"
                direction="row"
                alignItems="center"
            >
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </Grid>
        </Container>
    </>
    );
}

export default CardSet;