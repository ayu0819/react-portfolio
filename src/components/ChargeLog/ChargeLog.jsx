import React from 'react';
import LogItem from '../Parts/LogItem'
import Main from '../Common/Main'
import { makeStyles } from '@material-ui/core/styles';
const ChargeLog = () => {
  const useStyles = makeStyles({
    log: {
        paddingTop: '1.5em'
    }
  });
  const classes = useStyles();
    const mainItem = 
    {
      text: 'Log'
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
        <div>
            <Main 
      text = {mainItem.text}
      />
      <div className="bg bg__white">
        <h3>Charge Log</h3>
        <div className={classes.log}>
        {logList.map((logItem,list)=>{
                    return(
                      <LogItem
                      key={list}
                      data = {logItem.data}
                      text = {logItem.text}
                      className="Log__line"
                      />
                      
                    )
                    })}
                    </div>
                   </div>
        </div>
            )
}
export default ChargeLog