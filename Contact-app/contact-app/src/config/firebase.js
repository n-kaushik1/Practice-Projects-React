// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2_A-uwDaAfMVe0HqufDejyiER3qiVnIE",
  authDomain: "vite-contact-9799e.firebaseapp.com",
  projectId: "vite-contact-9799e",
  storageBucket: "vite-contact-9799e.appspot.com",
  messagingSenderId: "101792821317",
  appId: "1:101792821317:web:50c7d0573501b675b2732c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
