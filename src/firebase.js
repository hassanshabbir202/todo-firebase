import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBi-hesaAoG6N9jOaq64NET_ONiP_7sE8A",
  authDomain: "todo-app-87f33.firebaseapp.com",
  projectId: "todo-app-87f33",
  storageBucket: "todo-app-87f33.appspot.com",
  messagingSenderId: "518944633366",
  appId: "1:518944633366:web:31d84019ac45a135007b37",
  measurementId: "G-BWGJZETDYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}