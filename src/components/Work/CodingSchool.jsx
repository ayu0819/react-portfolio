import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from '../Common/Main';
import { faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import { WorkCycle, WorkPagenation, WorkMainImage, WorkOverView} from '../Parts/index';
import work_schoolPcTop from '../../assets/img/src/work_schoolPcTop.jpg';
import work_schoolPc from '../../assets/img/src/work_schoolPc.jpg';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
const CodingSchool = () => {
  const useStyles = makeStyles({
    react: {
      color: '#52c1dd',
    },
    js: {
      color: '#d5bf00',
    },
    github:{
      color: '#171616',
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
  text: 'Coding School'
}
const workImage = 
{
image: work_schoolPcTop,
alt: 'コーディングスクール'
}
const cycleColourList = [
  {
    icon: '',
    style: 'color__school-1',
    link: ''
  },
  {
    icon: '',
    style: 'color__school-2',
    link: ''
  },
  {
    icon: '',
    style: 'color__school-3',
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
  image: work_schoolPc,
  alt: 'コーディングスクールトップ',
  text: '「コーディングスクール」をテーマにLPを作成しました。作成は「REACT」で行い「モーダル機能」をLPで実装しています。「公開ページやGithub」にてs公開しているのでご覧ください。',
  style: 'style__none'
}
  const PagenationItem = 
  {
  linkPre: '/Work/Portfolio',
  linkNext: '/Work/Message',
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

<div>
<h3>Used Color</h3>
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
<h3>Used Code & Design</h3>
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
<h3>Show</h3>
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
<WorkOverView 
 alt={overViewItem.alt}
 image = {overViewItem.image}           
 text = {overViewItem.text}
 style= {overViewItem.style}
/>
<WorkPagenation
 linkPre={PagenationItem.linkPre}
 linkNext={PagenationItem.linkNext}
 stylePre={PagenationItem.stylePre}
 styleNext={PagenationItem.styleNext}
/>
</div>
    )
}
export default CodingSchool;