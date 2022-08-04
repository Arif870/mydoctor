import React from "react";
import Appoinment from "./Appoinment/Appoinment";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import Patients from "./Patients/Patients";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <Appoinment />
      <Testimonial />
      <Patients />
    </>
  );
};

export default Home;
