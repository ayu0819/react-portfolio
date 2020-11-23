import React from 'react';
import {Button,Card} from '../Parts/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import work_portfolio from '../../assets/img/src/work_portfolio.jpg';
import work_school from '../../assets/img/src/work_school.jpg';
import work_massageApp from '../../assets/img/src/work_massageApp.jpg';
const Work = () => {
  const cardList = [
    {
      image: work_portfolio,
      name: 'My Portfolio',
      description: '私のポートフォリオサイト',
      label: 'Design & Coding',
      icon: <FontAwesomeIcon icon={faLaptopCode} className="icon__colour" />,
      link: '/Work/Portfolio',
      day: '2020/11/23'
    },
    {
      image: work_school,
      name: 'Coding School',
      description: 'コーディングスクールをテーマに作成したLP',
      label: 'Design & Coding',
      icon: <FontAwesomeIcon icon={faLaptopCode} className="icon__colour" />,
      link: '/Work/CodingSchool',
      day: '2020/05/10'
    },
    {
      image: work_massageApp,
      name: 'Message App',
      description: 'メッセージwebアプリとLPページ',
      label: 'Design & Coding',
      icon: <FontAwesomeIcon icon={faLaptopCode} className="icon__colour" />,
      link: '/Work/Message',
      day: '2020/07/18'
    }
  ]
  const buttonItem = 
  {
    text: 'More Work',
    link: '/Works'
  }
    return(
        <div className="bg bg__card bg__gray common">
            <h3>About Work</h3>
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
export default Work