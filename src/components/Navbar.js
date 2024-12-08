import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#ef5350", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>
        Home
      </Link>
      <Link to="/favorites" style={{ color: "white" }}>
        Favorites
      </Link>
    </nav>
  );
};

export default Navbar;
