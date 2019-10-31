import React, { Children } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import TopBar from '../TopBar/index';
import OptionBar from '../OptionBar/index';
import CardSet from '../CardSet/index';

//topBar
//optionBar
//cardSet
{/* <OptionBar/>
<CardSet/> 
<Container maxWidth="1000" css="padding:0px 0px; margin:0px 0px 0px 0px">
                    
*/}

let MainPage = () =>{
    return (
        <React.Fragment>
            <CssBaseline>
                <Typography component="div" style={{ backgroundColor: '#f7f9fc', height: '100vh' }} >
                    <TopBar/>
                    <OptionBar/>
                </Typography> 
            </CssBaseline>
        </React.Fragment>
    );
}

export default MainPage;