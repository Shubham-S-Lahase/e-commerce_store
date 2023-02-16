import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  let countclick = 0;
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
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                  <li>Option 4</li>
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
            <img src={require("./R.png")}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
