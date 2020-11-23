import React from 'react';
import { Link,animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
const Top = () => {
  const useStyles = makeStyles({
      facebook: {
          color: '#fff',
          fontSize: "30px",
          paddingLeft: '15px',
          cursor : 'pointer'
        },
        top: {
          fontSize: "25px",
          color:'#fff',
          cursor : 'pointer'
        },
  });
  const classes = useStyles();
  return(
   <div className="top">
      <Link 
    activeClass="active"
    to ="top"
    spy={true}
    smooth = {true}
    offset={-70}
    duration={500}
    ><span className={classes.top}>Top</span><FontAwesomeIcon className={classes.facebook} icon={faAngleUp} /></Link>
   </div>
  );
}
export default Top;