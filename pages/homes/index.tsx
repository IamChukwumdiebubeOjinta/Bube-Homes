import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { NextPage } from "next";
import Map from "../../components/maps";

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const HomeLayout: NextPage = () => {
  const saleOptions = {
    categories: [
      {
        text: "For Sale",
      },
      {
        text: "For Rent",
      },
      {
        text: "Buy",
      },
    ],
    price: [
      {
        text: "Min",
        price: "0 - 2000",
      },
      {
        text: "Mid",
        price: "2000 - 4000",
      },
      {
        text: "Max",
        price: "4000+",
      },
    ],
  };

  return (
    <div className="relative bg-gray-white w-full h-[70vh] flex flex-col flex-1 items-center justify-start">
      <nav className="self-stretch bg-slate-200 h-[4.6rem] flex flex-row py-[1.38rem] px-[5rem] box-border items-center justify-start sticky w-full top-[0] z-[2] text-center text-[1.5rem] text-primary-500 font-body-regular-600 lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border gap-4">
        <div className="flex-1 rounded-3xl bg-gray-white flex flex-row py-1 px-1 box-border items-center justify-between max-w-[25.5rem] md:w-[18.75rem] md:flex-col md:gap-[1.25rem] md:items-start md:justify-start md:ml-[auto] md:mr-[auto] homes-main">
          <Input
            addonBefore={<SearchOutlined style={{ borderRadius: "1.5rem" }} />}
            size="large"
            placeholder="Enter Location..."
            className="h-[30px] text-[18px] flex items-center"
          />
        </div>
        <div className="flex gap-2 items-center justify-evenly">
          <HomesDropDown
            title="Sale Options"
            forText="categories"
            key="categories"
            options={saleOptions.categories}
          />

          <HomesDropDown
            title="Sale Options"
            forText="price"
            key="price"
            options={saleOptions.price}
          />
        </div>
      </nav>
      <div className="flex flex-1 w-full">
        <div className="flex-[0.6]"><Map /></div>
        <div className="flex-[0.4]">Cards</div>
      </div>
    </div>
  );
};

export default HomeLayout;

interface HomesDropDownProps {
  forText?: string;
  title: string;
  options: { price?: string; text: string }[];
}

const HomesDropDown = ({ forText, title, options }: HomesDropDownProps) => {
  return (
    <div className=" ">
      <label
        className="block text-gray-700 text-sm mb-2 sr-only"
        htmlFor={forText}
      >
        {title}
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500 rounded-3xl"
          id={forText}
          name={forText}
        >
          {options?.map((item, idx) => (
            <option key={idx} className="flex items-center gap-3">
              {item.text + " "}{item.price && item.price}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
