import Image from "next/image";
import React from "react";

const ProjectSection = () => {
  return (
    <div className=" w-full xl:w-[1100px] mx-auto py-10 text-white">
      <p className=" text-[32px] xl:text-[48px] text-white">
        Our Satisfied <br /> Clients Project
      </p>
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-[24px] items-center">
        <Image
          src="/window.svg"
          height={200}
          width={200}
          className=" w-[538px] h-[324px]"
          alt=""
        />
        <div className=" flex flex-col gap-2">
          <div>
            {" "}
            <button className=" px-4 h-[48px] text-white bg-button_bg_2 w-[140px] rounded-[20px]">
              Mobile
            </button>
          </div>
          <p className=" text-[28px] font-semibold">
            Electronic Concrete Cheese{" "}
          </p>
          <p className=" text-[16px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dignissimos assumenda maxime pariatur vitae nemo ipsam
            sapiente, fuga dicta ullam iure adipisci animi et soluta aperiam
            velit sit? Repellendus, error.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-[24px] items-center">
        <div className=" flex flex-col gap-2">
          <div>
            {" "}
            <button className=" px-4 h-[48px] text-white bg-button_bg_2 w-[140px] rounded-[20px]">
              Mobile
            </button>
          </div>
          <p className=" text-[28px] font-semibold">
            Electronic Concrete Cheese{" "}
          </p>
          <p className=" text-[16px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dignissimos assumenda maxime pariatur vitae nemo ipsam
            sapiente, fuga dicta ullam iure adipisci animi et soluta aperiam
            velit sit? Repellendus, error.
          </p>
        </div>
        <Image
          src="/window.svg"
          height={200}
          width={200}
          className=" w-[538px] h-[324px]"
          alt=""
        />
      </div>
      <div className=" flex items-center justify-center">
        <button className=" h-[48px] rounded-[24px] flex justify-center items-center border-[1px] border-white hover:bg-button_bg_2 text-white font-normal text-[16px] w-[120px]">
          See More
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
