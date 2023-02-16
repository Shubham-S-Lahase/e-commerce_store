import React from "react";
import "./Header.css";

const Header = () => {

  return (
    <>
      <div className="container-header">
        <div className="container-menu">
          <button type="button" class="button">
            ☰
          </button>
          <div class="dropdown">
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
