import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHouseUser,faUser, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css"
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    'breakpoints': {
      'keys': [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
      ],
      'values': {
        xs: 0,
        sm: 780,
      },
    },
  })
const useStyles = makeStyles((theme) => ({
    icon: {
        [theme.breakpoints.down('sm')]: {
        fontSize: "6vw",
        padding: '0 1em 0.2em 1em',
        color: '#0084BE'
        }
 },
    Body: {
           [theme.breakpoints.down('sm')]: {
            backgroundColor: '#FAFAFA',
            borderRadius: '50px',
            width: '80%',
            boxShadow: '0 0 30px rgba(43,43,43,.2)',
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: '85%',
            left: '10%',
            transform: 'translate(-50%, -50%)',
            margin: '10px auto',
            zIndex: '999',
            padding: '0.8em 0'
           },
           [theme.breakpoints.up('sm')]: {
            display: 'none'
           }, 
    },
    text:{
     textAlign: 'center',
     margin: '0',
     color: '#0084BE'
    }
}));    
const MobileHeader = (props) => {
    useEffect(()=> {
        Aos.init({duration: 2000});
       },[])
    const classes = useStyles();
 return(
<div className={classes.Body} data-aos="fade-up">
<div>
<a href="/"><FontAwesomeIcon className={classes.icon} icon={faHouseUser} /></a>
<p className={classes.text}><small>Home</small></p>
</div>
<div>
<a href="/About"><FontAwesomeIcon className={classes.icon} icon={faUser} /></a>
<p className={classes.text}><small>About</small></p>
</div>
<div>
<a href="/Works"><FontAwesomeIcon className={classes.icon} icon={faLaptopCode} /></a>
<p className={classes.text}><small>Works</small></p>
</div>
<div>
<a href="/Contact"><FontAwesomeIcon className={classes.icon} icon={faEnvelope} /></a>
<p className={classes.text}><small>Contact</small></p>
</div>
</div>
 )   
}
export default MobileHeader;