"use clietn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navList = [
  {
    title: "Home",
    url: "/",
    id: 1,
  },
  {
    title: "Portfolio",
    url: "/portfolio",
    id: 2,
  },
  {
    title: "Services",
    url: "/services",
    id: 3,
  },
  {
    title: "Contact",
    url: "/contact",
    id: 4,
  },
];
const NavBar = () => {
  return (
    <div className="p-4 shadow-md z-40 fixed top-0 xl:top-[20px] left-1/2 transform -translate-x-1/2 bg-white w-full xl:w-[1100px] rounded-[0px] xl:rounded-[40px] h-[80px] flex justify-between items-center">
      <div className=" flex items-center gap-4">
        <Image
          src={"/menu.svg"}
          width={24}
          height={24}
          alt="menu"
          className=" block xl:hidden course-pointer"
        />
        <h2 className=" text-brand text-[36px] font-semibold">OrbGenix</h2>
      </div>
      <div className=" hidden xl:flex items-center gap-[21px] text-[16px] font-normal">
        {navList?.map((item) => (
          <Link
            href={item?.url}
            key={item?.id}
            className=" text-nav_text hover:text-button_bg_2 hover:underline"
          >
            {item?.title}
          </Link>
        ))}
      </div>
      <button className=" h-[48px] rounded-[24px] flex justify-center items-center bg-button_bg_1 hover:bg-button_bg_2 text-white font-normal text-[16px] w-[120px]">
        Hire Us
      </button>
    </div>
  );
};

export default NavBar;
