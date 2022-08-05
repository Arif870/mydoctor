import React from "react";
import quoteicon from "../../../assets/icons/quote.svg";

const Testimonial = () => {
  return (
    <div className="my-20 w-11/12 mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold text-accent">Testimonial</h2>
          <p className="text-4xl">What our patients says</p>
        </div>
        <div>
          <img className="w-36" src={quoteicon} alt="quoteicon" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
