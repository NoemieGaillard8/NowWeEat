import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "nowweeat-5c22a.firebaseapp.com",
    projectId: "nowweeat-5c22a",
    storageBucket: "nowweeat-5c22a.firebasestorage.app",
    messagingSenderId: "434346454188",
    appId: "1:434346454188:web:e37528cf6494f7c6a08309"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const auth = getAuth(app);


export { db,storage };