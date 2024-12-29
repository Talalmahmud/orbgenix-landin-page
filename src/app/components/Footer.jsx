import React from "react";

const Footer = () => {
  return (
    <div className=" w-full bg-brand text-white py-8 ">
      <div className=" mx-auto w-full xl:w-[1100px] h-full px-4 xl:px-0 flex flex-col gap-4 ">
        <div className=" flex w-full flex-col gap-4 xl:flex-row justify-between ">
          <div className=" w-[351px]  flex flex-col gap-1">
            <p className="text-[24px] xl:text-[36px] font-bold">OrbGenix</p>
            <p className="text-[12px] xl:text-[14px]">
              {" "}
              OrbGenix conveys the idea of a company that is innovative,
              intelligent, and capable of producing cutting-edge solutions on a
              global scale. It suggests a focus on technology that is both
              advanced and creative.
            </p>
          </div>
          <div className=" w-[88px] flex flex-col gap-4">
            <p className=" text-[19px] font-semibold">Company</p>
            <div className=" flex flex-col gap-1">
              <p className="  text-[14px] xl:text-[16px]">About</p>
              <p className="  text-[14px] xl:text-[16px]">Portfolio</p>{" "}
              <p className="  text-[14px] xl:text-[16px]">Contact Us</p>{" "}
            </div>
          </div>
          <div className=" w-[94px] flex flex-col gap-4">
            {" "}
            <p className=" text-[19px] font-semibold">Services</p>
            <div className=" flex flex-col gap-1">
              <p className="  text-[14px] xl:text-[16px]">Ux/UI</p>
              <p className="  text-[14px] xl:text-[16px]">App</p>{" "}
              <p className="  text-[14px] xl:text-[16px]">Website </p>{" "}
            </div>
          </div>
          <div className=" w-[218px] flex flex-col gap-4">
            {" "}
            <div className="  flex flex-col gap-2">
              {" "}
              <p className=" text-[19px] font-semibold">Communication</p>
              <div className=" flex flex-col gap-1">
                <div className=" flex items-center gap-2"></div>
                <p className="  text-[14px] xl:text-[16px]">App</p>{" "}
                <p className="  text-[14px] xl:text-[16px]">Website </p>{" "}
              </div>
            </div>{" "}
            <div className="  flex flex-col gap-2">
              {" "}
              <p className=" text-[19px] font-semibold">Communication</p>
              <div className=" flex flex-col gap-1">
                <div className=" flex items-center gap-2"></div>
                <p className="  text-[14px] xl:text-[16px]">App</p>{" "}
                <p className="  text-[14px] xl:text-[16px]">Website </p>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-between border-t-[1px] border-white pt-4 ">
          <p className="text-[14px] xl:text-[16px]">
            © 2024 OrbGenix All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
