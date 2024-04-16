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
  apiKey: "AIzaSyAhh4F55m8JQYV0p-pzRzbiVU2E1jgqvUg",
  authDomain: "test-repo-1-b6614.firebaseapp.com",
  projectId: "test-repo-1-b6614",
  storageBucket: "test-repo-1-b6614.appspot.com",
  messagingSenderId: "884060914084",
  appId: "1:884060914084:web:0e2e479a64c983c8568131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React>
    <App />
  </React>
);
