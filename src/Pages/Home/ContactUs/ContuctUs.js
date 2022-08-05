import React from "react";
import PrimaryButton from "../../Shared/PrimaryButton";
import "./ContuctUs.css";

const ContuctUs = () => {
  return (
    <div className="contuctus  text-center py-16 mt-20 text-white">
      <div className="w-11/12 mx-auto">
        <p className="text-accent font-bold">Contact Us</p>
        <p className="text-4xl">Stay connected with us</p>
        <div className="flex flex-col gap-4 items-center mt-12">
          <input
            type="text"
            placeholder="Your Email"
            className="input w-full max-w-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-full max-w-lg"
          />
          <textarea
            className="textarea w-full max-w-lg"
            cols={7}
            rows={5}
            placeholder="Write message"
          ></textarea>
        </div>
        <div className="mt-6">
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ContuctUs;
