import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from "aos";
import "aos/dist/aos.css"



const WorkOtherPage = (props) => {
  useEffect(()=> {
    Aos.init({duration: 2000});
   },[])

  const useStyles = makeStyles((theme) => ({
    text: {
           [theme.breakpoints.down('sm')]: {
            fontSize: '15px',
            textAlign: 'left',
           },
           [theme.breakpoints.up('sm')]: {
            fontSize: '15px',
            textAlign: 'left',
           }, 
    },
    style: {
           [theme.breakpoints.down('sm')]: {
            margin: '1.5em'
           },
           [theme.breakpoints.up('sm')]: {
            margin: '1.5em'
           },
    },
    items:{
      [theme.breakpoints.down('sm')]: {
        padding: '0 0.5em',
      width: '100%',
      maxWidth: '400px',
       },
       [theme.breakpoints.up('sm')]: {
       width: '100%',
       maxWidth: '400px',
       },
    },
    title: {
           [theme.breakpoints.down('sm')]: {
            fontSize: '23px',
           },
           [theme.breakpoints.up('sm')]: {
            fontSize: '23px',
           },
    },
}));
    
  const classes = useStyles();

    return(

<div className="page__flex" data-aos="fade-up">
<img src={props.image} alt={props.alt} className={classes.style}/>
<div className={classes.items}>
<p className={classes.title}><strong>{props.title}</strong></p>
<p className={classes.text}>{props.text}</p>
</div>
</div>

        )

}

export default WorkOtherPage;


