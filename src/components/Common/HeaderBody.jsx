import React from 'react';
import Logo from '../../assets/img/src/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from '../../Routes';
import ContactBtn from '../Parts/ContactBtn';
const useStyles = makeStyles((theme) => ({
  logo: {
         [theme.breakpoints.down('sm')]: {
         
         },
         [theme.breakpoints.up('sm')]: {
          width: '130px'
         }, 
  },
  header: {
    [theme.breakpoints.down('sm')]: {
     display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      // padding: '0 10em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: '0.6s',
      fontWeight: '700px',
      textDecoration: 'none',
      // fontSize: '2vw',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      zIndex: '100000',
      flexWrap: 'wrap',
      backgroundColor: '#fff',
      boxShadow: '0px 3px 15px rgba(0,0,0,0.2)'
    }, 
},
logoStyle: {
  [theme.breakpoints.down('sm')]: {
    margin : '0 auto',
   padding: '10px 0 0 0 !important',
  },
  [theme.breakpoints.up('sm')]: {
    paddingLeft: '3.5em',
  }, 
},
}));
const HeaderBody = () => {
  const classes = useStyles();
    return(
        <BrowserRouter>
    <header className={classes.header}>
    <h1 className={classes.logoStyle}><Link to='/'><img className={classes.logo} src={Logo} alt="portfolio"/></Link></h1>
     <ul className="nav-links nav-ul" id="nav-ul">
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Works'>Works</Link></li>
            <li><Link to='/Article'>Article</Link></li>
            <li><ContactBtn /></li>
          </ul>
   </header>
          <Routes/>
      </BrowserRouter>
    )
}
export default HeaderBody;