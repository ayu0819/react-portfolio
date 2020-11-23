import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Aos from "aos";
import "aos/dist/aos.css"
const useStyles = makeStyles((theme) => ({
  root: {
         [theme.breakpoints.down('sm')]: {
          width: '80vw',
          margin: '10px',
          textAlign: 'left'
         },
         [theme.breakpoints.up('sm')]: {
          width: '20em',
          minWidth: '220px',
          margin: '0.5em',
          textAlign: 'left'
         }, 
  },
  day: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0vw',
      margin: '0 !important'
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '10px',
      margin: '0 !important'
    }, 
},
  media: {
    [theme.breakpoints.down('sm')]: {
      height: 250,
        width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      height: 220,

    }, 
},
chip: {
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left',
    color: '#ccc',
    fontSize: '15px',
    backgroundColor: ' transparent',
    padding: '1.5em 0 1em 0'
  },
  [theme.breakpoints.up('sm')]: {
    textAlign: 'left',
    color: '#ccc',
        fontSize: '15px',
        backgroundColor: ' transparent',
        padding: '1.5em 0 1em 0'
  }, 
},
name: {
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  },
  [theme.breakpoints.up('sm')]: {
    textAlign: 'center'
  }, 
},
description: {
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  },
  [theme.breakpoints.up('sm')]: {
    textAlign: 'center'
  }, 
},
}));

const Cards = (props) => {
  useEffect(()=> {
    Aos.init({duration: 2000});
   },[])
    const classes = useStyles();
    return (
      <div>
        <a href={props.link} target={props.blank}>
    <Card className={classes.root} data-aos="fade-up">
      <CardActionArea>

      <CardMedia
          className={classes.media}
          image={props.image}
        />
          <CardContent>
<Typography gutterBottom variant="h5" component="h2" className={classes.name}>
{props.name}
</Typography>
<Typography variant="body2" color="textSecondary" component="p" className={classes.description}>{props.description}
</Typography>
 <p className={classes.day}><small>{props.day}</small></p>
<Chip
icon={props.icon}
 size="small"
label={props.label}
className={classes.chip}
/>
          </CardContent>
          </CardActionArea>
    </Card>
    </a>
      </div>
    );
  }


export default Cards;