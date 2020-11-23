import React from 'react';
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css'
import { makeStyles } from '@material-ui/core/styles';
import hobby_image_coding from '../../assets/img/src/hobby_image_coding.jpg';
import hobby_image_roadbike from '../../assets/img/src/hobby_image_roadbike.jpg';
import hobby_image_walking from '../../assets/img/src/hobby_image_walking.jpg';
const Slider = (props) => {
  const useStyles = makeStyles({
    card: {
    backgroundColor: '#fff',
    margin: '10px',
    padding: '20px',
    borderRadius: '20px',
    maxWidth: '400px'
    },
    img: {
    width: '100%'
    }
  });
const classes = useStyles();
      const params = {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 0,
          }
        }
      }
     return(
<div className="bg bg__gray">
<Swiper {...params}>
  <div className={classes.card}>
   <img className={classes.img} src={hobby_image_roadbike} alt="ロードバイク"/>
   <p>ロードバイク</p>
  </div>
  <div className={classes.card}>
   <img className={classes.img} src={hobby_image_coding} alt="サイト作成"/>
   <p>サイト作成</p>
  </div>
  <div className={classes.card}>
   <img className={classes.img} src={hobby_image_walking} alt="散歩"/>
   <p>散歩</p>
  </div>
</Swiper>
</div>   
     )
};
export default Slider

