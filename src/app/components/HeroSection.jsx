import React from "react";

const HeroSection = () => {
  return (
    <div className=" w-full bg-custom-radial h-[400px] xl:h-[629px] ">
      <div className=" mx-auto w-full xl:w-[1100px] h-full flex flex-col gap-[24px] justify-center items-center ">
        <p className=" mt-[30px] xl:mt-[124px] text-[32px] xl:text-[64px] leading-[32px] xl:leading-[83px] text-pretty text-center text-brand font-bold">
          Transforming Ideas into <br />
          Innovative Software
        </p>
        <p className=" text-[14px] xl:text-[19px] text-nav_text">
          Custom solutions tailored for your business needs
        </p>
        <button className=" h-[48px] rounded-[24px] flex justify-center items-center bg-button_bg_1 hover:bg-button_bg_2 text-white font-normal text-[16px] w-[146px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
