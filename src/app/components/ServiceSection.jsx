import React from "react";

const ServiceSection = () => {
  return (
    <div className=" w-full bg-service_bg  h-auto xl:h-[629px] pb-5 xl:pb-0  pt-5 ">
      <div className=" mx-auto w-full px-4 xl:px-0 xl:w-[1100px] h-full flex flex-col xl:flex-row justify-between">
        <p className=" text-service_title text-[32px] xl:text-[48px] font-bold">
          Service <br />
          We Provide
        </p>
        <div className=" max-w-[621px] flex flex-col gap-6">
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[14px] xl:text-[28px] font-bold ">
            1 Full Cycle Development
          </button>
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[14px] xl:text-[28px] font-bold ">
            2 Full Cycle Product Design (UI/UX Design)Development
          </button>
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[14px] xl:text-[28px] font-bold ">
            3 Custom Software Development
          </button>
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[14px] xl:text-[28px] font-bold ">
            4 Custom Software Development
          </button>
          <button className=" text-left p-6 rounded-[8px] bg-[#35245E] text-white text-[14px] xl:text-[28px] font-bold ">
            4 Web development
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
