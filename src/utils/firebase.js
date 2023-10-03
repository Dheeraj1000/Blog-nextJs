// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-97528.firebaseapp.com",
  projectId: "blog-97528",
  storageBucket: "blog-97528.appspot.com",
  messagingSenderId: "885857348739",
  appId: "1:885857348739:web:bbec27a2e87b2afb3e3fb6"
};


export const app = initializeApp(firebaseConfig);