// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZk69Sn2LuCLIveUE-LUzNpLRUIyWkJgM",
  authDomain: "elderly-health-care.firebaseapp.com",
  projectId: "elderly-health-care",
  storageBucket: "elderly-health-care.appspot.com",
  messagingSenderId: "511371548443",
  appId: "1:511371548443:web:b377ecef5d76d78f23e5be",
  measurementId: "G-23V1KYP4MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);