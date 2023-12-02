// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRPJMK9i8W3xyRcScR5Jq8Tf3NaTgeZz4",
  authDomain: "redx-with-firebase-auth.firebaseapp.com",
  projectId: "redx-with-firebase-auth",
  storageBucket: "redx-with-firebase-auth.appspot.com",
  messagingSenderId: "692120077403",
  appId: "1:692120077403:web:d61005f861bcb2cedbeb7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;