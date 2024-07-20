// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmue0XraKlGqg3wXYDQhHjCG8KIqhERUk",
  authDomain: "destiny-429708.firebaseapp.com",
  projectId: "destiny-429708",
  storageBucket: "destiny-429708.appspot.com",
  messagingSenderId: "814263723862",
  appId: "1:814263723862:web:d975365e67dc4137c158f7",
  measurementId: "G-3RQ3Y8HEKR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
