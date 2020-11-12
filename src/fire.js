import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = firebase.initializeApp({
    apiKey: "AIzaSyBVD7Wb91ssb0LElRi8bk9M4FoX6HogQKc",
    authDomain: "oddaj-rzeczy-51076.firebaseapp.com",
    databaseURL: "https://oddaj-rzeczy-51076.firebaseio.com",
    projectId: "oddaj-rzeczy-51076",
    storageBucket: "oddaj-rzeczy-51076.appspot.com",
    messagingSenderId: "970682417103",
    appId: "1:970682417103:web:5272a585e638fbfb881cba",
    measurementId: "G-BSME8E2EH9"
  });

export default config;