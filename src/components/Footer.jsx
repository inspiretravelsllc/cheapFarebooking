import React from "react";
import { Link } from "react-router-dom";
import FtrLogo1 from "../assets/images/ftr-logos1.png"
import FtrLogo2 from "../assets/images/ftr-logos2.png"
import FtrLogo3 from "../assets/images/ftr-logos3.png"
import FtrLogo4 from "../assets/images/ftr-logos4.png"
import FtrLogo5 from "../assets/images/ftr-logos5.png"
import AmadeusImg from "../assets/images/amadeus.png"
import cliaImg from "../assets/images/clia.png"
import AffirmlogoImg from "../assets/images/2560px-Affirm_logo.svg.png"
import afterpayImg from "../assets/images/afterpay-logo-png-black-transparent.png"





function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="subscribe">
            <div className="subs-txt">
              <h4 className="heading-sm3">Subscribe to Our Newsletter</h4>
              <p className="para-md3">
                There is a reason why 3000000+ Travellers book their flights
                <br />
                over the phone with exclusive deals.
              </p>
            </div>
            <form className="subs-form">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="subscribe_email"
                required=""
              />
              <button type="submit" className="newslater-btn subscribeBtn">
                Subscribe <i className="fas fa-arrow-right"></i>
              </button>
              <div className="newsletter_messages"></div>
            </form>
          </div>
          <div className="ftr-middle">
            <div className="frt-links">
              <h4 className="para-md2">Top Flight Destinations</h4>
              <ul>
                <li>
                  <a href="#" className="para-md3">
                    Philippines
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Italy
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    United Kingdom
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Spain
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Nigeria
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    France
                  </a>
                </li>
              </ul>
            </div>

            <div className="frt-links">
              <a className="para-md2" href="#">
                Popular Airlines
              </a>
              <ul>
                <li>
                  <a href="#" className="para-md3">
                    United
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Philippines
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Turkish
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Lufthansa
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Ethiopian
                  </a>
                </li>
              </ul>
            </div>

            <div className="frt-links">
              <a className="para-md2" href="#">
                Popular Airlines
              </a>
              <ul>
                <li>
                  <a href="#" className="para-md3">
                    United
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Philippine Airlines
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Turkish Airlines
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Lufthansa
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Ethiopian Airlines
                  </a>
                </li>
              </ul>
            </div>

            <div className="frt-links">
              <h4 className="para-md2">Help</h4>
              <ul>
                <li>
                  <Link
                   to="/faq"
                    className="para-md3"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Baggage Fees
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Airline Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Travel Blog
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="para-md3"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="frt-links">
              <h4 className="para-md2">Company</h4>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="para-md3"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Reviews
                  </a>
                </li>

                <li>
                  <Link
                    to="/privacyPolicy"
                    className="para-md3"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/termsandConditions"
                    className="para-md3"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <a href="#" className="para-md3">
                    Customer Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ftr-last">
            <div className="lst-links">
              <ul className="ftr-link-left">
                <li>
                  <a href="#">
                    <img
                      src={FtrLogo1}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                       src={FtrLogo2}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={FtrLogo3}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                       src={FtrLogo4}
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={FtrLogo5}
                      alt=""
                    />
                  </a>
                </li>
                <li className="byHarsh">
                  <a href="#">
                    <img
                      width="130px"
                      src={AmadeusImg}
                      alt=""
                      style={{ filter: "contrast(0.3)" }}
                    />
                  </a>
                </li>
                <li className="byHarsh">
                  <a href="#">
                    <img
                      width="50px"
                      src={cliaImg}
                      alt=""
                      style={{ filter: "brightness(50)", opacity: "0.3" }}
                    />
                  </a>
                </li>
                <li className="byHarsh">
                  <a href="#">
                    <img
                      width="80px"
                      src={AffirmlogoImg}
                      alt=""
                      style={{ filter: "brightness(500)", opacity: "0.3" }}
                    />
                  </a>
                </li>
                <li className="byHarsh">
                  <a href="#">
                    <img
                      width="120"
                      src={afterpayImg}
                      alt=""
                      style={{
                        filter: "contrast(0) brightness(3)",
                        opacity: "0.3",
                      }}
                    />
                  </a>
                </li>
              </ul>
              <ul className="ftr-social">
                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <p className="para-md3">
              Savings are calculated from an unrestricted "y" className
              published airfare of major airline carriers known as fully
              flexible airfare. Savings may vary based on availability, advance
              purchase, seasonality, minimum stay, maximum stay, travel dates
              and blackout dates. Savings may change if any of these factors
              vary without notice. Most discounted fares are non-refundable and
              have restrictions on dates and routing change after ticketing and
              prior to travel. Savings are based on our research on major
              airlines and routes as per 21 days advance purchase only.
              Displayed fares are based on historical data and subject to change
              and can't be guaranteed at the time of booking.
            </p>
          </div>
          <div className="copyright">
            Copyright © 2021-2024 cheapfarebooking.com
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
