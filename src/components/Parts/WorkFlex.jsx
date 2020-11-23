import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from "aos";
import "aos/dist/aos.css"

const useStyles = makeStyles({
    style: {
     maxWidth: '100%',
     maxWidth: '300px !important',
     margin: '0.7em'
    }
  });

  

const WorkFlex = (props) => {
    useEffect(()=> {
        Aos.init({duration: 500});
       },[])
    const classes = useStyles();
    return(
 <div>
  <img data-aos="fade-up" className={classes.style} src={props.image} alt={props.alt} />
 </div>
    )
}
export default WorkFlex;