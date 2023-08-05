import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterType = {
  imageIds?: string;
  smallImageIds?: string;
  mediumImageIds?: string;
  smallImageIds2?: string;
  smallImageIds3?: string;
  largeImageIds?: string;

  /** Style props */
  propOverflow?: Property.Overflow;
};

const Footer: NextPage<FooterType> = ({
  imageIds,
  smallImageIds,
  mediumImageIds,
  smallImageIds2,
  smallImageIds3,
  largeImageIds,
  propOverflow,
}) => {
  const footerSectionStyle: CSS.Properties = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className="self-stretch overflow-hidden flex flex-row p-[3.13rem] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0rem] sm:flex-col"
      style={footerSectionStyle}
    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-[1.5rem] text-gray-black font-body-regular-400 md:flex-col md:gap-[3.13rem] sm:flex-col sm:gap-[3.13rem] sm:flex-[unset] sm:self-stretch">
        <div className="w-[19.5rem] h-[18.75rem] flex flex-col items-start justify-start gap-[1.25rem] text-center text-primary-500 font-body-regular-600">
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[2.75rem] h-[2.75rem]"
              alt=""
              src={imageIds}
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-[0.88rem] leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="self-stretch h-[10.5rem] flex flex-col items-start justify-start gap-[0.81rem] text-left text-[1rem] text-gray-500 font-body-regular-400">
            <div className="relative text-[1.5rem] leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className="relative leading-[24px]">Call : +123 400 123</div>
            <div className="relative leading-[24px] flex items-end w-[19.5rem]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="relative leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[19rem] flex flex-row items-center justify-between">
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.35rem]"
                alt=""
                src={smallImageIds}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={mediumImageIds}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={smallImageIds2}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={smallImageIds3}
              />
            </div>
            <div className="rounded bg-primary-50 flex flex-col p-[0.88rem] items-center justify-center">
              <img
                className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src={largeImageIds}
              />
            </div>
          </div>
        </div>
        <div className="w-[10.81rem] h-[15.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[11.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[24px]">Home</div>
            <div className="relative leading-[24px]">Become a Host</div>
            <div className="relative leading-[24px]">Pricing</div>
            <div className="relative leading-[24px]">Blog</div>
            <div className="relative leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="w-[10.81rem] h-[15.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[11.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[24px]">About Us</div>
            <div className="relative leading-[24px]">Press</div>
            <div className="relative leading-[24px]">Contact</div>
            <div className="relative leading-[24px]">Careers</div>
            <div className="relative leading-[24px]">Blog</div>
          </div>
        </div>
        <div className="w-[12.69rem] h-[10.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[6.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[24px]">Terms of servies</div>
            <div className="relative leading-[24px]">Privacy Policy</div>
            <div className="relative leading-[24px]">Security</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
