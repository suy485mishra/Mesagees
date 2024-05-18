// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:" AIzaSyDhn03WzLhobBk4CN8kBBfsIja664oJW6A",
  authDomain: "cawe-d93f6.firebaseapp.com",
  projectId: "cawe-d93f6",
  storageBucket: "cawe-d93f6.appspot.com",
  messagingSenderId: "570784532827",
  appId: "1:570784532827:web:ab980248463374c7bef27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()