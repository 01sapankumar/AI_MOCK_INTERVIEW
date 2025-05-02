// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC249fIImCzqt1YukdmQ-fpeAcyEkPXkqQ",
  authDomain: "ai-interview-bad9a.firebaseapp.com",
  projectId: "ai-interview-bad9a",
  storageBucket: "ai-interview-bad9a.firebasestorage.app",
  messagingSenderId: "270994659005",
  appId: "1:270994659005:web:793425e4963e589c3bc9d4",
  measurementId: "G-Z5WHH9KDSY"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
