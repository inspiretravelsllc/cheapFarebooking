import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import passengerIcon from "../assets/passenger.svg";
import Modal from './Modal';


function RoundTrip() {
    const [isOpen ,setIsOpen] = useState(false)
  const [totalPassenger , setTotalPassenger] = useState(1);
  return (
    
        <div className="columns-1 sm:columns-1 md:columns-3 lg:columns-7 mx-5">
          <div>
            <Form.Control type="text" placeholder="From" className="my-2 lg:my-0" />
          </div>
          <div className="lg:pt-[1px]">
            <Form.Control type="text" placeholder="To" className="my-2 lg:my-0" />
          </div>
    
          <div className="md:pt-[1px]">
            <Form.Control type="date" placeholder="Departure" className="my-2 lg:my-0" />
          </div>
          <div className="md:pt-[1px]">
            <Form.Control type="date" placeholder="Return" className="my-2 lg:my-0" />
          </div>
          <div className="lg:pt-[1px]">
            <Form.Select
              aria-label="Default select example"
              className="my-2 lg:my-0"
            >
              <option value="1">Economy</option>
              <option value="2">Premium Economy </option>
              <option value="3">Business Class</option>
              <option value="3">First Class</option>
            </Form.Select>
          </div>
    
          <div className="md:pt-[10px]">
            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                <img
                  src={passengerIcon}
                  alt="passengerIcon"
                  className="w-[15px] h-[15px]"
                />
              </InputGroup.Text>
              <Form.Control type="text" placeholder={`${totalPassenger} Passenger`} readOnly className="z-0" onClick={()=>setIsOpen(true)} />
            </InputGroup>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} setTotalPassenger={setTotalPassenger}/>
          </div>
    
          <Button  className="btn btn-theme btn-sm mt-[10px]">
            Search Flight
          </Button>
        </div>
      
  )
}

export default RoundTrip