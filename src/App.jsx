import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Healthy from "./pages/Healthy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthy" element={<Healthy />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
