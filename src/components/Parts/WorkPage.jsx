import React from 'react';


const Page = (props) => {
    
    
    return(
 <div className="page__flex">
<img src={props.image} alt={props.alt}/>
    <p>{props.text}</p>
 </div>
    )
}
export default Page;