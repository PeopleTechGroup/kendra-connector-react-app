import React from "react";
import "./App.css";
import Navbar from "./components/AppComponents/Navbar";
import Home from "./components/AppComponents/Home";
import KendraLandingPage from "./components/KendraLandingPage";
import { Container } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import Documentation from "./components/Documentation";
import ManageIndices from "./components/KendraIndices/ManageIndices";
import ManageKendraIndices from "./components/KendraIndices/ManageKendraIndices";
import KendraSearch from "./components/KendraIndices/KendraSearch";
import Onboarding from "./components/Onboarding";
import CreateIndex from "./components/KendraIndices/CreateIndex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container
        maxWidth={"xl"}
        style={{ paddingTop: 15, paddingRight: 40, paddingLeft: 40 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kendraHome" element={<KendraLandingPage />} />
          <Route path="/kendraDocumentation" element={<Documentation />} />
          <Route path="/onboardingProcess" element={<Onboarding />} />
          <Route path="/kendraIndexes" element={<ManageIndices />} />
          <Route path="/createKendraIndex" element={<CreateIndex />} />
          <Route
            path="/manageKendraIndices"
            element={<ManageKendraIndices />}
          />
          <Route path="/kendraSearch" element={<KendraSearch />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
