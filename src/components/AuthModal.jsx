import React, { useState } from "react";
import "./AuthModal.css";

function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    if (mode === "signup") {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      onAuthSuccess(email);
      onClose();
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.email === email && user.password === password) {
        onAuthSuccess(email);
        onClose();
      } else {
        setError("Invalid credentials");
      }
    }
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose} style={{ color: 'var(--text-light, #fff)', textShadow: '0 2px 8px #0008', fontSize: '2rem', background: 'none', border: 'none', position: 'absolute', top: 16, right: 20, cursor: 'pointer', zIndex: 10 }}>&times;</button>
        <h2 style={{ color: '#FFD600', textShadow: '0 2px 8px #0006' }}>{mode === "login" ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          <button type="submit">{mode === "login" ? "Login" : "Sign Up"}</button>
        </form>
        <div className="switch-mode">
          {mode === "login" ? (
            <span>Don't have an account? <button onClick={() => { setMode("signup"); setError(""); }}>Sign Up</button></span>
          ) : (
            <span>Already have an account? <button onClick={() => { setMode("login"); setError(""); }}>Login</button></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal; 