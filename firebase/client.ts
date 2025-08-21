// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYU3n4gS5yfHTtE9zDsu5VHHuKuXNXF9A",
  authDomain: "prepwise-95997.firebaseapp.com",
  projectId: "prepwise-95997",
  storageBucket: "prepwise-95997.appspot.com", // usually ends with appspot.com
  messagingSenderId: "68588115807",
  appId: "1:68588115807:web:f7ccde6597b52d611f48ea",
  measurementId: "G-6CHEE0ZDD2"
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Optional: Initialize Analytics
// const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
