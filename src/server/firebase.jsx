// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Lv43fR4jGKogPgHjgoR96qjpszcIA_g",
  authDomain: "erp-app-6f61d.firebaseapp.com",
  projectId: "erp-app-6f61d",
  storageBucket: "erp-app-6f61d.firebasestorage.app",
  messagingSenderId: "580011349790",
  appId: "1:580011349790:web:cf344cb71ced56cec09b0f",
  measurementId: "G-X54KVZ76HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);