import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleMouseDown = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="container-header">
        <div className="container-menu">
          <button type="button" className="button" onClick={handleClick}>
            ☰
          </button>
          {open && (
            <>
              <div className="dropdown">
                <ul>
                  <li>Games</li>
                  <li>Fan Gear</li>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="TC" onMouseDown={handleMouseDown}>
          <div className="app-title">
            <h2>Anavrin</h2>
            <p>Video Games & Fan Gear</p>
          </div>
          <div className="cart-logo">
            <Link to="/cart"><img src={require("./R.png")}/></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
