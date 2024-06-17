// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const {
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_AUTH_dOMAIN,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_STORAGEBUCKET,
    VITE_FIREBASE_MESSAGE_ID,
    VITE_FIREBASE_APPID,
} = import.meta.env
const firebaseConfig = {
    apiKey: VITE_FIREBASE_API_KEY,
    authDomain: VITE_FIREBASE_AUTH_dOMAIN,
    projectId: VITE_FIREBASE_PROJECT_ID,
    storageBucket: VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGE_ID,
    appId: VITE_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)