import React from "react";

function Card({ data }) {
  console.log("data", data);
  return (
    <div>
      <div className="border-[#e7e7e7] rounded-[12px] border-2 h-full w-[340px] sm:w-[500px] md:w-[600px] lg:w-[340px] my-[10px] ">
        
          <div className="flex flex-col flex-nowrap p-[25px]">
            <img src={data.url} alt="" height="75px" width="75px" />
            <p className="text-[#0e2a5c] text-[1.375rem] mb-[10px] font-bold">
              {data.heading}
            </p>
            <ul className="list-disc">
              {data.list.map((listData, index) => (
                <li key={index}>{listData}</li>
              ))}
            </ul>
          </div>
        
      </div>
    </div>
  );
}

export default Card;
