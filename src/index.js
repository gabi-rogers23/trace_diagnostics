import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, AnimalHealth, Environmental, HumanDiagnostics, TechnicalCompliance } from "./components/exports";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/environmentalDiagnostics" element={<Environmental />} />
      <Route path="/animalHealthDiagnostics" element={<AnimalHealth/>}/>
      <Route path="/humanDiagnostics" element={<HumanDiagnostics/>}/>
      <Route path="/technicalCompliance" element={<TechnicalCompliance/>}/>
    </Routes>
    </>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
