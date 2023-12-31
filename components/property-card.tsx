import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type PropertyCardType = {
  imageDimensions?: string;
  imageDimensionsText?: string;
  imageDimensionsText2?: string;
  imageDimensionsText3?: string;
  imageDimensionsText4?: string;
  imageDimensionsText5?: string;
  imageDimensionsText6?: string;
  imageDimensionsText7?: string;

  /** Style props */
  propWidth?: Property.Width;
  propFlex?: Property.Flex;
  propMinWidth?: Property.MinWidth;
  propMaxWidth?: Property.MaxWidth;
  propBoxSizing?: Property.BoxSizing;
  propDisplay?: Property.Display;
  propBoxSizing1?: Property.BoxSizing;
  propDisplay1?: Property.Display;
  propBoxSizing2?: Property.BoxSizing;
  propDisplay2?: Property.Display;
  propDisplay3?: Property.Display;
  propDisplay4?: Property.Display;
  propDisplay5?: Property.Display;
};

const PropertyCard: NextPage<PropertyCardType> = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensionsText5,
  imageDimensionsText6,
  imageDimensionsText7,
  propWidth,
  propFlex,
  propMinWidth,
  propMaxWidth,
  propBoxSizing,
  propDisplay,
  propBoxSizing1,
  propDisplay1,
  propBoxSizing2,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propDisplay5,
}) => {
  const card1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
      maxWidth: propMaxWidth,
    };
  }, [propWidth, propFlex, propMinWidth, propMaxWidth]);

  const propertyNameStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: propBoxSizing,
    };
  }, [propBoxSizing]);

  const aLLIUMPLACEORLANDOStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const priceStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: propBoxSizing1,
    };
  }, [propBoxSizing1]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const moreDetailsStyle: CSS.Properties = useMemo(() => {
    return {
      boxSizing: propBoxSizing2,
    };
  }, [propBoxSizing2]);

  const div1Style: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const div2Style: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const ftStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const jennyWilsonStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay5,
    };
  }, [propDisplay5]);

  return (
    <div
      className="rounded-3xs bg-gray-white box-border w-[21.88rem] h-[29.19rem] flex flex-col py-[0.94rem] px-[0.81rem] items-start justify-start gap-[1.44rem] text-left text-[0.91rem] text-gray-700 font-body-regular-600 border-[1px] border-solid border-whitesmoke-100 hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-[1.25rem]"
      style={card1Style}
    >
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[12.5rem] shrink-0 object-cover"
        alt=""
        src={imageDimensions}
      />
      <div
        className="self-stretch flex flex-row p-[0.63rem] items-start justify-start"
        style={propertyNameStyle}
      >
        <div
          className="flex-1 relative leading-[20.32px] font-medium"
          style={aLLIUMPLACEORLANDOStyle}
        >
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div
        className="self-stretch flex flex-row p-[0.63rem] items-start justify-start text-[0.85rem] text-primary-500"
        style={priceStyle}
      >
        <div
          className="relative leading-[18.98px] font-semibold"
          style={divStyle}
        >
          $ 590,693
        </div>
      </div>
      <div
        className="self-stretch flex flex-row py-[0rem] px-[0.63rem] items-start justify-start gap-[1.06rem] text-[0.68rem] text-gray-500"
        style={moreDetailsStyle}
      >
        <div className="flex flex-row items-center justify-start gap-[0.27rem]">
          <img
            className="relative w-[1.09rem] h-[1.09rem]"
            alt=""
            src={imageDimensionsText}
          />
          <div
            className="relative leading-[16.27px] font-medium"
            style={div1Style}
          >
            4
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.27rem]">
          <img
            className="relative w-[1.09rem] h-[1.09rem]"
            alt=""
            src={imageDimensionsText2}
          />
          <div
            className="relative leading-[16.27px] font-medium"
            style={div2Style}
          >
            4
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.27rem]">
          <img
            className="relative w-[1.09rem] h-[1.09rem]"
            alt=""
            src={imageDimensionsText3}
          />
          <div
            className="relative leading-[16.27px] font-medium"
            style={ftStyle}
          >
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-[0.73rem]">
        <div className="flex flex-row items-center justify-start gap-[0.36rem]">
          <img
            className="relative rounded-[50%] w-[1.72rem] h-[1.72rem] object-cover"
            alt=""
            src={imageDimensionsText4}
          />
          <div
            className="relative leading-[17.42px] font-medium"
            style={jennyWilsonStyle}
          >
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.54rem]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[0.18rem] items-start justify-start">
            <img
              className="relative w-[0.91rem] h-[0.91rem]"
              alt=""
              src={imageDimensionsText5}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[0.18rem] items-start justify-start">
            <img
              className="relative w-[0.91rem] h-[0.91rem]"
              alt=""
              src={imageDimensionsText6}
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[0.18rem] items-start justify-start">
            <img
              className="relative w-[0.91rem] h-[0.91rem]"
              alt=""
              src={imageDimensionsText7}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
