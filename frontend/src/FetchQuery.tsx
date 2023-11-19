import React, { useState, useEffect } from "react";
import { collection, getDoc, getDocs, query } from "firebase/firestore";
import { storage, firestore } from "./firebase";
import { Button } from "@mui/material";

export default function FetchQuery() {
  const [data, setData] = useState([]);

  const handleQuery = async () => {
    try {
      const collectionRef = collection(firestore, "images"); // Replace 'your_collection_name' with your actual collection name

      const querySnapshot = await getDocs(collectionRef);
      // console.log(querySnapshot);
      const doc2 = querySnapshot.docs.map((doc) => ({
        data: doc.data(),
      }));
      console.log(doc2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button onClick={handleQuery}>click me</Button>
    </div>
  );
}
