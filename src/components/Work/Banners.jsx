import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from '../Common/Main';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import { WorkPagenation, WorkMainImage, WorkOtherPages} from '../Parts/index';
import work_bannerTop from '../../assets/img/src/work_bannerTop.jpg';
import work_banner_1 from '../../assets/img/src/work_banner_1.jpg';
import work_banner_2 from '../../assets/img/src/work_banner_2.jpg';
import work_banner_3 from '../../assets/img/src/work_banner_3.jpg';
import work_banner_4 from '../../assets/img/src/work_banner_4.jpg';
import work_banner_5 from '../../assets/img/src/work_banner_5.jpg';
import work_banner_6 from '../../assets/img/src/work_banner_6.jpg';
import work_banner_7 from '../../assets/img/src/work_banner_7.jpg';
import work_banner_8 from '../../assets/img/src/work_banner_8.jpg';
import work_banner_9 from '../../assets/img/src/work_banner_9.jpg';
import work_banner_10 from '../../assets/img/src/work_banner_10.jpg';
import work_banner_11 from '../../assets/img/src/work_banner_11.jpg';
const Banners = () => {
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
  text: 'Banners'
}
const workImage = 
{
image: work_bannerTop,
alt: 'バナー'
}
const cycleColourList = [
  {
    icon: 'Goethe',
    style: 'color__1'
  },
  {
    icon: '色彩検定',
    style: 'color__2'
  },
  {
    icon: 'Goethe',
    style: 'color__1'
  }
]
const cycleIconList = [
  {
    icon: <FontAwesomeIcon className={classes.linkedin} icon={faLinkedin} />,
    style: 'color__1'
  },
  {
    icon: <FontAwesomeIcon className={classes.linkedin} icon={faLinkedin} />,
    style: 'color__2'
  },
  {
    icon: <FontAwesomeIcon className={classes.linkedin} icon={faLinkedin} />,
    style: 'color__1'
  }
]
  const otherList = [
    {
      title: 'Spmleです',
      alt: 'Smple',
      image: work_banner_1,
      text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
    },
    {
        title: 'Spmleです',
        alt: 'Smple',
        image: work_banner_2,
        text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
      },
      {
        title: 'Spmleです',
        alt: 'Smple',
        image: work_banner_3,
        text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
      },
      {
        title: 'Spmleです',
        alt: 'Smple',
        image: work_banner_4,
        text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
      },
      {
        title: 'Spmleです',
        alt: 'Smple',
        image: work_banner_5,
        text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
      },
      {
        title: 'Spmleです',
        alt: 'Smple',
        image: work_banner_6,
        text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
      },
      {
          title: 'Spmleです',
          alt: 'Smple',
          image: work_banner_7,
          text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
        },
        {
          title: 'Spmleです',
          alt: 'Smple',
          image: work_banner_8,
          text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
        },
        {
          title: 'Spmleです',
          alt: 'Smple',
          image: work_banner_9,
          text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
        },
        {
            title: 'Spmleです',
            alt: 'Smple',
            image: work_banner_10,
            text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
          },
          {
            title: 'Spmleです',
            alt: 'Smple',
            image: work_banner_11,
            text: 'このサイトは コーディングスクール" を想定して作成しました。テーマカラーはオレンジ色です。工夫点は以下になります。'
          },
]
  const PagenationItem = 
  {
  linkPre: '/Work/Goto',
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
export default Banners;