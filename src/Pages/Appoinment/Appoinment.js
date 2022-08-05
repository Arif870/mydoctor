import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner/AppoinmentBanner";
import AvliableAppoinments from "./AvliableAppoinments/AvliableAppoinments";

const Appoinment = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <>
      <AppoinmentBanner value={value} onChange={onChange} />
      <AvliableAppoinments />
    </>
  );
};

export default Appoinment;
