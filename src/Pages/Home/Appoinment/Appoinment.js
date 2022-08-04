import React from "react";
import "./Appoinment.css";
import doctor from "../../../assets/images/doctor-small.png";

const Appoinment = () => {
  return (
    <>
      <div className="appoinment text-white ">
        <div className="sm:w-8/12 card sm:card-side  mx-auto ">
          <figure>
            <img src={doctor} alt="doctor" />
          </figure>
          <div className="card-body block">
            <h2 className="card-title text-accent">Appoinment</h2>
            <p className="text-4xl my-4">Make an appoinment today</p>
            <p className="mb-4">
              Consectetur adipisicing elit. Inventore, voluptatum corporis?
              Dolore repudiandae, doloremque minima accusamus veritatis nostrum
              amet earum odit quisquam corrupti. Eos, quasi atque est eligendi
              blanditiis dignissimos.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-accent text-bold text-white">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appoinment;
