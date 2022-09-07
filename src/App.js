import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Nav.jsx";
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
          <Navbar />
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