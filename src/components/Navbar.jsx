import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">✦ Meenakshi Portal</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/registration">Register Now</Link>
      </div>
    </nav>
  );
}