import React from "react";
import PatientsCard from "../PatientsCard/PatientsCard";
import p1 from "../../../assets/images/people1.png";
import p2 from "../../../assets/images/people2.png";
import p3 from "../../../assets/images/people3.png";

const Patients = () => {
  const testimonial = [
    {
      _id: 1,
      image: p1,
      name: "Winson harry",
      country: "california",
      comments:
        "Amet consectetur adipisicing elit. Dolorum, fugit! quisquam, expedita iusto perspiciatis delectus nam, at reiciendis id.",
    },
    {
      _id: 2,
      image: p2,
      name: "Winllamsom",
      country: "South melborn",
      comments:
        "Libero facilis totam, quisquam, expedita iusto perspiciatis delectus nam, at reiciendis id facere amet autem quia incidunt quos fuga.",
    },
    {
      _id: 3,
      image: p3,
      name: "Seikh khalida",
      country: "Bangladesh",
      comments:
        "Adipisicing elit. Minus distinctio autem dolor dicta quas voluptatem accusantium ab minima iure possimus.",
    },
  ];
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 w-11/12 mx-auto">
      {testimonial.map(testi => (
        <PatientsCard key={testi._id} testi={testi} />
      ))}
    </div>
  );
};

export default Patients;
