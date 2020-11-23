import React from 'react';
import Card from '../Parts/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import article_banner_1 from '../../assets/img/src/article_banner_1.jpg';
import article_banner_2 from '../../assets/img/src/article_banner_2.jpg';
const Blog = () => {
    const cardList = [
      {
        image: article_banner_1,
        name: 'Design rule My portfolio',
        description: 'ポートフォリオ作成の作業記事',
        label: 'Development',
        icon: <FontAwesomeIcon icon={faStickyNote} className="icon__colour" />,
        link: 'https://yumetane.blogspot.com/2020/11/design-rule-my-portfolio.html',
        blank: 'blank',
        day: '2020/11/05'
      },
      {
        image: article_banner_2,
        name: 'my portfolio Wireframe',
        description: 'ポートフォリオ作成の作業記事',
        label: 'Development',
        icon: <FontAwesomeIcon icon={faStickyNote} className="icon__colour" />,
        link: 'https://yumetane.blogspot.com/2020/10/wireframe-creation-for-my-portfolio.html',
        blank: 'blank',
        day: '2020/10/12'
      }
      ]
return(
    <div className="bg bg__card bg__white common">
    <h3>Development blog</h3>
    <div className="card__flex">
    {cardList.map((cardItem,workCard)=>{
    return(
      <Card
      key={workCard}
      image = {cardItem.image}
      name = {cardItem.name}
      description = {cardItem.description}
      label = {cardItem.label}
      icon = {cardItem.icon}
      day = {cardItem.day}
      link = {cardItem.link}
      blank = {cardItem.blank}
      />
    )
    })}
    </div>
</div>
)
}
export default Blog;