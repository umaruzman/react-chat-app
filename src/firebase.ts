import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyC8hO9gIfZ1W5Bt3YRxoGjHFz6KdrgmBqQ",
    authDomain: "reactchatapp-8f6a0.firebaseapp.com",
    projectId: "reactchatapp-8f6a0",
    storageBucket: "reactchatapp-8f6a0.appspot.com",
    messagingSenderId: "1606098433",
    appId: "1:1606098433:web:d4f548a7abdcf5d5ce2a00",
    measurementId: "G-L8JERL1LN7"
});

export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);