import React from 'react';
import Logo from './logo';
import {AppBar, Toolbar, Typography, Link, IconButton} from '@material-ui/core';
import { createMuiTheme, ThemeProvider,makeStyles  } from '@material-ui/core/styles';
import SearchBar from './SearchContents/searchBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import thumbImg from '../../media/topBarImages/thumbnail.png';
import bellImg from '../../media/topBarImages/bell.png';
import pencilImg from '../../media/topBarImages/pencil.png';
import { borderRadius } from '@material-ui/system';
import './barPrimaryOption.css';

const useStyle = makeStyles(theme =>({
    root:{
        width:'48%',
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    main:{
        background:'#ffffff',
    },
    todolistBtn:{
        font: 'SFProText',
        color: '#323c51',
        fontSize: 14,
    },
    qnaBtn:{
        background:'#0062ff',
        borderRadius:4,
        marginLeft:8,
        font: 'SFProText',
        fontSize: 14,
        color: 'white'
    },
    bellBtn:{
        width:48,
        height:48,
        marginLeft:11,
        padding: theme.spacing(0, 0),
        alignItems:"center"
    },
    thumbBtn:{
        width:48,
        height:48,
        padding: theme.spacing(0, 0),
        marginLeft:8,
        alignItems:"center"
    }
}));

let TopBar = () =>{
  //  let backGroundColor = backTheme.primary.main;
    let style = useStyle();

    return(
        // <ThemeProvider theme={backTheme}>
            <AppBar className="AppBar">
                <Box color={style.main.background}>
                <Toolbar> 
                    <Logo/>
                    <SearchBar/>
                    {/* className={style.root} */}
                    <Box display="flex" flexDirection="row-reverse" className={style.root}>
                        <IconButton className={style.thumbBtn}> <img src={thumbImg}></img></IconButton>
                        <IconButton className={style.bellBtn}> <img src={bellImg}></img></IconButton>        
                        <Button className={style.qnaBtn}> <img src={pencilImg}></img> 문의/개선사항 접수 </Button>
                        <Button className={style.todolistBtn}> 배포 및 To Do List </Button>
                    
                        {/* 버튼 크기 조정필요할때는 IconButton 사용 -> 그냥 버튼으로는 아무 소용없음. */}
                    </Box>
                </Toolbar>
                </Box>
            </AppBar>
        // </ThemeProvider>
    );
}

export default TopBar;