import React from "react";
import "../../App.css"
import DreamIcon1 from "../../assets/images/dream-icon1.png"
import DreamIcon2 from "../../assets/images/dream-icon2.png"
import DreamIcon3 from "../../assets/images/dream-icon3.png"
import DreamIcon4 from "../../assets/images/dream-icon4.png"
import DreamIcon5 from "../../assets/images/dream-icon5.png"


function DreamVacation() {
  return (
    <div >
      <div className="container">
        <h3 className="text-white text-[2.188rem] mb-[36px]">Your Dream Vacation</h3>
        <div className="row justify-center g-4">
          <div className="col-lg col-md-4">
            <a
              className=" bg-white rounded-[4px] border-2 border-solid border-transparent px-[15px] py-[35px] flex flex-col items-center text-center "
              href="#"
            >
              <img
                src={DreamIcon1} width="63px"
                alt="" 
              />
              <p className="mt-[14px] font-bold leading-none">
                Unaccompanied
                <br />
                Minor
              </p>
            </a>
          </div>

          <div className="col-lg col-md-4">
            <a
              className=" bg-white rounded-[4px] border-2 border-solid border-transparent px-[15px] py-[35px] flex flex-col items-center text-center"
              href="#"
            >
              <img
                src={DreamIcon2}
                alt="" width="63px"
              />
              <p className="mt-[14px] font-bold leading-none">
                Last Minute
                <br />
                Bookings
              </p>
            </a>
          </div>

          <div className="col-lg col-md-4">
            <a
              className=" bg-white rounded-[4px] border-2 border-solid border-transparent px-[15px] py-[35px] flex flex-col items-center text-center"
              href="#"
            >
              <img
                src={DreamIcon3}
                alt="" width="63px"
              />
              <p className="mt-[14px] font-bold leading-none">
                Romantic
                <br />
                Getaways
              </p>
            </a>
          </div>

          <div className="col-lg col-md-4">
            <a
              className=" bg-white rounded-[4px] border-2 border-solid border-transparent px-[15px] py-[35px] flex flex-col items-center text-center"
              href="#"
            >
              <img
                src={DreamIcon4}
                alt="" width="63px"
              />
              <p className="mt-[14px] font-bold leading-none">
                Solo
                <br />
                Travelers
              </p>
            </a>
          </div>

          <div className="col-lg col-md-4">
            <a
              className=" bg-white rounded-[4px] border-2 border-solid border-transparent px-[15px] py-[35px] flex flex-col items-center text-center"
              href="#"
            >
              <img
                src={DreamIcon5}
                alt="" width="63px"
              />
              <p className="mt-[14px] font-bold leading-none">
                Adventure
                <br />
                Travel
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamVacation;
