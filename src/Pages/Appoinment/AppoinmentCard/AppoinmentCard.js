import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton";

const AppoinmentCard = ({ schadule }) => {
  const { name, slots, date } = schadule;
  return (
    <>
      {console.log(date)}
      <div className="card card-compact  shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-accent">{name}</h2>

          <p className="text-2xl">
            {slots[0]}{" "}
            {slots.length === 0 && (
              <p className="text-red-400">Try another day</p>
            )}
          </p>
          <p>
            {slots.length} {slots.length <= 1 ? "space" : "spaces"} avalaible
          </p>
          <div className="card-actions justify-center mt-8 mb-5">
            <PrimaryButton>Book appoinment</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppoinmentCard;
