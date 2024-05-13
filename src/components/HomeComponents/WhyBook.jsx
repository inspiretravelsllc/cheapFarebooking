import React from "react";
import "../../assets/css/style.css"
import "../../App.css"
import WHyBookImg1 from "../../assets/images/why-book1.png"
import WHyBookImg2 from "../../assets/images/why-book2.png"
import WHyBookImg3 from "../../assets/images/why-book3.png"
import WHyBookImg4 from "../../assets/images/why-book4.png"
import WHyBookImg5 from "../../assets/images/why-book5.png"


function WhyBook() {
  return (
    <div>
      <section className="why-book ">
        <div className="container">
          <h3 className="heading2 bold text-theme">
            Why Should You Book with Cheapfarebooking
          </h3>
          <div className="row justify-center g-4">
            <div className="col-lg col-md-4">
              <div className="why-book-item">
                <img
                  src={WHyBookImg1}
                  alt=""
                />
                <h4 className="heading5 bold text-theme">
                  Value for every $ spent
                </h4>
                <p className="para-md1">
                  Cheap price with
                  <br />
                  affordable services
                </p>
              </div>
            </div>

            <div className="col-lg col-md-4">
              <div className="why-book-item">
                <img
                src={WHyBookImg2}
                  alt=""
                />
                <h4 className="heading5 bold text-theme">
                  Professional travel
                  <br />
                  agents at your service
                </h4>
                <p className="para-md1">
                  With best suited solution
                  <br />
                  with no hideouts.
                </p>
              </div>
            </div>

            <div className="col-lg col-md-4">
              <div className="why-book-item">
                <img
                  src={WHyBookImg3}
                  alt=""
                />
                <h4 className="heading5 bold text-theme">
                  800000+Flights available
                  <br />
                  at discounted price.
                </h4>
                <p className="para-md1">
                  With average $300
                  <br />
                  savings per ticket.
                </p>
              </div>
            </div>

            <div className="col-lg col-md-4">
              <div className="why-book-item">
                <img
                  src={WHyBookImg4}
                  alt=""
                />
                <h4 className="heading5 bold text-theme">
                  98% Customer
                  <br />
                  Satisfaction
                </h4>
                <p className="para-md1">
                  Highest with 5-star
                  <br />
                  ratings
                </p>
              </div>
            </div>

            <div className="col-lg col-md-4">
              <div className="why-book-item">
                <img
                 src={WHyBookImg5}
                  alt=""
                />
                <h4 className="heading5 bold text-theme">
                  10000+ vacation
                  <br />
                  deals available
                </h4>
                <p className="para-md1">
                  With major
                  <br />
                  worldwide carriers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyBook;
