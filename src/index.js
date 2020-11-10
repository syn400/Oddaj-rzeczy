import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss'
import config from './fire';
import firebase from 'firebase';
import { FirestoreProvider } from "@react-firebase/firestore";


ReactDOM.render(
  <React.StrictMode>
    <FirestoreProvider {...config} firebase={firebase}>
      <App />
    </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


