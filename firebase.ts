// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPNV7gD7-TbSnsHO5YJ-hm9n_kPEUNoZo",
  authDomain: "salonai.firebaseapp.com",
  projectId: "salonai",
  storageBucket: "salonai.appspot.com",
  messagingSenderId: "967472915888",
  appId: "1:967472915888:web:fe1d68adbf81786eb82275",
  measurementId: "G-PSPYRZ6QPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);