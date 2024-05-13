import React, { useEffect, useState } from "react";
import FlightBooking from "./FlightBooking";
import Card from "./HomeComponents/Card";
import FeaturedOffers from "./HomeComponents/FeaturedOffers";
import DreamVacation from "./HomeComponents/DreamVacation";
import FeaturedDestination from "./HomeComponents/FeaturedDestination";
import Overview from "./HomeComponents/Overview";
import Testimonial from "./HomeComponents/Testimonial";
import WhyBook from "./HomeComponents/WhyBook";
import MobFixed from "./HomeComponents/MobFixed";
import Footer from "./Footer";
import HomeRibbon from "./HomeComponents/HomeRibbon";
import ChatIcon from "./HomeComponents/ChatIcon";

import BannerLogo1  from "../assets/images/banner-logo1.png"
import BannerLogo2  from "../assets/images/banner-logo2.png"
import BannerLogo3  from "../assets/images/banner-logo3.png"
import BannerLogo4  from "../assets/images/banner-logo4.png"
import BannerLogo5  from "../assets/images/banner-logo5.png"
import FeaturedBox from "./HomeComponents/FeaturedBox";
import FeaturedOffersTop from "./HomeComponents/FeaturedOffersTop";

import DealStar1  from "../assets/images/deal-star1.png"
import DealStar2  from "../assets/images/deal-star2.png"
import StartingModal from "./Modals/StartingModal";




function Home() {
  const [showModal,setShowModal] =useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000); // delay 2 seconds
  }, []);
  return (
    <>
      <div className="bg-scenary-pattern bg-cover bg-scroll h-full ">
        <div className="container ">
          <div className="pt-[20px] lg:pt-[150px] ">
            <h2 className="text-[2.813rem] text-white mb-8 pt-[100px] ">
              Compare 1000+ combinations,
              <br />
              <span className="font-bold">Book Cheap Flights</span> &amp; Save
              up to 50%
            </h2>
            <FlightBooking />
            <div>
              <div className="flex flex-row justify-center items-center my-6">
                <img
                  src={DealStar1}
                  alt=""
                />{" "}
                <span className="text-white font-semibold">
                  Great Deals Available With
                </span>
                <img
                  src={DealStar2}
                  alt=""
                />
              </div>
              <div className="pb-[35px]">
                <ul className="flex flex-row justify-center">
                  <li>
                    <a href="#">
                      <img
                        src={BannerLogo1}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={BannerLogo2}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                       src={BannerLogo3}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={BannerLogo4}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src={BannerLogo5}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="banner-btm bnr-rfr">
          <div className="container flex items-center justify-center">
            <p className="py-[15px]">
              CALL ONLY:{" "}
              <span className="text-yellow-300 font-bold">
                UP TO $300 LOWER THAN ONLINE!
              </span>{" "}
              SAVE EXTRA $300 WITH CODE [CHPAPFB5]
            </p>
          </div>
        </div>
        {/* <div className="banner-btm fixed" >
          <div className="container">
            <p className="para-md2">
              CALL ONLY: <span>UP TO $300 LOWER THAN ONLINE!</span> SAVE EXTRA
              $300 WITH CODE [CHPAPFB5]
            </p>
          </div>
        </div> */}
      </div>
      {/* <section className="py-[60px]">
        <div className="container   flex lg:flex-row lg:justify-center  flex-col items-center lg:gap-x-10 ">
          {cardData.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
        </div>
      </section> */}
      <HomeRibbon />
      <FeaturedBox />
      <FeaturedOffersTop />
      <div className="px-[60px] pb-[30px] ">
        <FeaturedOffers />
      </div>
      <section className="bg-scenary-pattern-2 bg-cover bg-center py-[60px]">
        <DreamVacation />
      </section>
      <section className="py-[60px]">
        <FeaturedDestination />
      </section>
      <section className="about-chf py-[60px] md:py-[30px]">
        <Overview />
      </section>
      <div>
        <Testimonial />
      </div>
      <div>
        <WhyBook />
      </div>
      <ChatIcon />
      <MobFixed />
      <Footer />
      <StartingModal showModal={showModal} setShowModal={setShowModal}  />
    </>
  );
}

export default Home;
