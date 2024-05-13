import React from "react";
import Banner from "./AboutUsComponents/Banner";
import CompanyProfile from "./AboutUsComponents/CompanyProfile";
import WhyChooseUs from "./AboutUsComponents/WhyChooseUs";
import CustomerSays from "./AboutUsComponents/CustomerSays";
import "../assets/css/style.css"
import "../App.css"
import Footer from "./Footer";

function AboutUs() {
  return (
    <div>
      <Banner />
      <CompanyProfile />
      <WhyChooseUs />
      <CustomerSays /> 
      <Footer />
    </div>
  );
}

export default AboutUs;
