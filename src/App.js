import React from "react";
import './App.css';
import Header from "./Header/Header";
import HomePage from "./Home/HomePage";

function App() {
  return (
    <div className="App">
      <>
        <div class="container">
          <div class="App-Header"><Header/></div>
          <div class="App-Body"><HomePage/></div>
        </div>
      </>
    </div>
  );
}

export default App;
