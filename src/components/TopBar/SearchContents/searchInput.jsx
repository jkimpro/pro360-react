import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import {makeStyles} from '@material-ui/core/styles';


const useStyle = makeStyles(theme => ({
    root: {
       // width:'auto',
        height:26,
        marginTop: 5,
        marginLeft: 5,
        // [theme.breakpoints.up('xs')]: {
        //     width: 100
                // },
        [theme.breakpoints.down('sm')]: {
            width: 200
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: 500
        },
        [theme.breakpoints.up('lg')]: {
            width: 800
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
