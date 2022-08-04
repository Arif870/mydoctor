import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import fluoride from "../../../assets/images/fluoride.png";
import cabity from "../../../assets/images/cavity.png";
import teeth from "../../../assets/images/whitening.png";

const Services = () => {
  return (
    <div className="mx-auto text-center block mb-20">
      <h2 className="text-2xl font-bold text-accent">Our Services</h2>
      <p className="text-4xl">Services we provide</p>
      <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        <ServiceCard image={fluoride} cardHeading={"Fluoride Treatment"} />
        <ServiceCard image={cabity} cardHeading={"Cavity Filling"} />
        <ServiceCard image={teeth} cardHeading={"Teeth Whitening"} />
      </div>
    </div>
  );
};

export default Services;
