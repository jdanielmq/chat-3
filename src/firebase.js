import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCNoPuoHSvupnMmV2X1GBdNq7KxZ4qeJS0",
    authDomain: "chat-3-e2eb7.firebaseapp.com",
    databaseURL: "https://chat-3-e2eb7.firebaseio.com",
    projectId: "chat-3-e2eb7",
    storageBucket: "chat-3-e2eb7.appspot.com",
    messagingSenderId: "538818405741",
    appId: "1:538818405741:web:5e50f107015db352202664"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}
