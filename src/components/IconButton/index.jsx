import React from 'react';
import IconButton from '@material-ui/core/IconButton';

let ImageButton = ({path}) =>{
    
    return(
        <IconButton>
            <img src = {path}></img>
        </IconButton>
    );
}

export default ImageButton;

