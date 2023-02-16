import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div>
            <img src={require('../ProductImages/p1.webp')}/>
            <span>INFO THE BEACH</span>
            <span id="price">RS 1200</span>
        </div>
        <div>
            <img src={require('../ProductImages/p2.webp')}/>
            <span>SLIME RANCHER PLORTABLE EDITION</span>
            <span id="price">RS 1270</span>
        </div>
        <div>
            <img src={require('../ProductImages/p3.webp')}/>
            <span>OBLETS FOR NINTENDO SWITCH</span>
            <span id="price">RS 978</span>
        </div>
        <div>
            <img src={require('../ProductImages/p4.webp')}/>
            <span>STARDEW VALLEY COLLECTOR'S EDITION</span>
            <span id="price">RS 1590 - RS 1978</span>
        </div>
        <div>
            <img src={require('../ProductImages/p5.webp')}/>
            <span>UNDERTALE COLLECTOR'S EDITIONS</span>
            <span id="price">RS 789 - RS 1765</span>
        </div>
        <div>
            <img src={require('../ProductImages/p6.webp')}/>
            <span>HOLLOW KNIGHT COLLECTOR'S EDITIONS</span>
            <span id="price">RS 1200</span>
        </div>
        <div>
            <img src={require('../ProductImages/p7.webp')}/>
            <span>OMORI FOR NINTENDO SWITCH AND PLAYSTATION 4</span>
            <span id="price">RS 876</span>
        </div>
        <div>
            <img src={require('../ProductImages/p8.webp')}/>
            <span>BUGSNAX PHYSICAL GAME</span>
            <span id="price">RS 1067</span>
        </div>
        <div>
            <img src={require('../ProductImages/p9.webp')}/>
            <span>STARDEW VALLEY STANDARD EDITION</span>
            <span id="price">RS 677 - RS 1100</span>
        </div>
        <div>
            <img src={require('../ProductImages/p10.webp')}/>
            <span>HOLLOW KNIGHT STANDARD EDITION</span>
            <span id="price">RS 677 - RS 1100</span>
        </div>
        <div>
            <img src={require('../ProductImages/p11.webp')}/>
            <span>UNDERTALE STANDARD EDITION</span>
            <span id="price">RS 666</span>
        </div>
        <div>
            <img src={require('../ProductImages/p12.webp')}/>
            <span>HYPNOSPACE OUTLAW FOR NINTENDO SWITCH</span>
            <span id="price">RS 1200</span>
        </div>
        <div>
            <img src={require('../ProductImages/p13.webp')}/>
            <span>LATER ALLIGATOR FOR NINTENDO SWITCH</span>
            <span id="price">RS 1200</span>
        </div>
        <div>
            <img src={require('../ProductImages/p14.webp')}/>
            <span>BABA IS YOU FOR INTENDO SWITCH</span>
            <span id="price">RS 1200</span>
        </div>
        <div>
            <img src={require('../ProductImages/p15.webp')}/>
            <span>SPELUNKY COLLECTOR'S EDITION</span>
            <span id="price">RS 1900</span>
        </div>
        <div>
            <img src={require('../ProductImages/p16.webp')}/>
            <span>UNDERTALE COLLECTOR'S EDITION FOR XBOX ONE</span>
            <span id="price">Coming Soon</span>
        </div>
      </div>
    </>
  );
};

export default HomePage;
