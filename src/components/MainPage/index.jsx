import React, { Children } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import TopBar from '../TopBar/index';
import OptionBar from '../OptionBar/index';
import CardSet from '../CardSet/index';
import {CardProvider} from '../Provider/index';
import SortingBar from '../SortingBar';

let MainPage = () =>{
    return (
        <React.Fragment>
            <CssBaseline>
                <Typography component="div" style={{ backgroundColor: '#f7f9fc', height: '100vh' }} >
                    <CardProvider>
                        <TopBar/>
                        <OptionBar/>
                        <SortingBar/>
                        <CardSet/>
                    </CardProvider>
                </Typography> 
            </CssBaseline>
        </React.Fragment>
    );
}

export default MainPage;