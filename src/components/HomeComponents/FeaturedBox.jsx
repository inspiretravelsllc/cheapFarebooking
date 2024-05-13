import React from "react";
import "../../assets/css/style.css";
import ExploreImg1 from "../../assets/images/explore-img1.png";

function FeaturedBox() {
  return (
    <div>
      <section className="featured-offers">
        <div className="container">
          <h2 className="heading1 bold">Featured Offers</h2>
          <img src={ExploreImg1} alt="" />
        </div>
      </section>
    </div>
  );
}

export default FeaturedBox;
