import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home"; 
import About from "./components/About"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {}
          <Route path="/trends" element={<div>Market Trends</div>} />
          <Route path="/regions" element={<div>Regional Data</div>} />
          <Route path="/reports" element={<div>Reports</div>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

