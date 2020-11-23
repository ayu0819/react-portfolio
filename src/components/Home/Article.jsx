import React from 'react';
import {Button, Card} from '../Parts/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import article_banner_1 from '../../assets/img/src/article_banner_1.jpg';
import article_banner_2 from '../../assets/img/src/article_banner_2.jpg';
import article_banner_3 from '../../assets/img/src/article_banner_3.jpg';
const Article = () => {
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
      image: article_banner_3,
      name: 'Recommended web design',
      description: '参考になるwebデザインを紹介',
      label: 'note',
      icon: <FontAwesomeIcon icon={faStickyNote} className="icon__colour" />,
      link: 'https://note.com/ayu0819/m/m01e37ae92629',
      blank: 'blank',
      day: '2020/10/02'

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
    const buttonItem = 
    {
      text: 'More Article',
      link: '/Article'
    }
    return(
        <div className="bg bg__card bg__white common">
            <h3>About Article</h3>
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
              link = {cardItem.link}
              blank = {cardItem.blank}
              day = {cardItem.day}
              />
            )
            })}
            </div>
            <Button
      text = {buttonItem.text}
      link = {buttonItem.link}
      />
        </div>
    )
}
export default Article;