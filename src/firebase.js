import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcxW4qRMDtjwLWErPd92nyTlU1083ubBo",
  authDomain: "mleo-chat-app.firebaseapp.com",
  databaseURL: "https://mleo-chat-app.firebaseio.com",
  projectId: "mleo-chat-app",
  storageBucket: "mleo-chat-app.appspot.com",
  messagingSenderId: "450289666273",
  appId: "1:450289666273:web:9cc95f4035bd695ce40fa0",
  measurementId: "G-THKVQQ0XTN",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
