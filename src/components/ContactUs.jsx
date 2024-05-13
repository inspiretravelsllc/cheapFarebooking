import React from "react";
import "../assets/css/media.css";
import "../assets/css/style.css";
import MobFixed from "./HomeComponents/MobFixed";
import Footer from "./Footer";
import ContactCard1 from "../assets/images/contactCard-img1.png"
import ContactCard2 from "../assets/images/contactCard-img2.png"
import ContactCard3 from "../assets/images/contactCard-img3.png"
import ContactImg from "../assets/images/contact-image.png"


function ContactUs() {
  return (
    <div>
      <section className="contact-us">
        <div className="container pt-[20px]">
          <h3 className="heading2 bold text-theme text-center mb-4 pb-2">
            Contact Us
          </h3>
          <div className="row g-5">
            <div className="col-lg-4">
              <a
                className="contact-card"
                href="#"
                target="_blank"
              >
                <img
                  src={ContactCard1}
                  alt=""
                />
                <h5 className="para-lg3 text-theme">Address</h5>
                <p className="para-md1">
                  12515 Barker Cypress RD, APT 9304, Cypress, TX 77429.
                </p>
              </a>
            </div>
            <div className="col-lg-4">
              <a
                className="contact-card"
                href="mailTo:info@cheapfarebooking.com"
              >
                <img
                  src={ContactCard2}
                  alt=""
                />
                <h5 className="para-lg3 text-theme">Email</h5>
                <p className="para-lg0">info@cheapfarebooking.com</p>
              </a>
            </div>
            <div className="col-lg-4">
              <a className="contact-card" href="tel:+1 888-316-4927">
                <img
                  src={ContactCard3}
                  alt=""
                />
                <h5 className="para-lg3 text-theme">Phone</h5>
                <p className="para-lg0">+1 888-316-4927</p>
              </a>
            </div>
            <div className="col-lg-12">
              <div className="contact-gap"></div>
            </div>
            <div className="col-lg-7">
              <div className="contact-img text-center">
                <img
                  className="img-fluid"
                  src={ContactImg}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="get-in-touch">
                <div className="flash-message">
                  <input
                    name="_token"
                    type="hidden"
                    value="ZncVOVRtsLsbV9OSCxVMMqdz6AFERHJ3PDZFZO7A"
                  />
                  <h3 class="heading-sm3 bold text-theme">Get in Touch</h3>
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    name="name"
                    class="form-control"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    id="contact_email"
                    name="contact_email"
                    class="form-control"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    id="phone"
                    name="phone"
                    class="form-control"
                  />

                  <textarea
                    rows="5"
                    id="comment"
                    name="comment"
                    class="form-control"
                  ></textarea>

                  <button
                    type="submit"
                    onclick="this.disabled=true;this.value='Sending, please wait...';this.form.submit();"
                    class="btn btn-theme"
                  >
                    Contact Us{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="long-arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-long-arrow-right fa-w-14"
                    >
                      <path
                        fill="currentColor"
                        d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                        class=""
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MobFixed />
      <Footer />
    </div>
  );
}

export default ContactUs;
