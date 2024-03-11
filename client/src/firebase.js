// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-31daf.firebaseapp.com",
  projectId: "mern-blog-31daf",
  storageBucket: "mern-blog-31daf.appspot.com",
  messagingSenderId: "398300498186",
  appId: "1:398300498186:web:40233f72d96874437d92f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);