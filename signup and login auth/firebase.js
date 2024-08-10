 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
 import {GoogleAuthProvider,signInWithPopup, getAuth, signOut , createUserWithEmailAndPassword , signInWithEmailAndPassword ,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyDTdDfIV9IFPMMxRHV-ZzOmJkiADFB9Nac",
   authDomain: "assign-app-35387.firebaseapp.com",
   projectId: "assign-app-35387",
   storageBucket: "assign-app-35387.appspot.com",
   messagingSenderId: "231383496056",
   appId: "1:231383496056:web:7e0c4771ea2601ebbb848d"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export {auth,GoogleAuthProvider,signInWithPopup , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged ,signOut}