import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faSass, faReact } from "@fortawesome/free-brands-svg-icons";
import Main from '../Common/Main';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import { WorkCycle, WorkPagenation, WorkMainImage, WorkOtherPages, WorkOverView} from '../Parts/index';
import work_portfolio from '../../assets/img/src/work_portfolio.jpg';
import work_portfolio_top from '../../assets/img/src/work_portfolio_top.jpg';
import work_portfolio_about from '../../assets/img/src/work_portfolio_about.jpg';
import work_portfolio_works from '../../assets/img/src/work_portfolio_works.jpg';
import work_portfolio_article from '../../assets/img/src/work_portfolio_article.jpg';
import work_portfolio_form from '../../assets/img/src/work_portfolio_form.jpg';
import work_portfolio_work from '../../assets/img/src/work_portfolio_work.jpg';
import work_portfolio_log from '../../assets/img/src/work_portfolio_log.jpg';
const Message = () => {
  const useStyles = makeStyles({
    h3 : {
      margin: '0'
    },
    react: {
      color: '#52c1dd',
    },
    sass: {
      color: '#cd679a',
    },
    js: {
      color: '#d5bf00',
    },
    github:{
      color: '#171616',
    },
    desktop:{
      color: '#555',
    },
    cycleItem: {
      margin: '0 20px'
    },
    cycleFlex:{
      display: 'flex',
      justifyContent: 'center',
      margin: ' 1.5em',
    }
});
const classes = useStyles();
const mainItem = 
{
  text: 'Portfolio'
}
const workImage = 
{
image: work_portfolio,
alt: 'コーディングスクール'
}
const cycleColourList = [
  {
    icon: '',
    style: 'color__portfolio-1',
    link: ''
  },
  {
    icon: '',
    style: 'color__portfolio-2',
    link: ''
  },
  {
    icon: '',
    style: 'color__portfolio-3',
    link: ''
  }
]
const cycleIconList = [
  {
    icon: <FontAwesomeIcon className={classes.react} icon={faReact} />,
    style: 'color__icon',
    link: ''
  },
  {
    icon: <FontAwesomeIcon className={classes.js} icon={faJsSquare} />,
    style: 'color__icon',
    link: ''
  },
  {
    icon: <FontAwesomeIcon className={classes.sass} icon={faSass} />,
    style: 'color__icon',
    link: ''
  }
]
const cycleShowList = [
  {
    icon: <FontAwesomeIcon className={classes.github} icon={faGithub} />,
    style: 'color__icon',
    link: 'https://github.com/ayu0819/practice-coding_school'
  },
  {
    icon: <FontAwesomeIcon className={classes.desktop} icon={faDesktop} />,
    style: 'color__icon',
    link: 'https://elegant-bhaskara-0dee1d.netlify.app/'
  }
]
const overViewItem = {
  image: work_portfolio_top,
  alt: 'ポートフォリオTopページ',
  text: '私のポートフォリオサイトです。2020年8月に作成をしましたが、管理の都合上作り直しました。このサイトでは「私のプロフィール」「作品」「投稿記事」「メールフォーム」を掲載しています。また、制作は管理のし易さから「REACT」を使用しています。加えて「REACT用のJS」「Firebase」を使用してサイト機能を向上させています。また、この作品にはデザイン概要があります。「Works」のデザインに掲載しているのでご覧ください。',
  style: 'style__none'
}
  const otherList = [
    {
      title: 'アバウトページ',
      alt: 'アバウトページ',
      image: work_portfolio_about,
      text: '私の「趣味・スキル・資格」を掲載しています。また、REACTフレームワークである「Swipr」を使用しており、スマホ・PCにこれは対応しています。'
    },
    {
        title: '作品紹介ページ',
        alt: 'ワークスページ',
        image: work_portfolio_works,
        text: '作品一覧ページにな「WEB・デザイン」の作品を掲載していいます。また、カードに「画像・説明・カテゴリ」で作品の概要を説明しています。'
      },
      {
        title: '投稿記事ページ',
        alt: 'アーティクルページ',
        image: work_portfolio_article,
        text: '「Note・開発ブログ」の2点をこちらのページに掲載しています。カードは「ワークス」と同じコンポネートを使用しています。'
      },
      {
        title: 'メールフォームページ',
        alt: 'フォームページ',
        image: work_portfolio_form,
        text: '「名前・E-Mail・メッセージ」の記入があるメールフォームです。「Firebase」を使用しています。'
      },
      {
        title: '作品ページ',
        alt: 'ワークページ',
        image: work_portfolio_work,
        text: '作品紹介ページの紹介をしています。作品により「リンク・必要・不必要」なコンポネートを調節できるように作成いています。'
      },
      {
        title: '履歴ページ',
        alt: '履歴ページ',
        image: work_portfolio_log,
        text: 'トップページのリンクから、投稿履歴の詳細をこのページで確認することができます。'
      }
]
  const PagenationItem = 
  {
  linkPre: '',
  linkNext: '/Work/CodingSchool',
  stylePre: 'nav__none',
  styleNext: ''
  }
    return(
<div>
<Main 
      text = {mainItem.text}
      />
<WorkMainImage 
  image = {workImage.image}
  alt = {workImage.alt}
/>

{/* cycle */}
<div className="card__flex cycles">
<div>
<h3 className={classes.h3}>Used Color</h3>
<div className={classes.cycleFlex}>
{cycleColourList.map((skillItem,skillTag)=>{
            return(
              <WorkCycle
              key={skillTag}
              style={skillItem.style}
              />
            )
            })}
</div>
</div>
<div>
<h3 className={classes.h3}>Used Code</h3>
<div className={classes.cycleFlex}>
          {cycleIconList.map((skillItem,skillTag)=>{
            return(
              <WorkCycle
              key={skillTag}
              icon = {skillItem.icon}
              style={skillItem.style}
              />
            )
            })}
            </div>
</div>
<div>
<h3 className={classes.h3}>Show</h3>
<div className={classes.cycleFlex}>
          {cycleShowList.map((skillItem,skillTag)=>{
            return(
              <WorkCycle
              key={skillTag}
              icon = {skillItem.icon}
              style={skillItem.style}
              link={skillItem.link}
              />
            )
            })}
            </div> 
  </div>          
</div>
{/* cycle */}
<WorkOverView 
 alt={overViewItem.alt}
 image = {overViewItem.image}           
 text = {overViewItem.text}
 style= {overViewItem.style}
/>
<div className="bg bg__white">
<h3>Other Page</h3>
{otherList.map((otherItem,pageCard)=>{
            return(
              <WorkOtherPages
              key={pageCard}
              image = {otherItem.image}           
              text = {otherItem.text}
              title = {otherItem.title}
              />
            )
            })}       
            </div>
<WorkPagenation
 linkPre={PagenationItem.linkPre}
 linkNext={PagenationItem.linkNext}
 stylePre={PagenationItem.stylePre}
 styleNext={PagenationItem.styleNext}
/>
</div>
    )
}
export default Message;