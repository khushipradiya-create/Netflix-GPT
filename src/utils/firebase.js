// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlkbByN3Z6TlS5JaJgpq0Df03OJn0qCDQ",
  authDomain: "netflixgpt-224fc.firebaseapp.com",
  projectId: "netflixgpt-224fc",
  storageBucket: "netflixgpt-224fc.firebasestorage.app",
  messagingSenderId: "410850785037",
  appId: "1:410850785037:web:0cf81d7512e01a4a146244",
  measurementId: "G-GXB3C848Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// used to access authentication service from firebase. it is returning a  authentication instance.
export const auth = getAuth()

