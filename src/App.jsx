import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-datepicker/dist/react-datepicker.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import TermsAndCondition from "./components/FooterComponents/TermsAndCondition";
import PrivacyPolicy from "./components/FooterComponents/PrivacyPolicy";
import FAQ from "./components/FooterComponents/FAQ";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/termsandConditions" element={<TermsAndCondition />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
