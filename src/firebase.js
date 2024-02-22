// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ0Vs-vJhy3hbGxJnxdXhk7rrRB4mXkos",
  authDomain: "policesystem-fa716.firebaseapp.com",
  projectId: "policesystem-fa716",
  storageBucket: "policesystem-fa716.appspot.com",
  messagingSenderId: "115149739531",
  appId: "1:115149739531:web:e1516f3e2c7d0b05df590e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const imgDB = getStorage(app);

export { imgDB, db };
