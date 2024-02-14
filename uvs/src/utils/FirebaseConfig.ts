// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Collection,getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkEIyU1iuV5EesjHYxLH7__cQhkXljoUg",
  authDomain: "uvsynctalk.firebaseapp.com",
  projectId: "uvsynctalk",
  storageBucket: "uvsynctalk.appspot.com",
  messagingSenderId: "674244866148",
  appId: "1:674244866148:web:9b4a9c3b0be10a5089af71",
  measurementId: "G-TNBYKJMERY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getAuth(app);