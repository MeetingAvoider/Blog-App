// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c64dd.firebaseapp.com",
  projectId: "mern-blog-c64dd",
  storageBucket: "mern-blog-c64dd.appspot.com",
  messagingSenderId: "823928951691",
  appId: "1:823928951691:web:f720101975ea9a4ca3158e",
  measurementId: "G-51QFCHVWE7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
