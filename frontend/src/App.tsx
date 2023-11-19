import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Title, TestHeader} from "./TestHeader";
import { Container } from "@mui/system";


function App() {
  const rootStyles = {
    backgroundColor: '#002145', // Change this to the desired background color
    minHeight: '100vh', // Ensures the background covers the full viewport height
  };


  return (
    <div style={rootStyles}>
      <Title />

      <Container sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <TestHeader />
      </Container>
    </div>
  );
}

export default App;
