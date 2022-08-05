import React from "react";
import Calendar from "react-calendar";
import chair from "../../../assets/images/chair.png";
import "react-calendar/dist/Calendar.css";

const AppoinmentBanner = ({ value, onChange }) => {
  return (
    <>
      <div className="hero-content flex-col lg:flex-row-reverse justify-between flex w-11/12 mx-auto items-center md:my-20 my-8">
        <img
          alt="Chair"
          src={chair}
          className="md:w-1/2 sm:w-full  rounded-lg shadow-2xl"
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
        Avaliable Appoinment for: {value.toLocaleDateString("es-CL")}
      </p>
    </>
  );
};

export default AppoinmentBanner;
