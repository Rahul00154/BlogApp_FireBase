import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIOgwENpgGAtZafMxfRcN_oWFd4mQ92bw",
  authDomain: "blogproject-2880f.firebaseapp.com",
  projectId: "blogproject-2880f",
  storageBucket: "blogproject-2880f.appspot.com",
  messagingSenderId: "82527541266",
  appId: "1:82527541266:web:ad16d7cdd6bcd5f43a60cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); //setting up our firebase database

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider(); //to create instance of class of auth
