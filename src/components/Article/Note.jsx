import React from 'react';
import Card from '../Parts/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote } from "@fortawesome/free-regular-svg-icons";
import article_banner_3 from '../../assets/img/src/article_banner_3.jpg';
const Note = () => {
    const cardList = [
      {
        image: article_banner_3,
        name: 'Recommended web design',
        description: '参考になるwebデザインを紹介',
        label: 'Note',
        icon: <FontAwesomeIcon icon={faStickyNote} className="icon__colour" />,
        link: 'https://note.com/ayu0819/n/na66a0f7535ca?magazine_key=m01e37ae92629',
        blank: 'blank',
        day: '2020/10/02'
      }
    ]
return(
    <div className="bg bg__card bg__gray common">
    <h3>Note</h3>
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
export default Note;