import React from 'react';
import WorkMainImage from './WorkMainImage';



const MainPage = (props) => {

  
    const mainImage = 
    {
    image: 'https://school.dhw.co.jp/images/course/cgvfx/top/ootake_01.jpg',
      text: 'Article'
    }
    
    return(
  <div className="bg bg__gray">
<WorkMainImage 
  image = {props.image}
  alt = {mainImage.text}
/>

<h3>Over View</h3>
    <p>{props.text}</p>
</div>

    );
}

export default MainPage;


