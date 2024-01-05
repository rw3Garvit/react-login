import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0j9mwxUEL3LHYmMUylo6e1P-w5PHzE2I",
  authDomain: "react-test-a0c52.firebaseapp.com",
  projectId: "react-test-a0c52",
  storageBucket: "react-test-a0c52.appspot.com",
  messagingSenderId: "914237439130",
  appId: "1:914237439130:web:f7b8ea9c885613d58e3323",
  measurementId: "G-67B4N6C0L6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

console.log(db, "sadasd");
