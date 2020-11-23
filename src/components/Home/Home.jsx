import React, { useEffect } from 'react';
import Main from '../Common/Main'
import {Log, Work, Article} from '../Home/index'
const Home = () => {
    const mainItem = 
    {
      text: 'Ayu Portfolio'
    }
    return(
<div>
<Main 
      text = {mainItem.text}
      />
      <Log />
      <Work />
      <Article />
</div>
    )
}
export default Home;