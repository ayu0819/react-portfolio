import React from 'react';
import MainImage from './MainImage';

const WorkTop = (props) => {

  const workImage = 
    {
    image: 'https://school.dhw.co.jp/images/course/cgvfx/top/ootake_01.jpg',
    alt: 'Article'
    }
    
    return(
 <div className="bg bg__gray">
<MainImage 
  image = {workImage.image}
  alt = {workImage.alt}
/>
 </div>
    )
}
export default WorkTop;