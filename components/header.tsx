import { FC, useState } from "react";
import { Button, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

import { NAV_LINKS } from "../constants/index";
import SearchModal from "../helpers/SearchModal";

interface HeaderProps {
  hamburger?: boolean;
}

const Header: FC<HeaderProps> = ({ hamburger }) => {
  return (
    <header className="self-stretch bg-gray-white h-[6.13rem] flex flex-row py-[1.38rem] px-[5rem] box-border items-center justify-center sticky w-full top-[0] z-[2] text-center text-[1.5rem] text-primary-500 font-body-regular-600 lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-end gap-[2.25rem] text-[0.88rem] text-primary-900 sm:flex">
          <ul className="flex flex-row items-center justify-evenly gap-[1.88rem] lg:hidden list-none text-black">
            {NAV_LINKS[0].map((item, idx: number) => (
              <Link href={item.link} key={idx} passHref>
                <li className={`cursor-pointer text-black`}>
                  {item.name?.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
          {!hamburger && (
            <button className="cursor-pointer border-none p-0 bg-transparent hidden flex-row items-center justify-center lg:flex">
              <img
                className="w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          )}
        </div>
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-[0.5rem] cursor-default"
        >
          <img
            className="w-[2.75rem] h-[2.75rem]"
            alt="logo"
            src="/houseline.svg"
          />
          <div className="flex flex-col items-center justify-center text-primary-500">
            <div className="font-semibold">Bube’s Homes</div>
            <div className="text-[0.88rem] font-medium">Real Estate</div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[2.25rem] text-[0.88rem] text-primary-900 sm:flex">
          <ul className="flex flex-row items-center justify-start gap-[1.88rem] lg:hidden list-none text-black">
            {NAV_LINKS[1].map(({ name, link }: any, idx: number) => (
              <Link href={link} key={idx} passHref>
                <li className={`cursor-pointer text-black`}>
                  {name?.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
          {!hamburger && (
            <button className="cursor-pointer border-none p-0 bg-transparent hidden flex-row items-center justify-center lg:flex">
              <img
                className="w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 md:flex"
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
