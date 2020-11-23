import React from 'react';
import Main from '../Common/Main';
import {Web, Design} from './index'
const Works = () => {
    const mainItem = 
    {
      text: 'Works'
    }
    return(
<div>
<Main 
      text = {mainItem.text}
      />
<Web />
<Design />
</div>
    )
}
export default Works;