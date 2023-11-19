import { Box, Button, Grid, Typography, Select, MenuItem, Grow} from "@mui/material";
import { padding } from "@mui/system";
import React, { useState } from "react";


export default function MainSelector() {
  

  const [isResultOpen, setIsResultOpen] = useState(false);

  const [buttonClickCount, setButtonClickCount] = useState(0);


  return (
    <div>
      <Box sx={{ width:"1000px", height:"350px", display: "flex", flexDirection:"column", borderRadius: 2, p: 2, color:"#737373", backgroundColor:"#FFFFFF"}}>
        <Typography component="div" fontSize={48} sx={({height: "150px", color: "#737373", paddingLeft: "10px"})}>
          View and Submit Notes
        </Typography>

      <div>
        <form>
          <Grid container spacing={20} paddingLeft={"10px"}>
            <Grid item>
              <Select label="Year" defaultValue="Choose">
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
              </Select>
            </Grid>

              <Grid item>
                <Select label="Course">
                  <MenuItem value={"CPSC210"}>CPSC210</MenuItem>
                  <MenuItem value={"CPSC213"}>CPSC213</MenuItem>
                </Select>
              </Grid>

              <Grid item>
                <Select label="Section">
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
            
          </form>
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
        </Box>
        </Grow>
    </div>

  
  );
}