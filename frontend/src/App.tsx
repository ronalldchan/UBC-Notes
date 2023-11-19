import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Title, TestHeader} from "./TestHeader";

function App() {
  const rootStyles = {
    backgroundColor: '#002145', // Change this to the desired background color
    minHeight: '100vh', // Ensures the background covers the full viewport height
  };


  return (
    <>
      <div style={rootStyles}>
        <Title />

        <TestHeader />
      </div>
    </>
  );
}

export default App;
