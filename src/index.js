import React from "react";
import { createRoot } from "react-dom/client";
import { BrowswerRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/exports";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowswerRouter>
    <App />
  </BrowswerRouter>
);
