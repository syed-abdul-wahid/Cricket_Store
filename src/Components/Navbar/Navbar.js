import React from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import Logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  const LinkStyle = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <>
      <img id="Logo" src={Logo} alt="Logo" />
      <div className="Navbar__Primary">
        <i>
          <FaShoppingCart size={28} />
        </i>
        <i>
          <FaUserCircle size={28} />
        </i>
      </div>
      <div className="Navbar__Secondary">
        <span>
          <Link style={LinkStyle} to="/Batting">
            Batting
          </Link>
        </span>
        <span>
          <Link style={LinkStyle} to="/Bowling">Bowling</Link>
        </span>
        <span>
          <Link style={LinkStyle} to="/WicketKeeping">WicketKeeping</Link>
        </span>
        <span>
          <Link style={LinkStyle} to="/Clothing">Clothing</Link>
        </span>
        <span>
          <Link style={LinkStyle} to="/Accessories">Accessories</Link>
        </span>
      </div>
    </>
  );
}

export default Navbar;
