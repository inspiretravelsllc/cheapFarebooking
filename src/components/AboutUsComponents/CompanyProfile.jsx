import React, { useState } from "react";
import CpTabImage from "../../assets/images/cp-tab-img.png";
import "../../assets/css/style.css"


function CompanyProfile() {
    const [spanWidth ,setSpanWidth] = useState("33%");
    const [spanLeft ,setSpanLeft] = useState("0px");
    const [dummy , setDummy] = useState(false);

    const handleTestimonialClick = () => {
        const testimonial = document.getElementById("testimonial-tab");
        console.log("testimonial",testimonial.offsetLeft)
        setSpanLeft(toString(testimonial.offsetLeft));
        

        if(dummy) setDummy(false);
        else setDummy(true);
    }
    console.log("spanLeft",typeof spanLeft)
  return (
    <section className="company-profile">
      <div className="container">
        <h3 className="heading2 bold text-theme mb-4 text-center">
          Company Profile
        </h3>

        <div className="theme-tab cp-tab-top">
          <ul className="nav nav-tabs" id="cptab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                href="#about-company"
                className="nav-link active"
                id="aboutCompany-tab"
                data-bs-toggle="tab"
                data-bs-target="#aboutCompany"
                type="button"
                role="tab"
                aria-controls="aboutCompany"
                aria-selected="true"
              >
                About Company
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                href="#whyChooseUs"
                className="nav-link"
                id="why-choose-us-tab"
                data-bs-toggle="tab"
                data-bs-target="#why-choose-us"
                type="button"
                role="tab"
                aria-controls="why-choose-us"
                aria-selected="false"
              >
                Why Choose Us?
              </a>
            </li>

            <li className="nav-item" role="presentation" onClick={handleTestimonialClick}>
              <a
                href="#Testimonials"
                className="nav-link"
                id="testimonial-tab"
                data-bs-toggle="tab"
                data-bs-target="#testimonial"
                type="button"
                role="tab"
                aria-controls="testimonial"
                aria-selected="false"
                
              >
                Testimonials
              </a>
            </li>
          </ul>
          <span
          id="marker"
            className="marker"
            style={{ left: `${spanLeft}`, width: `${spanWidth}` }}
          ></span>
          
        </div>
        <div className="tab-content" id="cptabContent">
          <div
            className="tab-pane fade show active"
            id="aboutCompany"
            role="tabpanel"
            aria-labelledby="aboutCompany-tab"
          >
            <div className="cp-tab-content" id="about-company">
              <div className="cp-tb-ct-wrap">
                <div className="cp-tb-txt">
                  <h3 className="heading-md1 bold text-theme">About Company</h3>
                  <p className="para-md2">
                    Cheapfarebooking.com is one of the largest Online Flights
                    booking platforms, serving the people of North America since
                    2013, established as an online travel agency by Insta
                    Journey LLC. We specialize in providing the best flight
                    deals that are not available online, complete with
                    personalized 24/7 customer support. Personal Travel Managers
                    will help you find and book airline tickets according to
                    your budget and flight preferences. Our Artificial
                    Intelligence Equipped Booking Engine based search and
                    booking facilities make it simple to find a Cheap Airline
                    Tickets and Book Customized Reservation
                  </p>
                  <h4 className="heading-md1 bold text-theme">
                    How Cheap Fare Booking Works? Swift, Fast and Smart
                  </h4>
                  <p className="para-md2">
                    Call for Cheap Flights Cheap Fare Booking has unique
                    contracts with Airlines and access to unpublished fares
                    unavailable online. Uncover the best deals to top
                    destinations around the world by calling your Travel Agent.
                    Get FREE Quotes Free trip planning and personalized
                    itineraries available 24/7. Discuss travel plans with your
                    personal travel agent and get as many details as you need.
                    Pay Securely Confirm your travel and book securely online.
                    Cheap Fare Booking offer a variety of payment solutions, and
                    we want you to feel confident by protecting your data and
                    sensitive details.
                  </p>
                  <h4 lass="heading-md2 bold text-theme">What we ensure:</h4>
                  <p className="para-md2">
                    Our mission is to make it easy for every traveler to search
                    and compare the best flight deals. Millions of travelers
                    rely on Cheap Fare Booking for the best choice of flights
                    and travel deals. Our handy, personalized online travel
                    booking experience is what sets us apart from the rest of
                    the industry. One can never think of anything else if served
                    once with grace.
                  </p>
                  <h4 lass="heading-md2 bold text-theme">Book Cheap Flights</h4>
                  <p className="para-md2">
                    Book your flight tickets via our easy-to-use website, mobile
                    site &amp; swift checkout process for all your future travel
                    needs. We take great pride in our 24/7 support team of
                    travel experts who are equipped to handle any sort of travel
                    requirement &amp; over 10,00,000 delighted customers.
                  </p>
                  <h4 lass="heading-md2 bold text-theme">
                    Concierge Services:{" "}
                  </h4>
                  <p className="para-md2">
                    Do not miss the possibility to book our additional services
                    (paying only for the service itself), that we are glad to
                    offer for our loyal customers: hotel booking, apartment
                    reservations, chauffeur drive services, visa information and
                    lounge access.
                  </p>
                  <p className="para-md2">
                    Weather forecast, Currency exchange rates, News and Sports
                    Information, Best Places to visit, Shopping, Local activity
                    recommended, Embassy and consulate contacts, Time difference
                    across globe are few exclusive features offered under
                    concierge services. We always have an exclusive CALL only
                    Deals and unpublished deals we ensure our team of travel
                    experts is available round the clock for all your queries.
                    Hurry Now!! Dial +1 888-316-4927 to get the best offers now.
                    Book at deeply discounted rates available in the market.
                  </p>
                </div>
                <div className="cp-tb-img">
                  <img className="img-fluid" src={CpTabImage} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="why-choose-us"
            role="tabpanel"
            aria-labelledby="why-choose-us-tab"
          >
            <div className="cp-tab-content">
              <div className="cp-tb-ct-wrap">
                <div className="cp-tb-txt">
                  <h3 className="heading-md1 bold text-theme">Why Choose Us</h3>
                  <p className="para-md2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="para-md2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p className="para-md2">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="cp-tb-img">
                  <img className="img-fluid" src={CpTabImage} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="OurClients"
            role="tabpanel"
            aria-labelledby="OurClients-tab"
          >
            <div className="cp-tab-content">
              <div className="cp-tb-ct-wrap">
                <div className="cp-tb-txt">
                  <h3 className="heading-md1 bold text-theme">Our clients</h3>
                  <p className="para-md2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="para-md2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p className="para-md2">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="cp-tb-img">
                  <img className="img-fluid" src={CpTabImage} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="testimonial"
            role="tabpanel"
            aria-labelledby="testimonial-tab"
          >
            <div className="cp-tab-content">
              <div className="cp-tb-ct-wrap">
                <div className="cp-tb-txt">
                  <h3 className="heading-md1 bold text-theme">Testimonial</h3>
                  <p className="para-md2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="para-md2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p className="para-md2">
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="cp-tb-img">
                  <img className="img-fluid" src={CpTabImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyProfile;
