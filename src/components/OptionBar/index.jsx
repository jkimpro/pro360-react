import React from 'react';
import {AppBar, Toolbar, Typography, Link, IconButton} from '@material-ui/core';
import { createMuiTheme, ThemeProvider,makeStyles  } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { borderRadius } from '@material-ui/system';

const backTheme = createMuiTheme({
    primary: {
        main: '#ffffff',
        height: 56,
    }
})
let OptionBar = () =>{

    return(
        <ThemeProvider>
        <AppBar position="static">
            <Toolbar>   
                <Box>
                </Box>
                <Box>
                </Box>
            </Toolbar>
        </AppBar>
    </ThemeProvider>
    )
}

export default OptionBar