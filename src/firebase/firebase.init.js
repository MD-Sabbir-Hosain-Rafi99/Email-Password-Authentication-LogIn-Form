// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgkp-BWbMklwoZTuWjhwQAy9qF3FPjq3Y",
  authDomain: "email-password-authentic-da192.firebaseapp.com",
  projectId: "email-password-authentic-da192",
  storageBucket: "email-password-authentic-da192.firebasestorage.app",
  messagingSenderId: "378940666665",
  appId: "1:378940666665:web:fbf3b1de664f4aaf96fd38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);