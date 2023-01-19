
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAouw1wXpNdr3YmVpx_vWL78-rv1GrLuig",
  authDomain: "react-chat-509ef.firebaseapp.com",
  projectId: "react-chat-509ef",
  storageBucket: "react-chat-509ef.appspot.com",
  messagingSenderId: "202638189401",
  appId: "1:202638189401:web:446dc289d8d976a937e248",
  measurementId: "G-217XZPBHNM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
