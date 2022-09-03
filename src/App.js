import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Laptops from "./components/Laptops.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/laptops" element={<Laptops />}  />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;