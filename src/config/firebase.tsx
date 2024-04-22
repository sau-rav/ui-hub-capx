// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKJJz4zuC7rJzGBCmN-ReNmTchYuV0wq4",
  authDomain: "xyz-beta-a84c2.firebaseapp.com",
  projectId: "xyz-beta-a84c2",
  storageBucket: "xyz-beta-a84c2.appspot.com",
  messagingSenderId: "217685714468",
  appId: "1:217685714468:web:0b82016d4f576e225b9ab1",
  measurementId: "G-80DCR55EH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;