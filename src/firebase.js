import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    apiKey: "AIzaSyCG3BfuVhBQwQlbMrYUT08oOFmMn-tnok4",
    authDomain: "portfolio-516e8.firebaseapp.com",
    databaseURL: "https://portfolio-516e8.firebaseio.com",
    projectId: "portfolio-516e8",
    storageBucket: "portfolio-516e8.appspot.com",
    messagingSenderId: "1084208000348",
    appId: "1:1084208000348:web:ba450f301d9598e8462599",
    measurementId: "G-FES0V33ND8"
     });
   
     var db = firebaseApp.firestore();
   
     export {db};