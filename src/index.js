import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NavBar, AnimalHealth, Environmental } from "./components/exports";

const App = () => {
  return (
    <>
   <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/environmentalDiagnostics" element={<Environmental />} />
      <Route path="/animalHealthDiagnostics" element={<AnimalHealth/>}/>
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
