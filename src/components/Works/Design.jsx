import React from 'react';
import Card from '../Parts/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import work_bannerTop from '../../assets/img/src/work_bannerTop.jpg';
import work_goto from '../../assets/img/src/work_goto.jpg';
import work_portfolioDesign from '../../assets/img/src/work_portfolioDesign.jpg';
const Design = () => {
    const cardList1 = [
      {
        name: 'My Portfolio',
        image: work_portfolioDesign,
        description: 'サイトに使用したデザイン概要',
        label: 'XD',
        icon: <FontAwesomeIcon icon={faPencilRuler} className="icon__colour" />,
        link: '/Work/PortfolioDesign',
        blank: '',
        day: '2020/11/23'
      },
      {
        name: 'Go to App',
        image: work_goto,
        description: 'ローカルペイアプリのデザイン',
        label: 'Photoshop',
        icon: <FontAwesomeIcon icon={faPencilRuler} className="icon__colour" />,
        link: '/Work/Goto',
        blank: '',
        day: '2020/08/10'
      },
      {
        name: 'Banners',
        image: work_bannerTop,
        description: 'コンテンツ記事のバナー',
        label: 'Photoshop',
        icon: <FontAwesomeIcon icon={faPencilRuler} className="icon__colour" />,
        link: '/Work/Banners',
        blank: '',
        day: ''
  
      }
      ]
return(
    <div className="bg bg__card bg__gray common">
    <h3>Design</h3>
    <div className="card__flex">
    {cardList1.map((cardItem,workCard)=>{
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
</div>
)
}
export default Design;