import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Container maxWidth={"xl"} style={{ paddingTop: 15, paddingRight: 40, paddingLeft: 40 }}>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </Container>
    </div>
  );
}

export default App;
