import React from 'react';
import Main from '../Common/Main';
import { makeStyles } from '@material-ui/core/styles';
import { WorkPagenation, WorkMainImage, WorkOtherPages, WorkOverView} from '../Parts/index';
import work_portfolioDesign_map from '../../assets/img/src/work_portfolioDesign_map.jpg';
import work_portfolioDesign_home from '../../assets/img/src/work_portfolioDesign_home.jpg';
import work_work_portfolioDesign_log from '../../assets/img/src/work_portfolioDesign_log.jpg';
import work_portfolioDesign_about from '../../assets/img/src/work_portfolioDesign_about.jpg';
import work_portfolioDesign_contact from '../../assets/img/src/work_portfolioDesign_contact.jpg';
import work_portfolioDesign_work from '../../assets/img/src/work_portfolioDesign_work.jpg';
import work_portfolioDesign_works from '../../assets/img/src/work_portfolioDesign_works.jpg';
import work_portfolioDesign from '../../assets/img/src/work_portfolioDesign.jpg';
import work_portfolioDesign_rule1 from '../../assets/img/src/work_portfolioDesign_rule1.jpg';
import work_portfolioDesign_rule2 from '../../assets/img/src/work_portfolioDesign_rule2.jpg';
import work_portfolioDesign_logo from '../../assets/img/src/work_portfolioDesign_logo.jpg';
const PortfolioDesign = () => {
  const useStyles = makeStyles({
    linkedin: {
      color: '#0e76a8',
      padding: '20px',
      fontSize: "45px"
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
  text: 'PortfolioDesign'
}
const workImage = 
{
image: work_portfolioDesign,
alt: 'コーディングスクール'
}
const overViewItem = {
  image: work_portfolioDesign_map,
  alt: 'サイトマップ',
  text: 'サイトマップです。ホーム画面から「article・about・warks・contact・log」のSNSを除く5ページのリンクがあります。 また「works・home」からは各詳細ページへのリンクと「article」では外部ブログサイトへのリンクがあります。 ',
  style: 'style__none'
}
  const otherList = [
    {
      title: 'デザイン概要(アイコン・カラー・英文フォント)',
      alt: 'デザイン概要(アイコン・カラー・英文フォント)',
      image: work_portfolioDesign_rule1,
      text: 'サイトの「メイン色・フォント」などを概要としてまとめています。カラーはアイコンは「fantasome」英文フォントは「GoogleFont」を使用し、文字リンクなど詳細を定めています。'
    },
    {
        title: 'デザイン概要(ファビコン ・コンテンツパーツ・和文フォント)',
        alt: 'デザイン概要(ファビコン ・コンテンツパーツ・和文フォント)',
        image: work_portfolioDesign_rule2,
        text: 'サイトの「コンテンツパーツ・フォント」などを概要としてまとめています。和文フォントは「GoogleFont」を使用しています。コンテンツパーツは「カード・チップ・モバイルヘッダー」を定めています。'
      },
      {
        title: 'ロゴ',
        alt: 'ロゴ',
        image: work_portfolioDesign_logo,
        text: 'ロゴ(テキストなし&あり)になります。「クリップ(文具)」と「A」をイメージしたデザインになります。クリップを採用したのは、業務間での「情報収集」など知識の蓄えを積極的に取り組みたいとの意図です。'
      },
    {
      title: 'ホームページ',
      alt: 'ホームページ',
      image: work_portfolioDesign_home,
      text: 'ホームの「webデザイン・ワイヤーフレーム」になります。サイトのメインページなので多くのコンテンツページや詳細項目へのリンクがあります。また、スクロールアニメーション「aos」を使用し、所々「materialUI」をCSSで使用しています。'
    },
    {
        title: 'ログページ',
        alt: 'ログページ',
        image: work_work_portfolioDesign_log,
        text: 'サイトの更新履歴を確認することができます。ホームページのリンクから閲覧が可能です。'
      },
      {
        title: 'アバウトページ',
        alt: 'アバウトページ',
        image: work_portfolioDesign_about,
        text: '私の「趣味・スキル・資格」を掲載しています。このページでは「swiper」を利用してスライダーを実装させています。'
      },
      {
        title: 'コンタクトページ',
        alt: 'コンタクトページ',
        image: work_portfolioDesign_contact,
        text: 'こちらのページから、問合せができるページになります。Firebaseを使用してメッセージの送信を実装しました。'
      },
        {
          title: 'ワークスページ',
          alt: 'ワークスページ',
          image: work_portfolioDesign_works,
          text: '私の作成した作品を掲載しています。各カードごとに「画像・テキスト・タグ」を設定しており、カードを見ただけて何で制作したのか理解できるように作成しました。'
        },
        {
          title: 'ワークページ',
          alt: 'ワークページ',
          image: work_portfolioDesign_work,
          text: '「ワークス・ホームページ」からリンクが可能なページです。そして、各ワークの詳細を掲載しています。ワークの内容により「必要・不必要な項目」を選択して使用できるように作成しています。'
        }
]
  const PagenationItem = 
  {
  linkPre: '',
  linkNext: '/Work/Goto',
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
export default PortfolioDesign;