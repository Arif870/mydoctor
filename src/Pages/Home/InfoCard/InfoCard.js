import React from "react";

const InfoCard = ({ icon, bgColor, cardHeading, cardText }) => {
  return (
    <>
      <div className={`card lg:card-side ${bgColor}  text-white p-4 shadow-xl`}>
        <figure>
          <img style={{ width: "50px" }} src={icon} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{cardHeading}</h2>
          <p>{cardText}</p>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
