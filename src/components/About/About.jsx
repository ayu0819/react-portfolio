import React from 'react';
import Main from '../Common/Main';
import {Profile, Hobby, Skill} from './index';
const About = () => {
    const mainItem = 
    {
      text: 'About'
    }
    return(
<div>
<Main 
text = {mainItem.text}
      />
      <Profile />
      <Hobby />
      <Skill />
</div>
    )
}
export default About;