import React from "react";
import { Link } from "react-router-dom";

import "./CollapsedNavbar.scss";
const CollapsedNavbar = ({ showNavbar, height }) => {
  return (
    <div
      id="overlay"
      style={{ height, overflow: height === "0%" ? "hidden" : "visible" }}
    >
      <span className="closebtn" onClick={() => showNavbar(false)}>
        &times;
      </span>

      <div className="overlay-content" onClick={() => showNavbar(false)}>
        <Link to="/">HOME</Link>
        <Link to="/shop/men">BOLLYWOOD</Link>
        <Link to="/shop/women">PROFESSIONS</Link>
        <Link to="/shop/boys">SUPERHEROES</Link>
        <Link to="/shop/girls">PARTY THEMES</Link>
        <Link to="/shop">COSPLAY</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  );
};

export default CollapsedNavbar;
