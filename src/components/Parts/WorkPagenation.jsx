import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


const Pagenation = (props) => {
    const useStyles = makeStyles({
        style: {
          color: '#4B4B4B',
          fontSize: "20px",
          padding: '15px',
          display: 'inline-block'
        },
        icon: {
           padding: '0 10px'
          }
      });
        
      const classes = useStyles();
   
   
    
    return(
 <div className="bg bg__white">
<p className={classes.style}><a href={props.linkPre} className={props.stylePre}><FontAwesomeIcon className={classes.icon} icon={faAngleLeft} />Prev</a>　　　<a href={props.linkNext} className={props.styleNext}>Next<FontAwesomeIcon className={classes.icon} icon={faAngleRight} /></a></p>
 </div>
    )
}
export default Pagenation;