import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <>
      <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="chair"
            className=" md:w-1/2 w-100  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              You New Smiles Starts from Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn border-0 shadow bg-gradient-to-r from-cyan-500 to-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
