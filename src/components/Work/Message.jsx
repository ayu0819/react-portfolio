import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from '../Common/Main';
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import { WorkCycle, WorkPagenation, WorkMainImage, WorkOtherPages, WorkOverView, WorkFlex} from '../Parts/index';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import message_login_user from '../../assets/img/src/message_login_user.jpg';
import message_pc_top from '../../assets/img/src/message_pc_top.jpg';
import work_massage_pc from '../../assets/img/src/work_massage_pc.jpg';
import message_post_allpost from '../../assets/img/src/message_post_allpost.jpg';
import message_top_about from '../../assets/img/src/message_top_about.jpg';
import message_banner_1 from '../../assets/img/src/message_banner_1.jpg';
import message_banner_2 from '../../assets/img/src/message_banner_2.jpg';
import message_banner_3 from '../../assets/img/src/message_banner_3.jpg';
const Message = () => {
  const useStyles = makeStyles({
    rails: {
      color: '#b41303',
    },
    react: {
      color: '#52c1dd',
    },
    github:{
      color: '#171616',
    },
    cycleItem: {
      margin: '0 20px'
    },
    js: {
      color: '#d5bf00',
    },
    cycleFlex:{
      display: 'flex',
      justifyContent: 'center',
      margin: '0 25px',
      paddingTop: '1em',
    }
});
const classes = useStyles();
const mainItem = 
{
  text: 'Message'
}
const workImage = 
{
image: message_pc_top,
alt: 'メッセージアプリ'
}
const cycleColourList = [
  {
    icon: '',
    style: 'color__message-1',
    link: ''
  },
  {
    icon: '',
    style: 'color__message-2',
    link: ''
  },
  {
    icon: '',
    style: 'color__message-3',
    link: ''
  }
]
const cycleIconList = [
  {
    icon: <FontAwesomeIcon className={classes.rails} icon={faGem} />,
    style: 'color__icon',
    link: ''
  },
  {
    icon: <FontAwesomeIcon className={classes.react} icon={faReact} />,
    style: 'color__icon',
    link: ''
  },
  {
    icon: <FontAwesomeIcon className={classes.js} icon={faJsSquare} />,
    style: 'color__icon',
    link: ''
  }
]
const cycleShowList = [
  {
    icon: <FontAwesomeIcon className={classes.github} icon={faGithub} />,
    style: 'color__icon',
    link: 'https://github.com/ayu0819/-practice-massage_app'
  }
]
const overViewItem = {
  image: work_massage_pc,
  alt: 'メッセージアプリトップ',
  text: '「WEBメッセージアプリ」と「LP」を制作しました。「Ruby on Rails」と「PostgreSQL」を使用して「ログイン・ログアウト」「投稿・削除・編集」の機能を実装。LPページから会員登録・ログインを行いサービスを利用することができます。',
  style: 'style__none'
}
const flexList = [
  {
    alt: 'ログイン・ユーザー画面',
    image: message_banner_1,
  },
  {
    alt: 'ログイン・ユーザー画面',
    image: message_banner_2,
  },
  {
    alt: 'ログイン・ユーザー画面',
    image: message_banner_3,
  }
]
  const otherList = [
    {
      title: 'ログイン・ユーザー画面',
      alt: 'ログイン・ユーザー画面',
      image: message_login_user,
      text: '「Ruby on Rails」の認証機能を使用してログイン機能を実装しています。ログイン後はマイページに自動でリンクされます。また、画像は初期画像が自動で入っています。'
    },
    {
        title: '投稿ページ・投稿跡の画面',
        alt: '投稿ページ・投稿跡の画面',
        image: message_post_allpost,
        text: '「Ruby on Rails」の投稿機能を使用してメッセージの投稿を実装、投稿時には「バリデート(文字数)」を行っています。投稿後はメッセージが共有されます。'
      },
      {
        title: 'トップページ・紹介ページ',
        alt: 'トップページ・紹介ページ',
        image: message_top_about,
        text: 'LPページでは「REACT」を使用しており、サービスキャンペーンや機能を紹介しています。LPから「ログイン・新規登録」を行うことによりサービスを使用できます。'
      }
]
  const PagenationItem = 
  {
  linkPre: '/Work/CodingSchool',
  linkNext: '/',
  stylePre: '',
  styleNext: 'nav__none'
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
<h3>Banner</h3>
<div className="card__flex">
{flexList.map((flexItem,flexCard)=>{
            return(
              <WorkFlex 
              key={flexCard}
              image = {flexItem.image}           
              alt = {flexItem.alt}
              title = {flexItem.title}
              />
            )
            })}   
            </div>
            </div>
<div className="bg bg__gray">
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