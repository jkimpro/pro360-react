import React from 'react';
import { Toolbar, IconButton} from '@material-ui/core';
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';


const AntTabs = withStyles({
    root: {
    },
    indicator: {
      backgroundColor: '#0062ff',
    },
  })(Tabs);

const AntTab = withStyles(theme => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: 600,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      lineHeight: 1.57,
      letterSpacing: -0.37,
      
      fontFamily: [
        'AppleSDGothicNeo',
      ].join(','),
      '&:hover': {
        color: 'rgba(50, 60, 81, 0.6)',
        opacity: 1,
        backgroundColor:'rgba(63, 66, 75, 0.06)'
      },
      '&$selected': {
        color: '#0269e6',
      },
      '&:focus': {
        color: '#0269e6',
      },
    },
    selected: {},
  }))(props => <Tab disableRipple {...props} />);

let a11yProps = (index) => {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
      color: '#0269e6',
    };
}

let ImgLookBar = () =>{
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <AntTabs 
          value={value}
          onChange={handleChange}
          aria-label="action tabs example"
          >
            <AntTab  label="기본 이미지 보기" {...a11yProps(0)} />
            <AntTab  label="모바일 배너로 보기" {...a11yProps(1)} />
        </AntTabs >
    )
}

export default ImgLookBar;