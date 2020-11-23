import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import { makeStyles } from '@material-ui/core/styles';
const WorkOverView = (props) => {
    const useStyles = makeStyles({
        title: {
          color: '#0084BE',
          display: 'inline'
        }
    });
      
    const classes = useStyles();
    useEffect(()=> {
        Aos.init({duration: 2000});
       },[])
    return(
   <div className="bg bg__gray">
       <img data-aos="fade-up" src={props.image} alt={props.alt}/>
       <h3 className={classes.title}>Over View</h3>
    <p>{props.text}</p>
   </div>
        )
}
export default WorkOverView;


