import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Counter from "./Counter";

export default function Modal({ isOpen, setIsOpen,setTotalPassenger }) {
  const [adults,setAdults]=useState(0);
  const [seniorCitizen,setSeniorCitizen]=useState(0);
  const [children,setChildren]=useState(0);
  const [infants,setInfants]=useState(0);
  const addTotalPassenger =()=>{
    setTotalPassenger(adults + seniorCitizen + children + infants)
  }
  useEffect(()=>{
    addTotalPassenger()
  },[adults,seniorCitizen,children,infants])

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg"
      >
        <div className="text-xl font-bold">PassengerList</div>
        <div className="-mx-4 my-3 border-y px-4 py-4 flex flex-wrap gap-2">
          <div className="flex flex-column items-center">
            <label>Adults, 16-64 Years</label>
            <Counter passengerCount={adults} setPassengerCount={setAdults} />
          </div>
          <div className="flex flex-column items-center">
            <label>Senior Citizen, 65+</label>
            <Counter passengerCount={seniorCitizen} setPassengerCount={setSeniorCitizen} />
          </div>
          <div className="flex flex-column items-center">
          <label>Children, 2-15Years</label>
            <Counter passengerCount={children} setPassengerCount={setChildren} />
          </div>
          <div className="flex flex-column items-center">
          <label>Infants, under 2</label>
            <Counter passengerCount={infants} setPassengerCount={setInfants} />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
          >
            Done
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
