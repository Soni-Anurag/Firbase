// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCD1O-ZsDQnPNxen6doqcInKGqjIUP4QHc",
    authDomain: "eshiptech-1.firebaseapp.com",
    projectId: "eshiptech-1",
    storageBucket: "eshiptech-1.appspot.com",
    messagingSenderId: "891560147426",
    appId: "1:891560147426:web:851ed0866f7c9e7603e1bb",
    measurementId: "G-50BG4V1R88"
  };

  const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get auth instance

export { auth };