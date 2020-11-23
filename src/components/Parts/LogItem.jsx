import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  day: {
         [theme.breakpoints.down('sm')]: {
          padding: 30,
          fontSize:'2.5vw',
         },
         [theme.breakpoints.up('sm')]: {
          padding: 30,
          fontSize: '15x',
         }, 
  },
  date: {
    [theme.breakpoints.down('sm')]: {
     fontSize:'3vw',
    },
    [theme.breakpoints.up('sm')]: {
     fontSize: '15px',
    }, 
},
}));
const LogItem = (props) => {
  const classes = useStyles();
    return (
        <div className="log__parts">
        <p><small className={classes.day}>{props.data}</small> <strong className={classes.date}>{props.text}</strong></p>
        
        </div>
    );
  }
export default LogItem;