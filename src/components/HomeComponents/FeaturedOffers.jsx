import React from "react";
import "../../App.css";
import BangkokImage from "../../assets/images/141221080256-BangkokImage.jpg"

import Washi1Image from "../../assets/images/151121065058-washi1.jpg"
import SingaporeImage from "../../assets/images/030122064505-Singapore.jpg"
import Chicago1Image from "../../assets/images/151121065108-chicago1.jpg"
import AtheImage from "../../assets/images/131121011444-athe.jpg"
import DubaiImage from "../../assets/images/131121010832-du.jpg"
import FranceImage from "../../assets/images/131121010217-fr.jpg"
import LondonImage from "../../assets/images/170122040303-lhr3.jpg"



function FeaturedOffers() {
  return (
    <div className="container lg:max-w-[900px] xl:max-w-[1100px] 2xl:mx-w-[1200px]">
      <div className="row">
        <div className="col-lg col-md-6 hover:-translate-y-9 hover:duration-1000" >
          <div className="sp-card">
            <a href="#">
              <img
                src={BangkokImage}
                alt=""
                className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px] "
              />
              <h4 className="heading5">Bangkok</h4>
              <p className="para-md3">Thailand</p>
            </a>
          </div>
        </div>
        <div className="col-lg col-md-6 hover:-translate-y-9 hover:duration-1000" >
          <div className="sp-card">
            <a href="#">
              <img
                src={Washi1Image}
                alt=""
                className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
              />
              <h4 className="heading5">Washington</h4>
              <p className="para-md3">United States</p>
            </a>
          </div>
        </div>
        <div className="col-lg col-md-6 hover:-translate-y-9 hover:duration-1000" >
          <div className="sp-card">
            <a href="#">
              <img
                src={SingaporeImage}
                alt=""
                className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
              />
              <h4 className="heading5">Singapore</h4>
              <p className="para-md3">Singapore</p>
            </a>
          </div>
        </div>
        <div className="col-lg col-md-6 hover:-translate-y-9 hover:duration-1000" >
          <div className="sp-card">
            <a href="#">
              <img
                src={Chicago1Image}
                alt=""
                className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
              />
              <h4 className="heading5">Chicago</h4>
              <p className="para-md3">United States</p>
            </a>
          </div>
        </div>
        <div className="col-lg col-md-6 hover:-translate-y-9 hover:duration-1000" >
          <div className="sp-card">
            <a href="#">
              <img
                src={AtheImage}
                alt=""
                className="aspect-[49/30] object-cover flex-grow-1 rounded-[4px]"
              />
              <h4 className="heading5">Athens</h4>
              <p className="para-md3">Greece</p>
            </a>
          </div>
        </div>

        <div className="col-lg-12 div-saperator"></div>

        <div className="col-lg-4 col-md-6 hover:-translate-y-9 hover:duration-1000" >
          <div className="sp-card">
            <a href="#" className="flex flex-col">
              <img
                src={DubaiImage}
                alt=""
                className="aspect-[413/220] object-cover flex-grow-1 rounded-[4px]"
              />
              <h4 className="heading5">Dubai</h4>
              <p className="para-md3">United Arab Emirates</p>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 hover:-translate-y-9 hover:duration-1000" >
          <div className="sp-card">
            <a href="#" className="flex flex-col">
              <img
                src={FranceImage}
                alt=""
                className="aspect-[413/220] object-cover flex-grow-1 rounded-[4px]"
              />
              <h4 className="heading5">Paris</h4>
              <p className="para-md3">France</p>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 hover:-translate-y-9 hover:duration-1000" >
          <div className="sp-card">
            <a href="#" className="flex flex-col">
              <img
                src={LondonImage}
                className="aspect-[413/220] object-cover flex-grow-1 rounded-[4px]"
              />
              <h4 className="heading5">London</h4>
              <p className="para-md3">United Kingdom</p>
            </a>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="mt-[20px]">
            <p className="opacity-60 text-[1.063rem]">Average Price based on season. </p>
            <span className="w-full h-[1px] my-[.2rem] mx-[0.5rem] bg-black opacity-10 block"></span>
            <p className="text-black opacity-100 font-serif leading-tight font-light">
              Savings are calculated from an unrestricted "y" class
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
        </div>
      </div>
    </div>
  );
}

export default FeaturedOffers;
