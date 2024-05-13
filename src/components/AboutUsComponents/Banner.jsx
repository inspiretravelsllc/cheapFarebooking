import React from 'react'
import "../../assets/css/style.css"
import AboutBannerImg from "../../assets/images/about-banner.png"

function Banner() {
  return (
    <section className="banner content-center has-top-collapsable">
    <img src={AboutBannerImg} alt="" className="banner-img h-auto" />
    <div className="banner-content">
        <div className="container">
            <h2 className="heading-lg">Compare 1000+ combinations,<br /> <span className="bold">Book Cheap Flights</span> &amp; Save up to 50%</h2>
            
            
        </div>
    </div>
</section>
  )
}

export default Banner