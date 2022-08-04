import React from "react";

const PatientsCard = ({ testi }) => {
  const { image, name, country, comments } = testi;
  return (
    <>
      <div className="card  shadow-xl">
        <div className="card-body">
          <p>{comments}</p>
          <div className="flex  items-center mt-4">
            <img
              className="ring-2 ring-accent ring-offset-2 rounded-full w-20"
              src={image}
              alt="person"
            />
            <div className="ml-6">
              <h1 className="font-bold">{name}</h1>
              <p>{country}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsCard;
