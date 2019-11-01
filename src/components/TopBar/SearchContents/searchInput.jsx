import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
    root: {
        height:26,
        [theme.breakpoints.up('xs')]: {
            width: 100
        },
        [theme.breakpoints.up('sm')]: {
            width: 200
        },
        [theme.breakpoints.up('md')]: {
            width: 500
        },
        [theme.breakpoints.up('lg')]: {
            width: 700
        },
    },
  }));

let SearchInput = () => {
    let inputStyle = useStyle();
    return (
            <InputBase
            className = {inputStyle.root}
            inputProps={{'aria-label':'naked'}}
            />
        );
}

export default SearchInput;
