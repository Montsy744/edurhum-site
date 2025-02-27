import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WelcomePage from "./welcome.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
