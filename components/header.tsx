import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type HeaderType = {
  hamburger?: boolean;

  /** Style props */
  topContainerOpacity?: Property.Opacity;
};

const Header: NextPage<HeaderType> = ({ hamburger, topContainerOpacity }) => {

  return (
    <header
      className="self-stretch bg-gray-white h-[6.13rem] flex flex-row py-[1.38rem] px-[5rem] box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-[1.5rem] text-primary-500 font-body-regular-600 lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border"
    >
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-center gap-[0.5rem]">
          <img
            className="relative w-[2.75rem] h-[2.75rem]"
            alt=""
            src="/houseline.svg"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">
              Bube’s Homes
            </div>
            <div className="relative text-[0.88rem] leading-[16px] font-medium">
              Real Estate
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end gap-[2.25rem] text-[0.88rem] text-primary-900 sm:flex">
          <ul className="flex flex-row items-start justify-start gap-[1.88rem] lg:hidden list-none">
            <li className="relative leading-[22px] cursor-pointer" id="#">HOME</li>
            <li className="relative leading-[22px] cursor-pointer" id="#">ABOUT US</li>
            <li className="relative leading-[22px] cursor-pointer" id="#">OUR AGENTS</li>
            <li className="relative leading-[22px] font-semibold">
              PROPERTIES
            </li>
            <li className="relative leading-[22px] cursor-pointer" id="#">GALLERY</li>
            <li className="relative leading-[22px] cursor-pointer" id="#">BLOG</li>
            <li className="relative leading-[22px] cursor-pointer" id="#">CONTACT US</li>
            <li className="relative leading-[22px] cursor-pointer" id="#">SEARCH</li>
          </ul>
          {!hamburger && (
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
              <img
                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
