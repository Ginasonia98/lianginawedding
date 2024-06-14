// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbnmG09Fn9_MpjhM-sQor4w4Q4NkVQR1c",
  authDomain: "liang-82e61.firebaseapp.com",
  projectId: "liang-82e61",
  storageBucket: "liang-82e61.appspot.com",
  messagingSenderId: "790801501126",
  appId: "1:790801501126:web:c0156da85d82cc072c80c7",
  measurementId: "G-W5RS2888YE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
