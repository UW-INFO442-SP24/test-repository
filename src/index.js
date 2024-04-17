import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1uwOeOLWE52R5Pdywz14bpxfhBi2OF0",
  authDomain: "test-repo-a32ce.firebaseapp.com",
  projectId: "test-repo-a32ce",
  storageBucket: "test-repo-a32ce.appspot.com",
  messagingSenderId: "413091356826",
  appId: "1:413091356826:web:1f725aa5ae46423bea7f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
