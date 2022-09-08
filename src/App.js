import React, { StrictMode, createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Laptops from "./components/Laptops.jsx";
import Laptop from "./components/Laptop.jsx";
import Phones from "./components/Phones.jsx";
import Phone from "./components/Phone.jsx";
import Keyboards from "./components/Keyboards.jsx";
import Keyboard from "./components/Keyboard.jsx";
import Context from "./components/Context.jsx";

const App = () => {

  const [message, setMessage] = useState([]);

  const cartMessage = (message) => {
    setMessage(message);
  };

  return (
    <StrictMode>
      <Context.Provider value={message}>
        <BrowserRouter>
            <Navbar cartMessage={cartMessage}/>
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
      </Context.Provider>
    </StrictMode>
  )
};


export default App;