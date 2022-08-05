import React, { useState } from "react";
import Calendar from "react-calendar";
import chair from "../../../assets/images/chair.png";
import "react-calendar/dist/Calendar.css";

const AppoinmentBanner = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="hero-content flex-col lg:flex-row-reverse justify-between flex w-11/12 mx-auto items-center my-20">
        <img
          alt="Chair"
          src={chair}
          className="max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <Calendar
            className="shadow-lg rounded-md"
            onChange={onChange}
            value={value}
            ActiveStartDate={true}
          />
        </div>
      </div>
      <p className="text-center font-bold text-accent text-2xl">
        {" "}
        Selected Date: {value.toLocaleDateString("es-CL")}
      </p>
    </>
  );
};

export default AppoinmentBanner;
