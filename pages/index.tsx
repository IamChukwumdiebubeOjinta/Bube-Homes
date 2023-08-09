import type { NextPage } from "next";
import Hero from "../components/hero";
import PropertiesViewWrapper from "../components/properties-view-wrapper";
import WhatWeOffer from "../components/WhatWeOffer";
import LatestProperties from "../components/LatestProperties";
import ContactUs from "../components/contact-us";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Hero />
      <PropertiesViewWrapper />
      <WhatWeOffer />
      <LatestProperties />
      {/* <RentPropertiesWrapper /> */}
      <ContactUs />
    </div>
  );
};

export default LandingPage;
