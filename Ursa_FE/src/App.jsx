import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 路徑

// 導入頁面
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  );
}

export default App;
