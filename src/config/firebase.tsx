// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqa1ooFE07By9VR-VlK-5xIdHM7xO3JLc",
  authDomain: "capx-live.firebaseapp.com",
  projectId: "capx-live",
  storageBucket: "capx-live.appspot.com",
  messagingSenderId: "983794755941",
  appId: "1:983794755941:web:9112d9997093afafd6198c",
  measurementId: "G-795NJ46C9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;