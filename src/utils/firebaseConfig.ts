import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkEIyU1iuV5EesjHYxLH7__cQhkXljoUg",
  authDomain: "uvsynctalk.firebaseapp.com",
  projectId: "uvsynctalk",
  storageBucket: "uvsynctalk.appspot.com",
  messagingSenderId: "674244866148",
  appId: "1:674244866148:web:9b4a9c3b0be10a5089af71",
  measurementId: "G-TNBYKJMERY"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");


