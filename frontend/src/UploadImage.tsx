import React, { ChangeEvent, useState } from "react";
import { Button, Input } from "@mui/material";
import { ref, uploadBytes } from "@firebase/storage";
import { storage } from "./firebase";

export default function UploadImage() {
  const [img, setImg] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImg(file);
    }
  };

  const handleUpload = () => {
    if (img) {
      const imgRef = ref(storage, "files/test");
      uploadBytes(imgRef, img);
      // Implement your upload logic here
      console.log("File name:", img.name);
      console.log("File size:", img.size);
      console.log("File type:", img.type);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
}
