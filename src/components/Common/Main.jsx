import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  text: {
         [theme.breakpoints.down('sm')]: {
          
          fontSize: '10vw',
          color: '#fff',
         },
         [theme.breakpoints.up('sm')]: {
          
          fontSize: '4em',
          color: '#fff',
         }, 
  },
}));
const Main = (props) => {
  const classes = useStyles();
return(
<main id="top">
       <div className="commonContents">
         <h2 className={classes.text}>{props.text}</h2>
         </div>
</main>
)
}
export default Main;