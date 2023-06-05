// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6dMzmJCYD5g2ebI4JOFVDigl0K-x2zTA",
  authDomain: "magicshop-7577e.firebaseapp.com",
  projectId: "magicshop-7577e",
  storageBucket: "magicshop-7577e.appspot.com",
  messagingSenderId: "792763472354",
  appId: "1:792763472354:web:b596125eb86cb661a401bb",
  measurementId: "G-PG6CKLW3W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
