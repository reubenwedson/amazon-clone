import firebase from 'firebase/app'
import  'firebase/auth'
import  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnKT3JhhDpFwEh_Rl6hw1c1PKljOT3c4g",
    authDomain: "clone-8b8ac.firebaseapp.com",
    databaseURL: "https://clone-8b8ac.firebaseio.com",
    projectId: "clone-8b8ac",
    storageBucket: "clone-8b8ac.appspot.com",
    messagingSenderId: "885965014048",
    appId: "1:885965014048:web:8e53e1040b6c949b166845",
    measurementId: "G-12TGCGTDX1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};