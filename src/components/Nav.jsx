import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart.jsx";

const Nav = () => {

  return (
    <header className="nav">
      <nav className="nav__wrapper">
        <Link to="/" className="nav__brand brand">
          <span className="brand__one">Lectro</span><span className="brand__two">Scope</span>
        </Link>
        <Cart />
      </nav>
    </header>
  )
}

export default Nav;
