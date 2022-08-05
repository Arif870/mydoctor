import React, { useEffect, useState } from "react";
import AppoinmentCard from "../AppoinmentCard/AppoinmentCard";

const AvliableAppoinments = () => {
  const [appoinment, setAppoinment] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(data => setAppoinment(data));
  }, []);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-6 w-11/12 mx-auto">
        {appoinment.map(schadule => (
          <AppoinmentCard key={schadule._id} schadule={schadule} />
        ))}
      </div>
    </>
  );
};

export default AvliableAppoinments;
