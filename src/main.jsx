import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import FifaSchedulePage from "./pages/FifaSchedulePage";
import "./tailwind.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fifa-schedule" element={<FifaSchedulePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
