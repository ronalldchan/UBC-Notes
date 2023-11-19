import { Input, FormControl, Box, Button, Grid, Typography, Select, MenuItem } from "@mui/material";
import { padding } from "@mui/system";
import React, { ChangeEvent, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { storage, firestore } from "./firebase";
import { addDoc, collection } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function MainSelector() {
  const [img, setImg] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImg(file);
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
  
  return (
    <Box sx={{ width:"1000px", height:"350px", display: "flex", flexDirection:"column", borderRadius: 2, p: 2, color:"#737373", backgroundColor:"#FFFFFF"}}>
      <Typography component="div" fontSize={48} sx={({height: "150px", color: "#737373", paddingLeft: "10px"})}>
        View and Submit Notes
      </Typography>

      <div>
        <FormControl fullWidth>
          <Grid container spacing={20} paddingLeft={"10px"}>
            <Grid item>
              <Select label="Year" value={year} onChange={handleSelectYear}> 
                <MenuItem value={2023}>2023</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
              </Select>
            </Grid>

            <Grid item>
              <Select label="Course" value={course} onChange={handleSelectCourse}>
                <MenuItem value={"CPSC210"}>CPSC210</MenuItem>
                <MenuItem value={"CPSC213"}>CPSC213</MenuItem>
              </Select>
            </Grid>

            <Grid item>
              <Select label="Section" value={section} onChange={handleSelectSection}>
                <MenuItem value={101}>101</MenuItem>
                <MenuItem value={102}>102</MenuItem>
              </Select>
            </Grid>

            <Grid item>
              <Button variant="contained"
                sx={{
                  width: '150px', // Set the width
                  height: '55px', // Set the height
                  fontSize: '20px', // Set the font size
                }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </FormControl>


      </div>

      <div>
        <Input type="file" onChange={handleFileChange} />
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload
        </Button>
      </div>
    </Box>
  );
}
