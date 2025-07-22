import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MarketTrends from "./pages/MarketTrends";
import AuthModal from "./components/AuthModal";
import "./App.css";

function ProtectedRoute({ isAuthenticated, children, onShowAuth }) {
  const location = useLocation();
  useEffect(() => {
    if (!isAuthenticated) {
      onShowAuth();
    }
  }, [isAuthenticated, onShowAuth]);
  return isAuthenticated ? children : null;
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="scroll-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

function AppWrapper() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load dark mode from localStorage or system preference
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setDarkMode(true);
    else if (saved === 'false') setDarkMode(false);
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email) {
      setIsAuthenticated(true);
      setUserEmail(user.email);
    }
  }, []);

  const handleAuthSuccess = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
  };

  const handleShowAuth = () => {
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
    if (!isAuthenticated) {
      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUserEmail("");
    navigate("/");
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="main-bg" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        userEmail={userEmail}
        onLogout={handleLogout}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/market-trends" element={
            <ProtectedRoute isAuthenticated={isAuthenticated} onShowAuth={handleShowAuth}>
              <MarketTrends />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
      <Footer />
      <ScrollToTopButton />
      <AuthModal isOpen={authModalOpen} onClose={handleCloseAuth} onAuthSuccess={handleAuthSuccess} />
    </div>
  );
}

const App = () => (
  <Router>
    <AppWrapper />
    </Router>
  );

export default App;

