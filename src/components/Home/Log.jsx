import React, { useEffect } from 'react';
import LogItem from '../Parts/LogItem'
import Button from '../Parts/Button'
import Aos from "aos";
import "aos/dist/aos.css"
import { makeStyles } from '@material-ui/core/styles';
const Log = () => {
  const useStyles = makeStyles({
    log: {
        paddingTop: '1.5em'
    }
  });
  const classes = useStyles();
  useEffect(()=> {
    Aos.init({duration: 2000});
   },[])
    const buttonItem = 
    {
      text: 'More Log',
      link:  '/ChargeLog'
    }
    const logList = [
        {
         data: '2020/11/23',
         text: 'サイトをリニューアルしました。'
        },
        {
          data: '2020/08/29',
          text: 'サイトを公開しました。'
         }, {
          data: '2020/08/23',
          text: 'ポートフォリオ作成しました。'
         }
      ]
    return(
<div className="log bg bg__white common">
<h3>Charge Log</h3>
<div className={classes.log}>
{logList.map((logItem,list)=>{
            return(
              <LogItem
              key={list}
              data = {logItem.data}
              text = {logItem.text}
              className="Log__line"
              data-aos="fade-up"
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
export default Log;