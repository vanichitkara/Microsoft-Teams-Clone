import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCBbiiRBpT61e-lXIAYqzD5NULgEje7IsU",
  authDomain: "teams-clone-eac9c.firebaseapp.com",
  projectId: "teams-clone-eac9c",
  storageBucket: "teams-clone-eac9c.appspot.com",
  messagingSenderId: "476554293382",
  appId: "1:476554293382:web:59c5a7965c85d94da1a107"
}).auth();