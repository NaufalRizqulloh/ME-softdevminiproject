// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlBasBsfzDquNZqpLonMkcJFZifLeZUkY",
  authDomain: "akuhacker.firebaseapp.com",
  projectId: "akuhacker",
  storageBucket: "akuhacker.firebasestorage.app",
  messagingSenderId: "527585062435",
  appId: "1:527585062435:web:d33b77872ece22b0dc0b96",
  measurementId: "G-ST7N66FW15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);