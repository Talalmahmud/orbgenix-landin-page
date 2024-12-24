import React from "react";

const ServiceSection = () => {
  return (
    <div className=" w-full bg-service_bg h-[629px] pt-5 ">
      <div className=" mx-auto w-[1100px] h-full flex justify-between ">
        <p className=" text-service_title text-[48px] font-bold">
          Service <br />
          We Provide
        </p>
        <div className=" max-w-[621px] flex flex-col gap-6">
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[28px] font-bold ">
            1 Full Cycle Development
          </button>
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[28px] font-bold ">
            2 Full Cycle Product Design (UI/UX Design)Development
          </button>
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[28px] font-bold ">
            3 Custom Software Development
          </button>
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[28px] font-bold ">
            4 Custom Software Development
          </button>
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[28px] font-bold ">
            4 Web development
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
