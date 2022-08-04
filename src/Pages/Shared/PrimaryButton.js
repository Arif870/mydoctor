import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button className="btn text-bold text-white border-0 shadow-md bg-gradient-to-r from-cyan-500 to-blue-500">
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
