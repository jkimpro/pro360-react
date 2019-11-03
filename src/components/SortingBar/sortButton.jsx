import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles(theme => ({
  root: {
    width:'auto',
    height: 'auto',
    minWidth: 0,
    margin:0,
    color: '#323c51',
    boxShadow: 'none',
    fontFamily: 'SFProText',
    fontSize: 14,
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: -0.37,
    textAlign: 'center',
    backgroundColor: '#eef1f7',
    borderRadius: 16,
    '&:hover': {
        color: '#323c51',
        backgroundColor: '#eef1f7',
    },
    '&:active':{
        color:'#0269e6',
        backgroundColor:'#ffffff',
    },
    '&:focus': {
        color:'#0269e6',
        backgroundColor:'#ffffff',
      },
  },
}))(Button);


const useStyles = makeStyles(theme => ({
  margin: {
    marginRight: 8,
    marginBottom: 2,
},
}));

let SortButton = ({optionName}) => {
  const classes = useStyles();
  
  return (
    
      <ColorButton variant="contained" className={classes.margin}>
        {optionName}
      </ColorButton>
  );
}
export default SortButton