import React from "react";
import LassVegasImg from "../../assets/images/011221084913-LASStrip.jpg"
import Mexico1Img from "../../assets/images/mexico1.jpg"
import Washi1Img from "../../assets/images/151121065058-washi1.jpg"
import Chicago1Img from "../../assets/images/151121065108-chicago1.jpg"
import Miami1Img from "../../assets/images/151121080626-miami1.jpg"
import PixabayImg from "../../assets/images/030122025835-pexels-pixabay-208745.jpg"


function FeaturedDestination() {
  return (
    <div>
      
        <div className="container">
          <h3 className="text-[2.188rem] font-bold text-[#0e2a5c] mb-3">
            Featured Destinations
          </h3>
          <div className="row">
            <div className="col-lg-2 col-md-4 hover:-translate-y-9 hover:duration-1000">
              <div className="sp-card">
                <a href="#" className="flex flex-col">
                  <img
                    src={LassVegasImg}
                    alt="" className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
                  />
                  <h4 className="heading5">Las Vegas</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 hover:-translate-y-9 hover:duration-1000">
              <div className="sp-card">
                <a href="#" className="flex flex-col">
                  <img
                    src={Mexico1Img}
                    alt="" className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
                  />
                  <h4 className="heading5">Mexico City</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 hover:-translate-y-9 hover:duration-1000">
              <div className="sp-card">
                <a href="#" className="flex flex-col">
                  <img
                    src={Washi1Img}
                    alt="" className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
                  />
                  <h4 className="heading5">Washington</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 hover:-translate-y-9 hover:duration-1000">
              <div className="sp-card">
                <a href="#" className="flex flex-col">
                  <img
                    src={Chicago1Img}
                    alt="." className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
                  />
                  <h4 className="heading5">Chicago</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 hover:-translate-y-9 hover:duration-1000">
              <div className="sp-card">
                <a href="#" className="flex flex-col"> 
                  <img
                    src={Miami1Img}
                    alt="" className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
                  />
                  <h4 className="heading5">Miami</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 hover:-translate-y-9 hover:duration-1000">
              <div className="sp-card">
                <a href="#" className="flex flex-col">
                  <img
                    src={PixabayImg}
                    alt="" className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
                  />
                  <h4 className="heading5">San Francisco</h4>
                </a>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="mt-[20px]">
                <p className="mb-0 opacity-60 text-[1.063rem] ">Average Price based on season. </p>
                <span className="w-full h-[1px] my-[.2rem] mx-[0.5rem] bg-black opacity-10 block"></span>
                <p className="text-black opacity-100 font-serif leading-tight font-light">
                  Savings are calculated from an unrestricted "y" class
                  published airfare of major airline carriers known as fully
                  flexible airfare. Savings may vary based on availability,
                  advance purchase, seasonality, minimum stay, maximum stay,
                  travel dates and blackout dates. Savings may change if any of
                  these factors vary without notice. Most discounted fares are
                  non-refundable and have restrictions on dates and routing
                  change after ticketing and prior to travel. Savings are based
                  on our research on major airlines and routes as per 21 days
                  advance purchase only. Displayed fares are based on historical
                  data and subject to change and can't be guaranteed at the time
                  of booking.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default FeaturedDestination;
