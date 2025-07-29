import React from "react";
import "../styles/components/Navbar.css";
import { Utensils } from "lucide-react";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Utensils size={24} />
          <span>DailyPlates</span>
        </div>
        <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/healthy" className="nav-link">Healthy</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;