import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, doc, setDoc } from "@firebase/firestore";

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

class note {
  courseName: string;
  courseNumber: number;
  section: number;
  dateAdded: number;

  constructor(coursename: string,coursenumber: number,section: number, dateAdded: number) {
    this.courseName = coursename;
    this.courseNumber = coursenumber;
    this.section = section;
    this.dateAdded = dateAdded;
  } 

}

function sortbydateAdded(notes: note[]) {
  const sortednotes = [...notes];

  sortednotes.sort((a,b) => a.dateAdded - b.dateAdded);
  return sortednotes;

}



// function sortbyyear() {
//   const notes = collection(firestore,"backend/node_modules/@firebase/firestore");
//   var array:Array<note> = 






