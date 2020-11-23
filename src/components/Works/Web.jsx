import React from 'react';
import Card from '../Parts/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import work_portfolio from '../../assets/img/src/work_portfolio.jpg';
import work_school from '../../assets/img/src/work_school.jpg';
import work_massageApp from '../../assets/img/src/work_massageApp.jpg';
import work_tamari from '../../assets/img/src/work_tamari.jpg';
const Web = () => {
    const cardList1 = [
      {
        image: work_portfolio,
        description: '私のポートフォリオサイト',
        name: 'My Portfolio',
        label: 'React',
        icon: <FontAwesomeIcon icon={faLaptopCode} className="icon__colour" />,
        link: '/Work/Portfolio',
        blank: '',
        day: '2020/11/23'
      },
      {
        image: work_school,
        description: 'コーディングスクールをテーマに作成したLP',
        name: 'Coding School',
        label: 'React',
        icon: <FontAwesomeIcon icon={faLaptopCode} className="icon__colour" />,
        link: '/Work/CodingSchool',
        blank: '',
        day: '2020/05/10'

      },
      {
        image: work_massageApp,
        description: 'メッセージwebアプリとLPページ',
        name: 'Message App',
        label: 'Ruby on Rails',
        icon: <FontAwesomeIcon icon={faLaptopCode} className="icon__colour" />,
        link: '/Work/Message',
        blank: '',
        day: '2020/07/18'
      }
      ]
return(
    <div className="bg bg__card bg__white common">
    <h3>Web</h3>
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
export default Web;