import  React, {useState} from "react";
import Main from '../Common/Main'
import {db} from "../../firebase"
import { makeStyles } from '@material-ui/core/styles';
const Contact = () => {
  const mainItem = 
    {
      text: 'Contact form'
    }
    const useStyles = makeStyles({
        text: {
            padding: '1em 1em',
            display: 'inline-block',
            margin: '0'
        },
        title: {
            lineHeight: '1.5em',
            paddingBottom: '0.5em'
        },
      });
    const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader,setLoader] = useState(false);
  const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true)
      db.collection('contacts').add({
          name: name,
          email: email,
          message: message,
      })
   .then(() => {
       alert('Message has been submitted!')
       setLoader(false);
   })
   .catch(error => {
       alert(error.message);
       setLoader(false);
   });
   setName("");
   setEmail("");
   setMessage("");
  };
      return(
          <div>
           <Main 
      text = {mainItem.text}
      />
      <div className="bg bg__white">
      <h3 className={classes.title}>Hello. Please let me know if you need anything.</h3>
      <p className={classes.text}>こんにちは、タテイシと申します。WEBページやデザイン制作のお仕事などご要望がございましたらメッセージをください。<br />また、SNSからも ご依頼・メッセージ お待ちしています。</p>
      <p className={classes.text}>メッセージ送信後、改めて記載されたアドレス先に連絡をいたしますので、<strong>誤りがない</strong>かご確認をお願いします。</p>
      </div>
<div className="bg bg__gray common">
          <form className="form" onSubmit={handleSubmit}>
  <label>Name</label>
  <input placeholder="Yamada Taro" value={name} 
  onChange={(e) => setName(e.target.value)}/>
  <label>Email</label>
  <input placeholder="smple@mail.com"value={email} 
  onChange={(e) => setEmail(e.target.value)} />
  <label>Message</label>
  <textarea placeholder="Message" value={message} 
  onChange={(e) => setMessage(e.target.value)}></textarea>
  <button type="submit" style={{background : loader ? "#ccc" : "linear-gradient(#6FE5F5, #1CD2F5)"}}>Send Maill</button>
          </form>
          </div>
          </div>
      )
  }
  export default Contact