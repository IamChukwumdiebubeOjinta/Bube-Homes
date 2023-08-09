import type { NextPage } from "next";
import { useState } from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button, Input } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import SearchModal from "../helpers/SearchModal";
import Search from "antd/lib/input/Search";

const Hero: NextPage = () => {
  const [searchModal, setSearchModal] = useState<boolean>(false);

  const handleSearchModal = () => {
    setSearchModal((prev) => !prev);
  };

  let inputProps = {
    allowClear: true,
    prefix: (
      <img
        className="w-[24px] h-full object-contain"
        alt="home-icon"
        src="/houseline.svg"
      />
    ),
    placeholder: "Enter an address...",
    className: "hero-search placeholder:italic",
  };

  return (
    <section className="self-stretch flex flex-col py-[7.5rem] px-[1.88rem] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-[3.25rem] text-gray-white font-body-regular-400">
      <div
        className="self-stretch flex flex-col items-center justify-center gap-[3.88rem] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-[false]"
        data-animate-on-scroll
      >
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <span className="self-stretch italic relative text-[1.25rem] leading-[28px] font-body-regular-600 text-primary-50">
            "Helping you find a perfect fit by finding a home that’s perfect for
            you."
          </span>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.06rem] text-left text-[1rem] text-primary-700 font-body-regular-600">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-3xl bg-gray-white flex flex-row py-1 px-1 box-border items-center justify-between max-w-[35.5rem] md:w-[18.75rem] md:flex-col md:gap-[1.25rem] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <Search
                {...inputProps}
                size="large"
                style={{ borderRadius: "1.5rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
