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
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Time Clock */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex-1 h-auto md:h-[300px]  ">
          <StaticTimePicker
            onChange={(e) => console.log(e)}
            orientation="landscape"
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
        <div className="flex-1  ">
          <StaticDatePicker
            slotProps={{
              // The actions will be the same between desktop and mobile
              actionBar: {
                actions: ["clear"],
              },
              // The actions will be different between desktop and mobile
            }}
            orientation="landscape"
          />
        </div>
      </LocalizationProvider>
    </div>
  );
};

export default CustomTimeClock;
