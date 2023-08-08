import type { NextPage } from "next";
import AreaOptionsCard from "./area-options-card";

const WhatWeOffer: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col py-[4.38rem] px-[0rem] items-center justify-start text-center text-[2.5rem] text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col pt-[4.69rem] px-[0rem] pb-[0rem] box-border items-center justify-start gap-[3.38rem] max-w-[false]">
        <div className="py-[0rem] px-[1.88rem] w-full text-left md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold text-center">
            Discover how we can help
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[5.38rem] text-[1.5rem] text-gray-700">
          <AreaOptionsCard
            homeSaleRentId="/icon.svg"
            homeSaleRentText="Sell your home"
          />
          <AreaOptionsCard
            homeSaleRentId="/icon1.svg"
            homeSaleRentText="Rent your home"
            propPadding="1.38rem 1rem"
            propWidth="19.5rem"
          />
          <AreaOptionsCard
            homeSaleRentId="/icon2.svg"
            homeSaleRentText="Buy a home"
            propPadding="1.38rem"
            propWidth="unset"
          />
          <AreaOptionsCard
            homeSaleRentId="/icon3.svg"
            homeSaleRentText="Free marketing"
            propPadding="1.38rem 1.25rem"
            propWidth="19.5rem"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
