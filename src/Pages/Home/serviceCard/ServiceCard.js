import React from "react";

const ServiceCard = ({ image, cardHeading }) => {
  return (
    <>
      <div className="card shadow-xl">
        <figure className="px-10 pt-10 ">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{cardHeading}</h2>
          <p>
            Sint sed voluptatum corporis excepturi repudiandae beatae adipisci
            quae.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
