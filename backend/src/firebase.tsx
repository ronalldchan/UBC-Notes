import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQjAe6t5RMpUOGeVh_THr3cRgRZiYaDhc",
  authDomain: "hackcamp2023-42f12.firebaseapp.com",
  projectId: "hackcamp2023-42f12",
  storageBucket: "hackcamp2023-42f12.appspot.com",
  messagingSenderId: "959186874806",
  appId: "1:959186874806:web:0b54d73baf76942cc85117",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
