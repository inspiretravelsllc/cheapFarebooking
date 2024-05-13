import React from 'react'
import WhyBookUsImg1 from "../../assets/images/why-book1.png"
import WhyBookUsImg2 from "../../assets/images/why-book2.png"
import WhyBookUsImg3 from "../../assets/images/why-book3.png"
import WhyBookUsImg4 from "../../assets/images/why-book4.png"
import WhyBookUsImg5 from "../../assets/images/why-book5.png"
import "../../assets/css/style.css"


function WhyChooseUs() {
  return (
    <section className="why-book why-choose" id="whyChooseUs">
    <div className="container">
        <h3 className="heading2 bold text-theme">Why Choose us?</h3>
        <div className="row g-4 justify-content-center">

            <div className="col-lg col-md-6">
                <div className="why-book-item">
                    <img src={WhyBookUsImg1} alt="" />
                    <h4 className="heading5 bold text-theme">Value for every &amp; spent</h4>
                    <p className="para-md1">Cheap price with<br/>affordable services</p>
                </div>
            </div>
            
            <div className="col-lg col-md-6">
                <div className="why-book-item">
                    <img src={WhyBookUsImg2} alt="" />
                    <h4 className="heading5 bold text-theme">Professional travel<br/>agents at your service</h4>
                    <p className="para-md1">With best suited solution<br/>with no hode outs.</p>
                </div>
            </div>
            
            <div className="col-lg col-md-6">
                <div className="why-book-item">
                    <img src={WhyBookUsImg3} alt="" />
                    <h4 className="heading5 bold text-theme">800000+Flights to<br/>with no hode outs.</h4>
                    <p className="para-md1">With average $300<br/>saving per ticket.</p>
                </div>
            </div>

            <div className="col-lg col-md-6">
                <div className="why-book-item">
                    <img src={WhyBookUsImg4} alt="" />
                    <h4 className="heading5 bold text-theme">98% Customer<br/>Satisfaction</h4>
                    <p className="para-md1">Highest with 5-star<br/>ratings</p>
                </div>
            </div>
          
            <div className="col-lg col-md-6">
                <div className="why-book-item">
                    <img src={WhyBookUsImg5} alt="" />
                    <h4 className="heading5 bold text-theme">10000+ vacation<br/>deals available</h4>
                    <p className="para-md1">With major<br/>worldwide carriers.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default WhyChooseUs