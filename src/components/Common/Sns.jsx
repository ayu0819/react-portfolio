import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
const Sns = () => {  
  const useStyles = makeStyles({
    twitter: {
      color: '#55acee',
      padding: 20,
      fontSize: "50px"
    },
    facebook: {
        color: '#3B5998',
        padding: 20,
        fontSize: "50px"
      },
      linkedin: {
        color: '#0e76a8',
        padding: 20,
        fontSize: "50px"
      }
  });
  const classes = useStyles();
return(
    <div className="sns bg bg__gray">
<a href="https://www.facebook.com/profile.php?id=100052019135608" target="blank"><FontAwesomeIcon className={classes.facebook} icon={faFacebook} /></a>
<a href="https://twitter.com/0819_tateishi" target="blank"><FontAwesomeIcon className={classes.twitter} icon={faTwitter} /></a>
<a href="https://www.linkedin.com/in/ayu-tateishi-0a74891b1/" target="blank"><FontAwesomeIcon className={classes.linkedin} icon={faLinkedin} /></a>
</div>
)
}
export default Sns;