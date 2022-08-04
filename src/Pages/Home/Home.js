import React from "react";
import Appoinment from "./Appoinment/Appoinment";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Services />
      <Appoinment />
    </>
  );
};

export default Home;
