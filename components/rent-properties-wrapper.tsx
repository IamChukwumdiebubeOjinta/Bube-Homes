import type { NextPage } from "next";
import PropertyCard from "./property-card";

const RentPropertiesWrapper: NextPage = () => {
  return (
    <form className="self-stretch flex flex-col py-[5.38rem] px-[0rem] items-center justify-start gap-[2.44rem]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[2.5rem] max-w-[false] md:pl-[3.75rem] md:pr-[3.75rem] md:box-border">
        <div className="w-[43rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-[false] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-[2.5rem] leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-[1.25rem] leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-[0rem] px-[0.63rem] items-center justify-center gap-[2rem]">
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc7@2x.png"
            imageDimensionsText="/car5.svg"
            imageDimensionsText2="/bathtub5.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork6.svg"
            imageDimensionsText6="/heart2.svg"
            imageDimensionsText7="/plus7.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="22.19rem"
            propMaxWidth="25rem"
            propBoxSizing="border-box"
            propDisplay="inline-block"
            propBoxSizing1="border-box"
            propDisplay1="inline-block"
            propBoxSizing2="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc8@2x.png"
            imageDimensionsText="/car5.svg"
            imageDimensionsText2="/bathtub5.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork6.svg"
            imageDimensionsText6="/heart2.svg"
            imageDimensionsText7="/plus8.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="22.19rem"
            propMaxWidth="25rem"
            propBoxSizing="border-box"
            propDisplay="inline-block"
            propBoxSizing1="border-box"
            propDisplay1="inline-block"
            propBoxSizing2="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc9@2x.png"
            imageDimensionsText="/car6.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsText3="/arrowsout3.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork7.svg"
            imageDimensionsText6="/heart2.svg"
            imageDimensionsText7="/plus3.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="22.19rem"
            propMaxWidth="25rem"
            propBoxSizing="border-box"
            propDisplay="inline-block"
            propBoxSizing1="border-box"
            propDisplay1="inline-block"
            propBoxSizing2="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
          />
          <PropertyCard
            imageDimensions="/unsplashrlwe8f8anoc10@2x.png"
            imageDimensionsText="/car6.svg"
            imageDimensionsText2="/bathtub.svg"
            imageDimensionsText3="/arrowsout3.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork7.svg"
            imageDimensionsText6="/heart2.svg"
            imageDimensionsText7="/plus3.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="22.19rem"
            propMaxWidth="25rem"
            propBoxSizing="border-box"
            propDisplay="inline-block"
            propBoxSizing1="border-box"
            propDisplay1="inline-block"
            propBoxSizing2="border-box"
            propDisplay2="inline-block"
            propDisplay3="inline-block"
            propDisplay4="inline-block"
            propDisplay5="inline-block"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.5rem] bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-darkslateblue active:animate-[1s_ease_0s_infinite_normal_none_pulsate] active:opacity-[1]">
        <div className="relative text-[1rem] leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </form>
  );
};

export default RentPropertiesWrapper;
