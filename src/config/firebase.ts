// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXSfJXFayTX3Vqlbjda8okdt99Gh8ODl8",
  authDomain: "react-app-6c6be.firebaseapp.com",
  projectId: "react-app-6c6be",
  storageBucket: "react-app-6c6be.appspot.com",
  messagingSenderId: "642008010317",
  appId: "1:642008010317:web:09a5a398af2fc896315604"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);