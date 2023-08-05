import type { NextPage } from "next";
import LatestRentCard from "./latest-rent-card";

const RentPropertiesWrapper2: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col py-[5.38rem] px-[0rem] items-center justify-start gap-[2.44rem] text-center text-[2.5rem] text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[2.5rem] max-w-[false]">
        <div className="w-[43rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-[false] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-[1.25rem] leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[2.5rem] text-left text-[1rem] text-gray-white">
          <LatestRentCard />
          <LatestRentCard propBackgroundImage={`url("/card-21@3x.png")`} />
          <LatestRentCard propBackgroundImage={`url("/card-31@3x.png")`} />
          <LatestRentCard propBackgroundImage={`url("/card-41@3x.png")`} />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.5rem] bg-primary-500 rounded flex flex-row items-start justify-start hover:animate-[1s_ease_0s_infinite_normal_none_pulsate] hover:opacity-[1]">
        <div className="relative text-[1rem] leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesWrapper2;
