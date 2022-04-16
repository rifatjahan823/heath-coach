// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Vxw03S8opENrardAtXiGlS4Hgi0yMbw",
  authDomain: "heath-coach.firebaseapp.com",
  projectId: "heath-coach",
  storageBucket: "heath-coach.appspot.com",
  messagingSenderId: "541795673265",
  appId: "1:541795673265:web:aebd0ac2633a928d79ee90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;