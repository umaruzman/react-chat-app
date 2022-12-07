import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCG7t_9H1UMb9yzqHKYwCiM0yd3zhs3xf4",
    authDomain: "newreactchatapp.firebaseapp.com",
    projectId: "newreactchatapp",
    storageBucket: "newreactchatapp.appspot.com",
    messagingSenderId: "98515515784",
    appId: "1:98515515784:web:3124cf1487791a5bd0e23d",
    measurementId: "G-DZRV86N7ZT"
});

export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);