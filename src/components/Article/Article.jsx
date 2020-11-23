import React from 'react';
import Main from '../Common/Main';
import {Blog, Note} from './index'
const Article = () => {
    const mainItem = 
    {
      text: 'Article'
    }
    return(
<div>
<Main 
      text = {mainItem.text}
      />
      <Blog />
      <Note />
</div>
    )
}
export default Article;