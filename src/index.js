import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, AnimalHealth, Environmental, Footer } from "./components/exports";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/environmentalDiagnostics" element={<Environmental />} />
      <Route path="/animalHealthDiagnostics" element={<AnimalHealth/>}/>
    </Routes>
    <Footer />
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
