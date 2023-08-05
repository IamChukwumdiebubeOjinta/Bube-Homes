import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type LatestRentCardType = {
  /** Style props */
  propBackgroundImage?: Property.BackgroundImage;
};

const LatestRentCard: NextPage<LatestRentCardType> = ({
  propBackgroundImage,
}) => {
  const card12Style: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="flex-1 rounded-md h-[26.63rem] flex flex-col p-[1.5rem] box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[22.19rem] max-w-[23.13rem] text-left text-[1rem] text-gray-white font-body-regular-600"
      style={card12Style}
    >
      <div className="self-stretch h-[1.5rem] flex flex-row items-end justify-center gap-[2rem]">
        <div className="flex flex-row items-start justify-end gap-[0.5rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/mappin.svg"
          />
          <div className="relative leading-[24px] font-medium">Washington</div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[0.5rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/arrowsout4.svg"
          />
          <div className="relative leading-[24px] font-medium">12000</div>
        </div>
      </div>
    </div>
  );
};

export default LatestRentCard;
