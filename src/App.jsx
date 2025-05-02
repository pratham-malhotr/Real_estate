import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";  // Correct path to Header
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/trends" element={<div>Market Trends</div>} />
        <Route path="/regions" element={<div>Regional Data</div>} />
        <Route path="/reports" element={<div>Reports</div>} />
      </Routes>
    </Router>
  );
};

export default App;
