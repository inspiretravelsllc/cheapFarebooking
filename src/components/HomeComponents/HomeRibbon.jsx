import React from 'react'
import HomeRibbonImg1 from "../../assets/images/home-ribbon-img1.png"
import HomeRibbonImg2 from "../../assets/images/home-ribbon-img2.png"
import HomeRibbonImg3 from "../../assets/images/home-ribbon-img3.png"


function HomeRibbon() {
  return (
    <div>
        <section className="home-ribbon">
    <div className="container">
        <div className="row g-4">

            <div className="col-md-6 col-lg-4">
                <div className="ribbon-card">
                    <a href="#" className="link-cover"></a>
                    <img src={HomeRibbonImg1} alt="" />
                    <p className="para-lg0">Lowest Fares &amp; Best Service</p>
                    <ul>
                        <li className="para-md1">Lowest Airline fares with minimum hassle.</li>
                        <li className="para-md1">Compare between 500+ Airlines and more than 1000+ combinations</li>
                        <li className="para-md1">World className customer services providers</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="ribbon-card">
                    <a href="#" className="link-cover"></a>
                    <img src={HomeRibbonImg2} alt="" />
                    <p className="para-lg0">Reliable &amp; Fuss Free Booking</p>
                    <ul>
                        <li className="para-md1">Take your pick from 500+ Major and LCC Carriers</li>
                        <li className="para-md1">You are never on your own. We take full Responsibility of your travel plan till you get back home.</li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="ribbon-card">
                    <a href="#" className="link-cover"></a>
                    <img src={HomeRibbonImg3} alt="" />
                    <p className="para-lg0">Score Best, Fly Cheapest</p>
                    <ul>
                        <li className="para-md1">Always score the best deals available amongst published and unpublished fares</li>
                        <li className="para-md1">Best domestic and International price assurance with more combinations than anywhere alse.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</section>
    </div>
  )
}

export default HomeRibbon