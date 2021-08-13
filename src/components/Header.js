import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div id="main">
      <div className="header-heading">
          <div className='heading-paragraph'>
          <h1>
          A Simple, Safe & User-Freindly
          <br />
          Crypto Wallet for Everyone
        </h1>
        <p className="details">
          We provide ourselves on the ability to accomodate all levels of users
          to but and earn Bitcoin, Binance and thousands of other assets.
        </p>
          </div>
        <div className="header-btns">
          <NavLink to="/createwallet" className="header-btn">
            Create a Wallet
          </NavLink>
        </div>
        <div className="header-btns row" >
          <div className="col-md-3" style={{margin:'3vh'}}>
            <a href="https://www.apple.com/app-store/" target="_blank">
              <img className='mt-2 mt-md-0'
                src="./app.png"
                alt=""
                style={{ height: "auto", width: "100px" }}
              />
            </a>
          </div>
          <div className="col-md-3"  style={{margin:'3vh'}}>
            <a href="https://play.google.com/store/apps" target="_blank">
              <img
                src="./google.png"
                alt=""
                style={{ height: "auto", width: "100px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
