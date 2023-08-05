import type { NextPage } from "next";
import Header from "../components/header";
import Hero from "../components/hero";
import PropertiesViewWrapper from "../components/properties-view-wrapper";
import PropertiesRentWrapper from "../components/properties-rent-wrapper";
import RentPropertiesWrapper from "../components/rent-properties-wrapper";
import RentPropertiesWrapper2 from "../components/rent-properties-wrapper2";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Header />
      <Hero />
      <PropertiesViewWrapper />
      <PropertiesRentWrapper />
      <RentPropertiesWrapper />
      <RentPropertiesWrapper2 />
      <ContactUs />
      <Footer
        imageIds="/houseline2.svg"
        smallImageIds="/social-media-logo5.svg"
        mediumImageIds="/social-media-logo6.svg"
        smallImageIds2="/social-media-logo7.svg"
        smallImageIds3="/social-media-logo8.svg"
        largeImageIds="/social-media-logo9.svg"
        propOverflow="unset"
      />
    </div>
  );
};

export default LandingPage;
