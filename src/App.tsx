import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import KendraLandingPage from "./components/KendraLandingPage";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import Documentation from "./components/Documentation";
import Onboarding from "./components/Onboarding";
import KendraSearch from "./components/KendraSearch";


function App() {
  return (
    <div className="App">
      <Navbar />
        <Container maxWidth={"xl"} style={{ paddingTop: 15, paddingRight: 40, paddingLeft: 40 }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/kendraDocumentation' element={<Documentation />} />
                <Route path='/onboardingProcess' element={<Onboarding />} />
                <Route path="/kendraHome" element={<KendraLandingPage />} />
                <Route path='/kendraIndexes' element={<h1>AWS Kendra Indexes</h1>} />
                <Route path='/kendraSearch' element={<KendraSearch />} />
            </Routes>
        </Container>
    </div>
  );
}

export default App;
