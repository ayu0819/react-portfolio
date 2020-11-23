import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from '../Common/Main';
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import { WorkCycle, WorkPagenation, WorkMainImage, WorkOtherPages, WorkOverView,WorkFlex } from '../Parts/index';
import work_goto from '../../assets/img/src/work_goto.jpg';
import work_Goto_Pay_1 from '../../assets/img/src/work_Goto_Pay_1.jpg';
import work_Goto_Pay_2 from '../../assets/img/src/work_Goto_Pay_2.jpg';
import work_Goto_Pay_3 from '../../assets/img/src/work_Goto_Pay_3.jpg';
import work_Goto_Pay_4 from '../../assets/img/src/work_Goto_Pay_4.jpg';
import work_Goto_Pay_5 from '../../assets/img/src/work_Goto_Pay_5.jpg';
import work_Goto_Pay_6 from '../../assets/img/src/work_Goto_Pay_6.jpg';
import work_gotoPay_icon_1 from '../../assets/img/src/work_gotoPay_icon_1.png';
import work_gotoPay_icon_2 from '../../assets/img/src/work_gotoPay_icon_2.png';
import work_gotoPay_icon_3 from '../../assets/img/src/work_gotoPay_icon_3.png';
import work_gotoPay_icon_4 from '../../assets/img/src/work_gotoPay_icon_4.png';
import work_gotoPay_icon_5 from '../../assets/img/src/work_gotoPay_icon_5.png';
const Goto = () => {
  const useStyles = makeStyles({
    dribble: {
      color: '#ea4c89',
    },
    cycleItem: {
      margin: '0 20px'
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
  text: 'Goto Pay'
}
const workImage = 
{
image: work_goto,
alt: 'Goto pay'
}
const cycleColourList = [
  {
    style: 'color__goto-1'
  },
  {
    style: 'color__goto-2'
  },
  {
    style: 'color__goto-3'
  }
]
const cycleIconList = [
  {
    icon: <FontAwesomeIcon className={classes.dribble} icon={faDribbble} />,
    style: 'color__icon'
  }
]
const overViewItem = {
  image: work_Goto_Pay_1,
  alt: 'トップページ',
  text: 'ローカルPayアプリのアプリデザインです。コンセプトは「観光をして文化を知ろう」。特定の観光施設を訪れることにより「ポイントを獲得」「特定割引の対象」になることが可能になり、観光時の買い物を便利にすることができます。',
  style: 'style__none'
}
const flexList = [
  {
    alt: '旧野首教会',
    image: work_gotoPay_icon_1,
  },
  {
    alt: '江上天主堂',
    image: work_gotoPay_icon_2,
  },
  {
    alt: '頭ケ島天主堂',
    image: work_gotoPay_icon_3,
  },
  {
    alt: '堂崎教会',
    image: work_gotoPay_icon_4,
  },
  {
    alt: '浜脇教会',
    image: work_gotoPay_icon_5,
  }
]
  const otherList = [
    {
      title: 'Top画面',
      alt: 'Top画面',
      image: work_Goto_Pay_2,
      text: '「Payカード」「登録クレジットカード」「ポイント残高」を表示。1目で登録カードと、獲得ポイントを確認することができます。'
    },
    {
        title: '履歴ページ',
        alt: '履歴ページ',
        image: work_Goto_Pay_3,
        text: '「ポイント獲得の履歴」と「クレジットの使用履歴」を確認することができます。'
      },
      {
        title: 'お知らせページ',
        alt: 'お知らせページ',
        image: work_Goto_Pay_4,
        text: 'サービスの「更新・ニュース」を確認できます。既読したものは「青み」を帯びており1目で区別をして確認することができます。'
      },
      {
        title: 'その他ページ',
        alt: 'その他ページ',
        image: work_Goto_Pay_5,
        text: '「チャージ・サポートセンター」への設定・サービスを使用することができます。'
      },
      {
          title: 'アカウント設定ページ',
          alt: 'アカウント設定ページ',
          image: work_Goto_Pay_6,
          text: 'アカウントの設定ができます。'
        }
]
  const PagenationItem = 
  {
  linkPre: '/Work/PortfolioDesign',
  linkNext: '/Work/Banners',
  stylePre: '',
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
<div className="card__flex common backImage">
<h3>Used Color</h3>
<div className={classes.cycleFlex}>
{cycleColourList.map((skillItem,skillTag)=>{
            return(
              <WorkCycle
              key={skillTag}
              icon = {skillItem.icon}
              style={skillItem.style}
              />
            )
            })}
</div>
<h3>Show Design</h3>
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
<WorkOverView 
 alt={overViewItem.alt}
 image = {overViewItem.image}           
 text = {overViewItem.text}
 style= {overViewItem.style}
/>
<div className="bg bg__white">
<h3>Icon</h3>
<div className="card__flex">
{flexList.map((flexItem,flexCard)=>{
            return(
              <WorkFlex 
              key={flexCard}
              image = {flexItem.image}           
              alt = {flexItem.alt}
              />
            )
            })}   
            </div>
            </div>
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
export default Goto;