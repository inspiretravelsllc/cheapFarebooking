import React from "react";
import "../../assets/css/style.css"
import HawaiImg from "../../assets/images/hawai1.jpg"
import LasImg from "../../assets/images/LASStrip.jpg"
import MexImg from "../../assets/images/mexico1.jpg"


import QuintinGellar from "../../assets/images/220523080951-pexels-quintin-gellar-313782.jpg"

import CunImg from "../../assets/images/110423090934-CUN.jpg"
import SavannahImg from "../../assets/images/220523082415-savannah.jpg"
import MIAImg from "../../assets/images/110423093004-MIA.jpg"
import GrantcaiImg from "../../assets/images/110423085332-grant-cai-9xjdQ8-zLKI-unsplash.jpg"
import MCOImg from "../../assets/images/110423085629-MCO.jpg"
import QuinteroImg from "../../assets/images/110423090012-pexels-luis-quintero-1587097.jpg"
import SJUImg from "../../assets/images/110423094911-SJU.jpg"
import Miami1Img from "../../assets/images/151121080626-miami1.jpg"
import SanfransiscoImg from "../../assets/images/151121080415-sanfransisco.jpg"
import LVImg from "../../assets/images/151121075855-LV.jpg"
import SFOImg from "../../assets/images/110423091249-SFO.jpg"
import QuintinImg from "../../assets/images/220523080951-pexels-quintin-gellar-313782.jpg"
import CUNImg from "../../assets/images/110423090934-CUN.jpg"







function FeaturedOffersTop() {
  return (
    <div>
      <section className="featured-box">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-7 overlap-design">
              <div className="row">
                <div className="col-md-6">
                  <div className="page-card">
                    <a href="#">
                      <img
                        src={HawaiImg}
                        alt=""
                      />
                      <div className="card-content">
                        <h4 className="heading-sm1">Hawaii</h4>
                        <p className="para-md1">United States</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="page-card">
                    <a href="#">
                      <img
                        src={LasImg}
                        alt=""
                      />
                      <div className="card-content">
                        <h4 className="heading-sm1">Las Vegas</h4>
                        <p className="para-md1">United States</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="page-card">
                    <a href="#">
                      <img
                        src={MexImg}
                        alt="Mexico City"
                      />
                      <div className="card-content">
                        <h4 className="heading-sm1">Mexico City</h4>
                        <p className="para-md1">Mexico</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="our-costumer">
                <h3 className="para-lg0">
                  Our Customers Saved
                  <br />
                  This Week:
                </h3>
                <div
                  className="marquee"
                  data-direction="up"
                  data-duration="10000"
                  data-pauseonhover="true"
                  data-duplicated="true"
                  style={{ height: "376px" }}
                >
                  <div
                    className="js-marquee-wrapper"
                    style={{
                      marginTop: "0px",
                      animation:
                        "19.3617s linear 0s infinite normal none running marqueeAnimation-18572700",
                    }}
                  >
                    <div
                      className="js-marquee"
                      style={{
                        marginRight: "0px",
                        float: "none",
                        marginBottom: "0px",
                      }}
                    >
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={QuintinGellar}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Houston - Newark</h3>
                          <p className="para-md3">Spirit Airlines</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$51</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={CunImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights San Francisco - Cancun
                          </h3>
                          <p className="para-md3">DELTA AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$269</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={SavannahImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Boston - Savannah</h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$84</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={MIAImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Washington - Miami</h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$89</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={GrantcaiImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights Los Angeles - Las Vegas
                          </h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$45</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={MCOImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Houston - Orlando</h3>
                          <p className="para-md3">Spirit Airlines</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$88</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={QuinteroImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights Fort Lauderdale - Panama City
                          </h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$203</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={SJUImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights Chicago O'Hare - San Juan
                          </h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$72</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={Miami1Img}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Atlanta - Miami</h3>
                          <p className="para-md3">AMERICAN AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$228</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={SanfransiscoImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights los Angeles - San Fransisco
                          </h3>
                          <p className="para-md3">JETBLUE</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$94</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={LVImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Atlanta - Las Vegas</h3>
                          <p className="para-md3">AMERICAN AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$29</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={SFOImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flight from Denver - San Francisco
                          </h3>
                          <p className="para-md3">Frontier Airlines</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$19</h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="js-marquee"
                      style={{
                        marginRight: "0px",
                        float: "none",
                        marginBottom: "0px",
                      }}
                    >
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={QuintinImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Houston - Newark</h3>
                          <p className="para-md3">Spirit Airlines</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$51</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={CUNImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights San Francisco - Cancun
                          </h3>
                          <p className="para-md3">DELTA AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$269</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={SavannahImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Boston - Savannah</h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$84</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={MIAImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Washington - Miami</h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$89</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={GrantcaiImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights Los Angeles - Las Vegas
                          </h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$45</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={MCOImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Houston - Orlando</h3>
                          <p className="para-md3">Spirit Airlines</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$88</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={QuinteroImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights Fort Lauderdale - Panama City
                          </h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$203</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={SJUImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights Chicago O'Hare - San Juan
                          </h3>
                          <p className="para-md3">UNITED AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$72</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={Miami1Img}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Atlanta - Miami</h3>
                          <p className="para-md3">AMERICAN AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$228</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={SanfransiscoImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flights los Angeles - San Fransisco
                          </h3>
                          <p className="para-md3">JETBLUE</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$94</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={LVImg}
                            alt=""
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">Flights Atlanta - Las Vegas</h3>
                          <p className="para-md3">AMERICAN AIRLINES</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$29</h4>
                        </div>
                      </div>
                      <div className="mq-item">
                        <div className="avtar">
                          <img
                            src={SFOImg}
                            alt="."
                          />
                        </div>
                        <div className="mq-txt">
                          <h3 className="para-md1">
                            Flight from Denver - San Francisco
                          </h3>
                          <p className="para-md3">Frontier Airlines</p>
                        </div>
                        <div className="mq-price">
                          <h4 className="para-lg3 bold">$19</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedOffersTop;
