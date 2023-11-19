import { Box, Typography } from "@mui/material";

export default function TestHeader() {
  return (
    <Box component="div" sx={{ width:"1000px", height:"350px", display: "flex", borderRadius: 2, p: 2, backgroundColor:"#FFFFFF"}}>
      <Typography fontSize={48} sx={({color: "#737373", paddingLeft: "10px"})}>
         View and Submit Notes
      </Typography>
    </Box>
  );
}