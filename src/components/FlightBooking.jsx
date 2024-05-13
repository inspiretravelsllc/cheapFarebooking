import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import OneWayTripForm from "./OneWayTripForm";
import RoundTrip from "./RoundTrip";

function FlightBooking() {
    const [tripType , setTripType]=useState("oneway")
    const handleCheckbox =(actionType)=>{
  setTripType(actionType);
 
    }
  return (
    <>
      <div className="bg-[#fed03b] px-5 py-3 w-56 rounded-tl-[20px] text-center">
        Flights
      </div>
      <div className="bg-[#fed03b] px-2 py-3 rounded-b-[20px] rounded-tr-[20px]">
        <div className="py-3">
          <Form className="flex flex-row">
            <Form.Check // prettier-ignore
              type="radio"
              id="roundTrip"
              label="Round Trip"
              name="tripType"
              className="px-5"
              checked={tripType==="roundtrip" ? true :false}
              onChange={()=>handleCheckbox('roundtrip')}
            />
            <Form.Check // prettier-ignore
              type="radio"
              id="oneWay"
              label="One Way"
              name="tripType"
              checked={tripType==="oneway" ? true :false}
              onChange={()=>handleCheckbox('oneway')}
            />
          </Form>
        </div>
        <div>
            {tripType==='oneway'? <OneWayTripForm />:<RoundTrip />}
        
        
        </div>
      </div>
    </>
  );
}

export default FlightBooking;
