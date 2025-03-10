// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuC4JLmcGxdpdOI2qkje68n_5gIv6oHgQ",
  authDomain: "ekukhanyeni-cms.firebaseapp.com",
  projectId: "ekukhanyeni-cms",
  storageBucket: "ekukhanyeni-cms.firebasestorage.app",
  messagingSenderId: "994794823985",
  appId: "1:994794823985:web:dd1421948dedb3c63c9010",
  measurementId: "G-QYNDT9EE6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);