"use client";
import React, { useState } from "react";
import CustomTimeClock from "./TimeClock";

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("6:00 AM - 8:00 AM");

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Date: ${selectedDate.toDateString()}, Time: ${selectedTime}`);
  };
  return (
    <div className="w-full bg-gradient-to-br from-[#7A56D1] to-[#663CC6] shadow-lg  ">
      <div className=" mx-auto w-full xl:w-[1100px]  flex flex-col gap-4 py-8">
        <h2 className="text-white text-[32px] xl:text-[48px] text-clip text-center font-semibold">
          Let’s Talk To Our Team
        </h2>
        <div className=" w-full  rounded-[16px]  gap-6 bg-white py-4">
          {/* Calendar and Time Slots */}
          <div className=" w-full flex flex-col  gap-2">
            <h2 className="text-xl px-8 text-black font-semibold">Schedule</h2>
            <CustomTimeClock />
          </div>

          {/* Form */}

          <div className=" flex flex-col bg-button_bg_1 rounded-[8px] text-white w-[400px] mx-auto h-full p-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4  font-thin"
            >
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border-b-[1px] outline-none focus:ring-purple-500 focus:border-purple-500 text-black font-normal roundend-[8px]"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-1 px-3 py-2 border-b-[1px] outline-none focus:ring-purple-500 focus:border-purple-500 text-black font-normal roundend-[8px]"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full mt-1 px-3 py-2 border-b-[1px] outline-none focus:ring-purple-500 focus:border-purple-500 text-black font-normal roundend-[8px]"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border-b-[1px] outline-none focus:ring-purple-500 focus:border-purple-500 text-black font-normal roundend-[8px]"
                  placeholder="Country"
                  required
                />
              </div>
            </form>
            <div className="  pt-6 flex justify-end">
              <button className=" h-[48px] rounded-[24px] flex justify-center items-center bg-button_bg_2 hover:bg-button_bg_2/30 text-white font-normal text-[16px] w-[120px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
