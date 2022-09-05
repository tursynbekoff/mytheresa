import React from "react";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Laptops from "./components/Laptops.jsx";
import Laptop from "./components/Laptop.jsx";
import Phones from "./components/Phones.jsx";
import Phone from "./components/Phone.jsx";
import Keyboards from "./components/Keyboards.jsx";
import Keyboard from "./components/Keyboard.jsx";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <nav className="nav">
          <Link to="/" className="brand">
            <span className="brand__one">Lectro</span><span className="brand__two">Scope</span>
          </Link>
        </nav>
        <Routes>
          <Route path="/laptops" exact element={<Laptops />}/>
          <Route path="/laptop" element={<Laptop />}/>
          <Route path="/phones" element={<Phones />}  />
          <Route path="/phone" element={<Phone />}  />
          <Route path="/keyboards" element={<Keyboards />}/>
          <Route path="/keyboard" element={<Keyboard />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
};


export default App;