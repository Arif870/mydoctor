import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className=" w-11/12 mx-auto grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
      <InfoCard
        icon={clock}
        bgColor={"bg-primary"}
        cardHeading={"Opening hours"}
        cardText={"Everyday 6AM t0 10PM"}
      />
      <InfoCard
        icon={location}
        bgColor={"bg-neutral"}
        cardHeading={"Visit our location"}
        cardText={"kamarpara, uttara, dhaka-1230"}
      />
      <InfoCard
        icon={phone}
        bgColor={"bg-accent"}
        cardHeading={"Contact us"}
        cardText={"+0171980142"}
      />
    </div>
  );
};

export default Info;
