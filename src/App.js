import React from "react";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Laptops from "./components/Laptops.jsx";
import Laptop from "./components/Laptop.jsx";
import Phones from "./components/Phones.jsx";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">ElectroScope</Link>
        </nav>
        <Routes>
          <Route path="/laptops" element={<Laptops />}  />
          <Route path="/phones" element={<Phones />}  />
          <Route path="/laptop/:id" element={<Laptop />}  />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
};

export default App;