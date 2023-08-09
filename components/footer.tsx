import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import { PhoneOutlined } from "@ant-design/icons";

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
  return (
    <div className="self-stretch overflow-hidden p-[3.13rem]">
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-[1.5rem] text-gray-black font-body-regular-400 md:flex-col md:gap-[3.13rem] sm:flex-col sm:gap-[3.13rem] sm:flex-[unset] sm:self-stretch">
        <div className="w-[19.5rem] h-[18.75rem] flex flex-col items-start justify-start gap-[1.25rem] text-center text-primary-500 font-body-regular-600">
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <img
              className="relative w-[2.75rem] h-[2.75rem]"
              alt=""
              src={imageIds}
            />
            <div className="flex flex-col items-start justify-center text-primary-500">
              <div className="font-semibold">Bube’s Homes</div>
              <div className="text-[0.88rem] font-medium">Real Estate</div>
            </div>
          </div>
          <div className="self-stretch h-[10.5rem] flex flex-col items-start justify-start gap-[0.81rem] text-left text-[1rem] text-gray-500 font-body-regular-400">
            <div className="relative text-[1.5rem] leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className="relative leading-[24px]">
              <PhoneOutlined className="scale-x-[-1] text-lg" /> :{" "}
              <a href="tel:+234 0000000069" className="text-inherit">
                +234 0000000069
              </a>
            </div>
            <div className="relative leading-[24px] flex items-end w-[19.5rem]">
              Helping you find a perfect fit by finding a home that’s perfect
              for you.
            </div>
            <div className="relative leading-[24px] text-gray-700">
              Email:{" "}
              <a
                href="mailto:support@bubehomes4you.com"
                className="text-inherit"
              >
                support@bubehomes4you.com
              </a>
            </div>
          </div>
          <div className="w-[19rem] flex flex-row items-center justify-start gap-3">
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
          </div>
        </div>
        {/* Features */}
        <div className="w-[10.81rem] h-[15.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[11.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[24px]">Home</div>
            <div className="relative leading-[24px]">Pricing</div>
            <div className="relative leading-[24px]">Blog</div>
            <div className="relative leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="w-[10.81rem] h-[15.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[11.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[24px]">About Us</div>
            <div className="relative leading-[24px]">Contact</div>
            <div className="relative leading-[24px]">Careers</div>
          </div>
        </div>
        <div className="w-[12.69rem] h-[10.5rem] flex flex-col items-start justify-start gap-[2rem]">
          <div className="relative leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[6.5rem] flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-500">
            <div className="relative leading-[24px]">Terms of services</div>
            <div className="relative leading-[24px]">Privacy Policy</div>
            <div className="relative leading-[24px]">FAQs</div>
          </div>
        </div>
      </footer>
      <hr />
      {/* <div className="flex items-center justify-center text-center relative leading-[24px] text-gray-700">
  Designed by Javascript Mastery and Developed by Me
</div> */}
    </div>
  );
};

export default Footer;
