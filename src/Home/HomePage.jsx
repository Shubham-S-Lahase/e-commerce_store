import React from "react";
import "./HomePage.css";

const data = [];

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        {data.map((product) => {
          <div>
            <img src={require({})} />
            <span>{}</span>
            <span id="price">{}</span>
          </div>;
        })}
      </div>
    </>
  );
};

export default HomePage;
