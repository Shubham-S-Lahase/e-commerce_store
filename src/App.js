import React from "react";
import "./App.css";
import Header from "./Header/Header";
import HomePage from "./Home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Cart from "./Buy/Cart";
import Fangear from "./Fangear/Fangear";

function App() {
  return (
    <div className="App">
      <>
        <CartProvider>
          <Router>
          <div class="container">
            <div class="App-Header">
              <Header />
            </div>
            <div class="App-Body">
                <Routes>
                  <Route path="/" index element={<HomePage />} />
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="/fangears" element={<Fangear/>} />
                </Routes>
            </div>
          </div>
          </Router>
        </CartProvider>
      </>
    </div>
  );
}

export default App;
