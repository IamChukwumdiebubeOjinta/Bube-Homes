import type { NextPage } from "next";
import AreaCard from "./area-card";

const PropertiesViewWrapper: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-[3.31rem] px-[3.13rem] items-center justify-start gap-[2.81rem] text-center text-[2.5rem] text-primary-800 font-body-regular-600">
      <div className="py-[0rem] px-[1.88rem] w-full text-left md:w-auto max]">
        <div className="self-stretch relative leading-[48px] font-semibold text-center">
          Browse Homes in Various Locations
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-[0rem] px-[0.63rem] box-border items-start justify-center max-w-[false] text-left text-[1.5rem] text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[1.5rem] max-w-[81.25rem]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[1.63rem] lg:flex-row md:flex-col">
            <AreaCard cityName="Centerville" />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-2@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-3@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[1.5rem] lg:flex-row md:flex-col">
            <AreaCard
              cityName="Arlington"
              propBackgroundImage={`url("/card-4@3x.png")`}
              propPadding="0.63rem"
              propBoxSizing="border-box"
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-5@3x.png")`}
              propPadding="0.63rem"
              propBoxSizing="border-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesViewWrapper;
