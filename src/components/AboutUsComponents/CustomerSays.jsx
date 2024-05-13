import React from "react";
import "../../assets/css/style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import PersonImg from "../../assets/images/140122100921-53-531868_person-icon-png-transparent-png.png"


function CustomerSays() {
  return (
    <section className="what-our-client-says" id="Testimonials">
      <div className="container">
        <h3 className="heading2 bold text-center text-theme">
          What Our Customers Say
        </h3>
        <div className="customer-slider">
          <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="customer-card">
                <div className="cst-card-img">
                  <img
                    src={PersonImg}
                    alt="Bryce Walker"
                  />
                </div>
                <div className="cst-card-content">
                  <h4 className="heading6">Bryce Walker</h4>
                  <p className="para-md3 cst-country"></p>
                  <span className="quote-box">
                    <i className="fas fa-quote-right"></i>
                  </span>
                  <p>
                    Got a very nice communication with my travel agency
                    (Cheapfarebooking), clear guidelines and all the answers
                    also during the Holidays. Remarkable attitude!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customer-card">
                <div className="cst-card-img">
                  <img
                     src={PersonImg}
                    alt="Anna Perez"
                  />
                </div>
                <div className="cst-card-content">
                  <h4 className="heading6">Anna Perez</h4>
                  <p className="para-md3 cst-country"></p>
                  <span className="quote-box">
                    <i className="fas fa-quote-right"></i>
                  </span>
                  <p>
                    You provide a good &amp; much needed service.. Keep up the
                    good work.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customer-card">
                <div className="cst-card-img">
                  <img
                     src={PersonImg}
                    alt="Susan William"
                  />
                </div>
                <div className="cst-card-content">
                  <h4 className="heading6">Susan William</h4>
                  <p className="para-md3 cst-country"></p>
                  <span className="quote-box">
                    <i className="fas fa-quote-right"></i>
                  </span>
                  <p>
                    Brilliant company. Well done Cheapfarebooking keep up the
                    good work ??
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customer-card">
                <div className="cst-card-img">
                  <img
                     src={PersonImg}
                    alt="Elizabeth Myers"
                  />
                </div>
                <div className="cst-card-content">
                  <h4 className="heading6">Elizabeth Myers</h4>
                  <p className="para-md3 cst-country"></p>
                  <span className="quote-box">
                    <i className="fas fa-quote-right"></i>
                  </span>
                  <p>
                    Really good a lot of people use Cheapfarebooking and it is
                    recognized greatly and trusted
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customer-card">
                <div className="cst-card-img">
                  <img
                     src={PersonImg}
                    alt="Justin Smith"
                  />
                </div>
                <div className="cst-card-content">
                  <h4 className="heading6">Justin Smith</h4>
                  <p className="para-md3 cst-country"></p>
                  <span className="quote-box">
                    <i className="fas fa-quote-right"></i>
                  </span>
                  <p>
                    Easy to leave reviews and give an honest opinion of service
                    and quality, and also useful reviews from others when I wish
                    to purchase. Please keep it up.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customer-card">
                <div className="cst-card-img">
                  <img
                    src={PersonImg}
                    alt="Bryce Walker"
                  />
                </div>
                <div className="cst-card-content">
                  <h4 className="heading6">Bryce Walker</h4>
                  <p className="para-md3 cst-country"></p>
                  <span className="quote-box">
                    <i className="fas fa-quote-right"></i>
                  </span>
                  <p>
                    Got a very nice communication with my travel agency
                    (Cheapfarebooking), clear guidelines and all the answers
                    also during the Holidays. Remarkable attitude!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CustomerSays;
