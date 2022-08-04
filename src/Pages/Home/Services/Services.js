import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import fluoride from "../../../assets/images/fluoride.png";
import cabity from "../../../assets/images/cavity.png";
import teeth from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../Shared/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      image: fluoride,
      heading: "Fluoride Treatment",
    },
    {
      _id: 2,
      image: cabity,
      heading: "Cavity Filling",
    },
    {
      _id: 3,
      image: teeth,
      heading: "Teeth Whitening",
    },
  ];
  return (
    <div className=" text-center block mb-20 w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-accent">Our Services</h2>
      <p className="text-4xl">Services we provide</p>
      <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {services.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <div className="card lg:card-side mt-20 md:w-8/12 mx-auto ">
        <figure>
          <img className="w-full" src={treatment} alt="Album" />
        </figure>
        <div className="card-body block">
          <h2 className="card-title text-4xl text-left">
            Exceptional Dental Care, On Your Terms
          </h2>
          <p className="text-left my-5">
            Amet consectetur adipisicing elit. Explicabo, animi rem doloribus
            quae cum amet laudantium facere vel reiciendis sit repudiandae
            blanditiis aliquid quidem nobis minima repellat! Ea, excepturi
            exercitationem!
          </p>
          <div className="card-actions justify-start">
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
