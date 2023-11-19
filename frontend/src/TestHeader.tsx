import { Box, Typography } from "@mui/material";

export function TestHeader() {
  return (
    <Box component="div" sx={{ borderRadius: 5, width: "90vw", height: 100, p: 2, color:"white", backgroundColor:"#FFFFFF"}}>
      This is a section container
    </Box>
  );
}


export function Title() {
  return (
    <Typography variant="h1" sx = {{color:"white", textAlign:"center"}}>UBCNotes</Typography>
  );
}