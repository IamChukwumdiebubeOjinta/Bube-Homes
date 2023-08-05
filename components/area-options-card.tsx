import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type AreaOptionsCardType = {
  homeSaleRentId?: string;
  homeSaleRentText?: string;

  /** Style props */
  propPadding?: Property.Padding;
  propWidth?: Property.Width;
};

const AreaOptionsCard: NextPage<AreaOptionsCardType> = ({
  homeSaleRentId,
  homeSaleRentText,
  propPadding,
  propWidth,
}) => {
  const sellYourHomeStyle: CSS.Properties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[1.38rem] box-border items-start justify-start min-w-[18.75rem] max-w-[21.25rem] text-center text-[1.5rem] text-gray-700 font-body-regular-600"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[1.5rem]">
        <img
          className="relative w-[4.88rem] h-[4.88rem] overflow-hidden shrink-0"
          alt=""
          src={homeSaleRentId}
        />
        <div className="flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="relative leading-[32px] font-semibold">
            {homeSaleRentText}
          </div>
          <div className="relative text-[1rem] leading-[24px] text-lightslategray text-left flex items-end w-[16.75rem]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[1rem] leading-[24px] font-body-regular-600 text-primary-500 text-left inline-block">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreaOptionsCard;
