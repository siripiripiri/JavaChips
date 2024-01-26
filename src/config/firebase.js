import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAneKPP-PEAaqPT40XnSzhilFARDbMO2oU",
  authDomain: "javachips-f4e81.firebaseapp.com",
  projectId: "javachips-f4e81",
  storageBucket: "javachips-f4e81.appspot.com",
  messagingSenderId: "1074245411303",
  appId: "1:1074245411303:web:3574271a683c7cf3349d42",
  measurementId: "G-Y3ZBJBL62J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider;
export const db = getFirestore(app);