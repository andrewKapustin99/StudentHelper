import React from "react";
import { Route, Routes } from "react-router";
import { Navigationbar } from "./components/Navbar";
import { AboutPage } from "./pages/About";
import { MainPAge } from "./pages/Main";
import { MaterialsPage } from "./pages/Materials";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<MainPAge />} />
        <Route path="/materials" element={<MaterialsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
