import React, { useRef } from "react";
import "../assets/css/style.css";
import { NavLink, Outlet } from "react-router-dom";
import "../assets/css/media.css";
import "../App.css";
import TopHeadIcon3 from "../assets/images/top-head-icon3.png"
import TopHeadIcon2 from "../assets/images/top-head-icon2.png"
import TopHeadIcon1 from "../assets/images/top-head-icon3.png"
import TopHeadIcon4 from "../assets/images/top-head-icon4.png"
import Logo from "../assets/images/logo.png"
import tollfree from "../assets/images/toll-free.png"
import languageicon from "../assets/images/language-icon.png"


import Headroom from "react-headroom";

function Header() {
  const trackSideNavClick = useRef(null);
  const handleClick = () => {
    trackSideNavClick.current = !trackSideNavClick.current;
    if (trackSideNavClick.current) {
      document.querySelector("body").setAttribute("class", "side-menu-opened");
    } else {
      document.querySelector("body").removeAttribute("class");
    }
  };

  return (
    <div>
      <Headroom>
        
          <div className="top-collapsable bg1">
            <div className="container">
              <div className="row gx-5 gx-lg-3">
                <div className="col-lg-3">
                  <h5 className="heading8">
                    <img
                      src={TopHeadIcon3}
                      alt=""
                    />{" "}
                    Price Drop Guarantee
                  </h5>
                  <p className="para-sm2" style={{ display: "none" }}>
                    Not sure if you are getting the best deal? We will monitor
                    the price for 24 hours from the time of booking and in case
                    of a fare drop, you will get the price difference.
                  </p>
                </div>

                <div className="col-lg-3">
                  <h5 className="heading8">
                    <img
                     src={TopHeadIcon1}
                      alt=""
                    />{" "}
                    Free Exchange
                  </h5>
                  <p className="para-sm2" style={{ display: "none" }}>
                    Feel worried about booking tickets now? Buy with more
                    confidence. Our eligible trusted airline partners are
                    waiving their change fees.
                  </p>
                </div>

                <div className="col-lg-3">
                  <h5 className="heading8">
                    <img
                      src={TopHeadIcon4}
                      alt=""
                    />{" "}
                    Book Now - Pay Later!
                  </h5>
                  <p className="para-sm2" style={{ display: "none" }}>
                    Not ready to pay the full ticket amount now? We also offer
                    bookings with 3, 6 or 12 monthly instalments.
                  </p>
                </div>

                <div className="col-lg-3">
                  <h5 className="heading8">
                    <img
                     src={TopHeadIcon2}
                      alt=""
                    />{" "}
                    Fare Lock
                  </h5>
                  <p className="para-sm2" style={{ display: "none" }}>
                    Need more time to decide? We can lock your fare from 24 to
                    48 hours to hold your seat.
                  </p>
                </div>
              </div>
              <div className="close-icon">
                <i className="fas fa-times"></i>
              </div>
            </div>
          </div>

          <div className="main-header bg-theme">
            <div className="container">
              <div className="main-left">
                <a href="/" className="logo">
                  <img
                    src={Logo}
                    alt=""
                  />
                </a>

                <ul className="nav" id="header-nav">
                  <li className="nav-list">
                    <NavLink
                      to="/"
                      className={({ isActive }) => {
                        if (isActive)
                          return "para-md1 border-[#fed03b] border-b-[3px]";
                        else return "para-md1";
                      }}
                    >
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-list">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => {
                        if (isActive)
                          return "para-md1 border-[#fed03b] border-b-[3px]";
                        else return "para-md1";
                      }}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-list">
                    <NavLink
                      to="/about"
                      className={({ isActive }) => {
                        if (isActive)
                          return "para-md1 border-[#fed03b] border-b-[3px]";
                        else return "para-md1";
                      }}
                    >
                      About us
                    </NavLink>
                  </li>
                </ul>

                <div className="backdroap"></div>
              </div>

              <div className="main-right">
                <a href="tel:+1 888-316-4927" className="toll-free mb-2">
                  <img
                    src={tollfree}
                    alt=""
                  />
                  <div className="call-content">
                    <p className="para-md3">
                      For phone-Exclusive Deals Call Us
                    </p>
                    <span className="para-lg3">+1 888-316-4927</span>
                  </div>
                </a>

                <div className="header-btns">
                  <div className="select-wrap">
                    <img
                      src={languageicon}
                      alt=""
                    />
                    <select>
                      <option>English</option>
                    </select>
                  </div>
                </div>
                <div className="header-menu" onClick={handleClick}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        
      </Headroom>
      <Outlet />
    </div>
  );
}

export default Header;
