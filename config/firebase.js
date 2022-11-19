// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAISwFsPmqNRDltW6czCTNsAUYqYpgPE2o",
  authDomain: "sd-5iv9-api-herrerachavez.firebaseapp.com",
  projectId: "sd-5iv9-api-herrerachavez",
  storageBucket: "sd-5iv9-api-herrerachavez.appspot.com",
  messagingSenderId: "883949121085",
  appId: "1:883949121085:web:e64aaf30add3f425810454",
  measurementId: "G-DEQ1P47VPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);