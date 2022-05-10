// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBuOogD1ElYiez5OTZIldXD8i9NRIK8lwk",
  authDomain: "miniblog-2b80a.firebaseapp.com",
  projectId: "miniblog-2b80a",
  storageBucket: "miniblog-2b80a.appspot.com",
  messagingSenderId: "777560057318",
  appId: "1:777560057318:web:6b86ef809a443aff6ca227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }