import React from "react";
import "../../App.css"
import AboutChf from "../../assets/images/about-chf.png"
import { NavLink } from "react-router-dom";

function Overview() {
  return (
    <div>
      
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={AboutChf}
                className="mt-[-74px] rounded-[4px] max-w-full h-auto"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="chf-txt">
                <h5 className="text-[1.25rem] font-bold text-[#f8a131]">Overview</h5>
                <h2 className="text-[1.7rem] text-[#0e2a5c] font-bold ">
                  About Cheap Fare Booking
                </h2>
                <p>
                  Cheapfarebooking.com is one of the largest Online Flights
                  booking platforms, serving the people of North America since
                  2013, established as an online travel agency by Insta Journey
                  LLC. We specialize in providing the best flight deals that are
                  not available online, complete with personalized 24/7 customer
                  support. Personal Travel Managers will help you find and book
                  airline tickets according to your budget and flight
                  preferences. Our Artificial Intelligence Equipped Booking
                  Engine based search and booking facilities make it simple to
                  find a Cheap Airline Tickets and Book Customized Reservation
                </p>
                <NavLink
                  to="/contact"
                  className="btn btn-link"
                >
                  Read more{" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="long-arrow-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="svg-inline--fa fa-long-arrow-right fa-w-14"
                  >
                    <path
                      fill="currentColor"
                      d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                      className=""
                    ></path>
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
  
    </div>
  );
}

export default Overview;
