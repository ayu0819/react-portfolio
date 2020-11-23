import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const SkillButton = (props) => {
  const useStyles = makeStyles({
    text: {
    margin: '0px',
    padding: '0 5px',
    color: '#fff'
    }
  });
  const classes = useStyles();
    return(
   <div className={props.style}>
 <p className={classes.text}>{props.text}</p>
   </div>
    );
}
export default SkillButton;