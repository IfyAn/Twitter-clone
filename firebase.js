// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsC_vy7XHGvXCrwWgpzYoHcd-gPduGU1A",
    authDomain: "twit-social.firebaseapp.com",
    projectId: "twit-social",
    storageBucket: "twit-social.appspot.com",
    messagingSenderId: "511804668932",
    appId: "1:511804668932:web:02f4f1cc259dd08dbc0951"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };