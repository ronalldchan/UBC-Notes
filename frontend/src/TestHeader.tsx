import { Box, Typography } from "@mui/material";

export function TestHeader() {
  return (
    <Box component="div" sx={{ width:"1000px", height:"350px", display: "flex", borderRadius: 2, p: 2, backgroundColor:"#FFFFFF" }}>
      <Typography fontSize={48} sx={({color: "#737373", paddingLeft: "10px"})}>
         View and Submit Notes
      </Typography>
    </Box>
  );
}


export function Title() {
  return (
    <Typography variant="h1" sx = {{color:"white", textAlign:"center" , paddingBottom: "10px",
                                      fontFamily: "arial"}}>UBCNotes</Typography>
  );
}