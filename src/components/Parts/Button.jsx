import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
       btn: {
              [theme.breakpoints.down('sm')]: {
                     width: '40vw',
                     boxShadow: '0 0 30px rgba(43,43,43,.2)',
                margin: '0 auto',
                borderRadius: '30px',
                textAlign: 'center',
                transitionDuration: '0.6s',
                marginTop: '20px',
                '&:hover': {
                     transform: "scale(1.1)",
                     transitionDuration: '0.6s',
                  },
                
              },
              [theme.breakpoints.up('sm')]: {
                     width: '300px',
                     maxWidth: '200px',
                     boxShadow: '0 0 30px rgba(43,43,43,.2)',
                     margin: '0 auto',
                     borderRadius: '30px',
                     textAlign: 'center',
                     transitionDuration: '0.6s',
                     marginTop: '2em',
                     '&:hover': {
                            transform: "scale(1.1)",
                            transitionDuration: '0.6s'
                         },
              }, 
       },
       
       btnText: {
              [theme.breakpoints.down('sm')]: {
              color: '#fff',
              fontSize: '3.5vw',
              padding: '0.8em',
              margin: '0',
              display: 'inline-block'
              },
              [theme.breakpoints.up('sm')]: {
                     color: '#fff',
                     fontSize: '22px',
                     padding: '0.8em',
                     margin: '0',
                     display: 'inline-block'
              },
       },
       blue: {
              [theme.breakpoints.down('sm')]: {
                     background: 'linear-gradient(#6FE5F5, #1CD2F5)'
              },
              [theme.breakpoints.up('sm')]: {
                     background: 'linear-gradient(#6FE5F5, #1CD2F5)'
              },
       },
}));





const ButtonItem = (props) => {
       const classes = useStyles();
     
           

return(
       <a href={props.link}>
       <div className={classes.btn + " " + classes.blue}>
        <p className={classes.btnText}>{props.text}</p>
         </div>
         </a>
)
}

export default ButtonItem;