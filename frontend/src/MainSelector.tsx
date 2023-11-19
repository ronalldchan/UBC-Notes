
import { Input, FormControl, Box, Button, Grid, Typography, Select, MenuItem, InputLabel, Grow } from "@mui/material";
import { padding } from "@mui/system";
import React, { ChangeEvent, useState, useEffect} from "react";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storage, firestore,  } from "./firebase";
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { Note } from "./Note";


export default function MainSelector() {
  const [img, setImg] = useState<File | null>(null);
  const [data, setData] = useState([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImg(file);
    }
  };

  const handleQuery = async () => {
    try {
      const collectionRef = collection(firestore, "images"); // Replace 'your_collection_name' with your actual collection name

      const q = query(collectionRef,
        where("year", "==", year),
        where("course", "==", course),
        where("section", "==", section))

      const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);
      const doc2 = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        
        return new Note(data.year, data.course, data.section, data.section, data.date, data.imageUrl);
      });
      console.log(doc2);
    } catch (error) {
      console.log(error);
    }
  };

  const [year, setYear] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [section, setSection] = React.useState('');

  const dbRef = collection(firestore, "images");

  const handleUpload = async () => {
    if (img) {
      const imageId = uuidv4();
      const imgRef = ref(storage, `files/${imageId}`);
      await uploadBytes(imgRef, img);
      // console.log("File name:", img.name);
      // console.log("File size:", img.size);
      // console.log("File type:", img.type);
      window.alert("File uploaded successfully");
      let something = await getDownloadURL(imgRef);
      // console.log(something);
      let data = {
        year: year,
        course: course,
        section: section,
        date: new Date(),
        imageId: imageId,
        imageUrl: something,
      };
      addDoc(dbRef, data);
    } else {
      console.error("No file selected");
    }
  };

  const handleSelectYear = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setYear(event.target.value);
  };

  const handleSelectCourse = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCourse(event.target.value);
  };

  const handleSelectSection = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSection(event.target.value);
  };
  

  const [isResultOpen, setIsResultOpen] = useState(false);

  const [buttonClickCount, setButtonClickCount] = useState(0);


  return (
    <div>
      <Box sx={{ width:"1000px", height:"350px", display: "flex", flexDirection:"column", borderRadius: 2, p: 2, color:"#737373", backgroundColor:"#FFFFFF"}}>
        <Typography component="div" fontSize={48} sx={({height: "150px", color: "#737373", paddingLeft: "10px"})}>
          View and Submit Notes
        </Typography>

      <div>
        <FormControl fullWidth>
          <Grid container spacing={5} paddingLeft={"10px"}>
            <Grid item>
              <FormControl>
                <InputLabel id="yearLabel">Year</InputLabel>
                <Select labelId="yearLabel" label="Year" sx={{ width: 150 }} value={year} onChange={handleSelectYear}>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                </Select>
              </FormControl>
            </Grid>

              <Grid item>
                <FormControl>
                  <InputLabel id="courseLabel">Course</InputLabel>
                  <Select labelId="courseLabel" label="Course" sx={{ width: 400 }} value={course} onChange={handleSelectCourse}>
                    <MenuItem value={"CPSC210"}>CPSC210</MenuItem>
                    <MenuItem value={"CPSC213"}>CPSC213</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl>
                  <InputLabel id="sectionLabel">Section</InputLabel>
                  <Select labelId="sectionLabel" label="Section" sx={{ width: 150 }} value={section} onChange={handleSelectSection}>
                    <MenuItem value={101}>101</MenuItem>
                    <MenuItem value={102}>102</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <Button variant="contained" onClick={handleQuery}
                  sx={{
                    width: '150px', // Set the width
                    height: '55px', // Set the height
                    fontSize: '20px', // Set the font size
                  }}
                  onClick={() => {
                    setIsResultOpen(true);
                    setButtonClickCount(buttonClickCount + 1);
                    /*
                    if (isResultOpen) {
                      alert('clicked');
                    }
                    */
                  }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
            
          </FormControl>
        </div>
      </Box>
      <Grow in={isResultOpen}  timeout={{ enter: 500, exit: 300 }} key={buttonClickCount}>
        
        <Box
          sx={{
            width: "1000px",
            height: "150px",
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            p: 2,
            color: "#737373",
            backgroundColor: "#FFFFFF",
            marginTop: '20px',
          }}
        >
          <Typography>
            Text here.
          </Typography>

          <div>
            <Input type="file" onChange={handleFileChange} />
            <Button variant="contained" color="primary" onClick={handleUpload}>
              Upload
            </Button>
          </div>
        </Box>
        </Grow>
    </div>
  );
}
