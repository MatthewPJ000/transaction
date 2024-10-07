// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Trading from "./pages/trading/index";
import TradingViewWidget from "./components/TradingViewChart";
import Header from "./components/Header";
import TransactionPanel from "./pages/admin/AdminPanel";
import UserPanel from "./pages/admin/AdminUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Trading />} /> {/* Renders at / */}
          <Route path="/trading" element={<TradingViewWidget />} />{" "}
          {/* Renders at /trading */}
          <Route path="/admin" element={<TransactionPanel />} />{" "}
          {/* Renders at /admin/transaction */}
          <Route path="/user" element={<UserPanel />} />{" "}
          {/* Renders at /admin/user */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
