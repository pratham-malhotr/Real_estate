import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <div style={{ height: '1000px'}}>
        </div>

        <Routes>
          <Route path="/" element={<div>Home</div>} />
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
