import React from "react";
//import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/css/style.css"

// import required modules
import { Navigation } from "swiper/modules";
import PersonImg from "../../assets/images/140122100921-53-531868_person-icon-png-transparent-png.png"
import QuoteImg from "../../assets/images/quote-image.png"
function Testimonial() {
  return (
    <div>
      <section className="testimonial">
        <div className="container">
          {/* <div className="testi-slider-main relative">
           
            <div className="slider-btns testislider-btn">
              <button
                className="slider-next tn"
                tabIndex="0"
                role="button"
                aria-label="Next slide"
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button
                className="slider-prev tp"
                tabIndex="0"
                role="button"
                aria-label="Previous slide"
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div> */}
          <div className="testi-slider-main relative" >
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              {" "}
              <div className="testi-item">
                <span
                  className="yellow-semi"
                  data-swiper-parallax="-300"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></span>
                <a
                  className="profile-pic"
                  data-swiper-parallax="-200"
                  style={{
                    transitionDuration: "1500ms",
                    transform: " translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                    src={PersonImg}
                    alt=""
                  />
                </a>
                <img
                  src={QuoteImg}
                  data-swiper-parallax="-400"
                  className="quote"
                  alt=""
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                />
                <h3
                  className="heading-sm1 bold text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  What Our Customers Say
                </h3>
                <p
                  className="para-md2"
                  data-swiper-parallax="-250"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Got a very nice communication with my travel agency
                  (Cheapfarebooking), clear guidelines and all the answers also
                  during the Holidays. Remarkable attitude!
                </p>
                <h4
                  className="para-lg3 bold text-theme"
                  data-swiper-parallax="-400"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Bryce Walker
                </h4>
                <h5
                  className="para-md1 text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="testi-item">
                <span
                  className="yellow-semi"
                  data-swiper-parallax="-300"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></span>
                <a
                  className="profile-pic"
                  data-swiper-parallax="-200"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                   src={PersonImg}
                    alt="hello"
                  />
                </a>
                <img
                  src={QuoteImg}
                  data-swiper-parallax="-400"
                  className="quote"
                  alt=""
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                />
                <h3
                  className="heading-sm1 bold text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  What Our Customers Say
                </h3>
                <p
                  className="para-md2"
                  data-swiper-parallax="-250"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  You provide a good &amp; much needed service.. Keep up the
                  good work.
                </p>
                <h4
                  className="para-lg3 bold text-theme"
                  data-swiper-parallax="-400"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Anna Perez
                </h4>
                <h5
                  className="para-md1 text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="testi-item">
                <span
                  className="yellow-semi"
                  data-swiper-parallax="-300"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></span>
                <a
                  className="profile-pic"
                  data-swiper-parallax="-200"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                    src={PersonImg}
                    alt=""
                  />
                </a>
                <img
                  src={QuoteImg}
                  data-swiper-parallax="-400"
                  className="quote"
                  alt=""
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                />
                <h3
                  className="heading-sm1 bold text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  What Our Customers Say
                </h3>
                <p
                  className="para-md2"
                  data-swiper-parallax="-250"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Brilliant company. Well done Cheapfarebooking keep up the good
                  work ??
                </p>
                <h4
                  className="para-lg3 bold text-theme"
                  data-swiper-parallax="-400"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Susan William
                </h4>
                <h5
                  className="para-md1 text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-item">
                <span
                  className="yellow-semi"
                  data-swiper-parallax="-300"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></span>
                <a
                  className="profile-pic"
                  data-swiper-parallax="-200"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                   src={PersonImg}
                    alt=""
                  />
                </a>
                <img
                  src={QuoteImg}
                  data-swiper-parallax="-400"
                  className="quote"
                  alt=""
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                />
                <h3
                  className="heading-sm1 bold text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  What Our Customers Say
                </h3>
                <p
                  className="para-md2"
                  data-swiper-parallax="-250"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Really good a lot of people use Cheapfarebooking and it is
                  recognized greatly and trusted
                </p>
                <h4
                  className="para-lg3 bold text-theme"
                  data-swiper-parallax="-400"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Elizabeth Myers
                </h4>
                <h5
                  className="para-md1 text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-item">
                <span
                  className="yellow-semi"
                  data-swiper-parallax="-300"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></span>
                <a
                  className="profile-pic"
                  data-swiper-parallax="-200"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                  src={PersonImg}
                    alt=""
                  />
                </a>
                <img
                  src={QuoteImg}
                  data-swiper-parallax="-400"
                  className="quote"
                  alt=""
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                />
                <h3
                  className="heading-sm1 bold text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  What Our Customers Say
                </h3>
                <p
                  className="para-md2"
                  data-swiper-parallax="-250"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Easy to leave reviews and give an honest opinion of service
                  and quality, and also useful reviews from others when I wish
                  to purchase. Please keep it up.
                </p>
                <h4
                  className="para-lg3 bold text-theme"
                  data-swiper-parallax="-400"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Justin Smith
                </h4>
                <h5
                  className="para-md1 text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-item">
                <span
                  className="yellow-semi"
                  data-swiper-parallax="-300"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></span>
                <a
                  className="profile-pic"
                  data-swiper-parallax="-200"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                    src={PersonImg}
                    alt=""
                  />
                </a>
                <img
                  src={QuoteImg}
                  data-swiper-parallax="-400"
                  className="quote"
                  alt=""
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                />
                <h3
                  className="heading-sm1 bold text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  What Our Customers Say
                </h3>
                <p
                  className="para-md2"
                  data-swiper-parallax="-250"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Got a very nice communication with my travel agency
                  (Cheapfarebooking), clear guidelines and all the answers also
                  during the Holidays. Remarkable attitude!
                </p>
                <h4
                  className="para-lg3 bold text-theme"
                  data-swiper-parallax="-400"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Bryce Walker
                </h4>
                <h5
                  className="para-md1 text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testi-item">
                <span
                  className="yellow-semi"
                  data-swiper-parallax="-300"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></span>
                <a
                  className="profile-pic"
                  data-swiper-parallax="-200"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <img
                   src={PersonImg}
                    alt="hello"
                  />
                </a>
                <img
                  src={QuoteImg}
                  data-swiper-parallax="-400"
                  className="quote"
                  alt=""
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                />
                <h3
                  className="heading-sm1 bold text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: " translate3d(0px, 0px, 0px)",
                  }}
                >
                  What Our Customers Say
                </h3>
                <p
                  className="para-md2"
                  data-swiper-parallax="-250"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  You provide a good &amp; much needed service.. Keep up the
                  good work.
                </p>
                <h4
                  className="para-lg3 bold text-theme"
                  data-swiper-parallax="-400"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  Anna Perez
                </h4>
                <h5
                  className="para-md1 text-theme"
                  data-swiper-parallax="-100"
                  style={{
                    transitionDuration: "1500ms",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                ></h5>
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
