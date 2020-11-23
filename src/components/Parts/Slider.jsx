import React, {useState} from 'react';
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css'
import HobbyCard from './HobbyCard';
const Slider = (props) => {
    const hobbyCardList = [
        {
          name: 'Smple',
          image: 'https://school.dhw.co.jp/images/course/cgvfx/top/ootake_01.jpg',
          text: 'サンプルです1'
        },
        {
          name: 'Smple',
          image: 'https://school.dhw.co.jp/images/course/cgvfx/top/ootake_01.jpg',
          text: 'サンプルです2'
        },
        {
          name: 'Smple',
          image: 'https://school.dhw.co.jp/images/course/cgvfx/top/ootake_01.jpg',
          text: 'サンプルです3'
        }
      ]
      const [params] = React.useState({
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
    })
     return(    
       <div>
         <Swiper {...params}>
         <div className="card__flex">
            {hobbyCardList.map((hobbyCardItem,hobbyCard)=>{
            return(
              <HobbyCard
              key={hobbyCard}
              image = {hobbyCardItem.image}
              name = {hobbyCardItem.name}
              text = {hobbyCardItem.text}
              />
            )
            })}
            </div>
         </Swiper>
       </div>
     )
};
export default Slider;