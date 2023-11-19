import { Box, Typography, Select, MenuItem } from "@mui/material";
import React from "react";

export default function TestHeader() {
  
  return (
    <Box sx={{ width:"1000px", height:"350px", display: "flex", flexDirection:"column", borderRadius: 2, p: 2, color:"#737373", backgroundColor:"#FFFFFF"}}>
      <Typography component="div" fontSize={48} sx={({height: "150px", color: "#737373", paddingLeft: "10px"})}>
        View and Submit Notes
      </Typography>

      <div>
        <Select label="Year">
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>

        <Select label="Course">
          <MenuItem value={"CPSC210"}>CPSC210</MenuItem>
          <MenuItem value={"CPSC213"}>CPSC213</MenuItem>
        </Select>

        <Select label="Section">
          <MenuItem value={101}>101</MenuItem>
          <MenuItem value={102}>102</MenuItem>
        </Select>


      </div>
    </Box>
  );
}