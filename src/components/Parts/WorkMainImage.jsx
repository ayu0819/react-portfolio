import React from 'react';


const MainImage = (props) => {
    return(
 <div className="bg bg__gray">
<img src={props.image} alt={props.alt}/>
 </div>
    )
}
export default MainImage;