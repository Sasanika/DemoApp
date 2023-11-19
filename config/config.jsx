// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRbp61cFX-oN7dN8npG9JozLGGYt1bwBA",
  authDomain: "sharespace-8a21c.firebaseapp.com",
  projectId: "sharespace-8a21c",
  storageBucket: "sharespace-8a21c.appspot.com",
  messagingSenderId: "604357830181",
  appId: "1:604357830181:web:a7b0fca8e0f36b3e3b01cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const authentication = getAuth(app);