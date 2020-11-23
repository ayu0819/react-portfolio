import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const Cards = (props) => {
  const useStyles = makeStyles({
    card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '20px',
    maxWidth: '400px'
    },
    img: {
    width: '100%'
    }
  });
  const classes = useStyles();
    return (
<div className={classes.card}>
<img className={classes.img} src={props.img} alt={props.alt} />
<p>{props.text}</p>
</div>
    );
  }
export default Cards;