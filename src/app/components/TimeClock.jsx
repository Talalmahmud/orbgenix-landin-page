import {
  DateCalendar,
  LocalizationProvider,
  StaticDatePicker,
  StaticTimePicker,
  TimeClock,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import dayjs from "dayjs";

const CustomTimeClock = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-4">
      {/* Time Clock */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className=" h-auto md:h-[300px]  ">
          <StaticTimePicker
            defaultValue={dayjs()}
            onChange={(e) => console.log(e)}
            slotProps={{
              // The actions will be the same between desktop and mobile
              actionBar: {
                actions: ["clear"],
              },
              // The actions will be different between desktop and mobile
              actionBar: ({ wrapperVariant }) => ({
                actions: wrapperVariant === "desktop" ? [] : ["clear"],
              }),
            }}
          />
        </div>
      </LocalizationProvider>

      {/* Date Calendar */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className=" ">
          <StaticDatePicker
            slotProps={{
              // The actions will be the same between desktop and mobile
              actionBar: {
                actions: ["clear"],
              },
              // The actions will be different between desktop and mobile
              actionBar: ({ wrapperVariant }) => ({
                actions: wrapperVariant === "desktop" ? [] : ["clear"],
              }),
            }}
            defaultValue={dayjs("2022-04-17")}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default CustomTimeClock;
