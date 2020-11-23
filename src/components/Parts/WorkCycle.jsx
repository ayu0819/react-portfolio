import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Aos from "aos";
import "aos/dist/aos.css"

const useStyles = makeStyles((theme) => ({
  icon: {
    [theme.breakpoints.down('sm')]: {
      padding: '16px',
      fontSize: "30px",
      margin: '0',
      position: 'absolute',
           top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%)'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '16px',
      fontSize: "30px",
      margin: '0',
      position: 'absolute',
           top: '50%',
           left: '50%',
           transform: 'translate(-50%, -50%)'
    },

},
  cycle: {
         [theme.breakpoints.down('sm')]: {
          boxShadow: '0 0 30px rgba(43,43,43,.2)',  
          width: '60px',
           height: '60px',
           margin: '0 10px',
           borderRadius: '50%',
         },
         [theme.breakpoints.up('sm')]: {
          boxShadow: '0 0 30px rgba(43,43,43,.2)',  
          width: '60px',
           height: '60px',
           margin: '10px',
           borderRadius: '50%',
         }, 
  },
}));




const Cycle = (props) => {
  useEffect(()=> {
    Aos.init({duration: 2000});
   },[])

  const classes = useStyles();
  
    return(
     <div data-aos="fade-up">
         <a href={props.link} target="blank">
         <div className={props.style + " " + classes.cycle}>
         <p className={classes.icon}>{props.icon}</p>
         </div>
         </a>
     </div>


    );
}

export default Cycle;


