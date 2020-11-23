import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SkillButton from '../Parts/SkillButton'
import Aos from "aos";
import "aos/dist/aos.css"
const Skill = () => {
  useEffect(()=> {
    Aos.init({duration: 2000});
   },[])
  const useStyles = makeStyles({
    flex:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
    },
    tag: {
      boxShadow: '0 0 30px rgba(43,43,43,.2)',  
    color: '#fff',
    padding: '15px',
    borderRadius: '30px',
    widows: '100%',
    maxWidth: 'auto',
    height: '15px',
    margin: '5px'
    },
    qualificationTag: {
      boxShadow: '0 0 30px rgba(43,43,43,.2)',
      color: '#4B4B4B',
      padding: '15px',
      borderRadius: '30px',
      widows: '100%',
      maxWidth: 'auto',
      height: '15px',
      margin: '5px'
      },
      skillTitle: {
       fontSize: '32px',
       color: '#EFEFEF',
       textAlign: 'left',
       padding: '0 0.5em'
      }
  });
  const classes = useStyles();
    const skillList = [
        {
          text: 'CSS',
          style: 'skill__css'
        },
        {
          text: 'HTML',
          style: 'skill__html'
        },
        {
            text: 'Javascript',
            style: 'skill__javascript'
          },
          {
            text: 'React',
            style: 'skill__react'
          }
      ]
      const toolList = [
        {
          text: 'Photoshop',
          style: 'tool__photoshop'
        },
        {
          text: 'Illustrator',
          style: 'tool__illustrator'
        },
        {
            text: 'XD',
            style: 'tool__xd'
          },
          {
            text: 'Office',
            style: 'tool__office'
          },
          {
            text: 'VScode',
            style: 'tool__vsCode'
          },{
            text: 'SpreadSheet',
            style: 'tool__spreadSheet'
          }
      ]
      const qualificationList = [
        {
          text: 'Goethe',
          style: 'qualification'
        },
        {
          text: '色彩検定',
          style: 'qualification'
        }
      ]
    return(
   <div className="common bg bg__white">
       <div>
  <h3>Skills</h3>
  <h4 className={classes.skillTitle}>coding langglege</h4>
  <div className={classes.flex} data-aos="fade-up">
  {skillList.map((skillItem,skillTag)=>{
            return(
              <SkillButton
              key={skillTag}
              text = {skillItem.text}
              style={skillItem.style + " " + classes.tag}
              />
            )
            
            })}
            </div>
            <h4 className={classes.skillTitle}>Tools</h4>
            <div className={classes.flex} data-aos="fade-up">
  {toolList.map((skillItem,skillTag)=>{
            return(
              <SkillButton
              key={skillTag}
              text = {skillItem.text}
              style={skillItem.style + " " + classes.tag}
              />
              
            )
            })}    
            </div>
            <h4 className={classes.skillTitle}>Qualification</h4>
            <div className={classes.flex} data-aos="fade-up">
  {qualificationList.map((skillItem,skillTag)=>{
            return(
              <SkillButton
              key={skillTag}
              text = {skillItem.text}
              style={skillItem.style + " " + classes.qualificationTag}
              />
              
            )
            })}
            </div>
            </div>
            <div className="space"></div>
   </div>
    );
}
export default Skill;