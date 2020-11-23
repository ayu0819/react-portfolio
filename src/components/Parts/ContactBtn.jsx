import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const useStyles = makeStyles((theme) => ({
  btn: {
         [theme.breakpoints.down('sm')]: {
          borderRadius: '60px',
          color:  '#0084BE',
          borderColor: '#0084BE',
          '&:hover': {
            color: '#0084BE',
            border: '#0084BE'
         },
         },
         [theme.breakpoints.up('sm')]: {
          borderRadius: '60px',
          color:  '#0084BE',
          borderColor: '#0084BE',
          '&:hover': {
            color: '#0084BE',
            borderColor: '#0084BE'
         },
         }, 
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      color: '#55acee',
      padding: '10px',
      fontSize: "20px",
      color:  '#0084BE',
      width: '20vw',
    },
    [theme.breakpoints.up('sm')]: {
      color: '#55acee',
      padding: '10px',
      fontSize: "20px",
      color:  '#0084BE',
      width: '20vw',
    }, 
},
}));
const ContactBtn = () => {
      const classes = useStyles();
    return(
    <>
<p><a href="/Contact"><FontAwesomeIcon className={classes.icon} icon={faEnvelope} /></a></p>
    </>
    )
}
export default ContactBtn;