import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Search from "antd/lib/transfer/search";
import type { NextPage } from "next";

const HomeLayout: NextPage = () => {
  return (
    <div className="relative bg-gray-white w-full h-[70vh] flex flex-col flex-1 items-center justify-start">
      <nav className="self-stretch bg-slate-200 h-[4.6rem] flex flex-row py-[1.38rem] px-[5rem] box-border items-center justify-start sticky w-full top-[0] z-[2] text-center text-[1.5rem] text-primary-500 font-body-regular-600 lg:pl-[2.5rem] lg:pr-[2.5rem] lg:box-border md:pl-[1.5rem] md:pr-[1.5rem] md:box-border">
        <div className="flex-1 rounded-3xl bg-gray-white flex flex-row py-1 px-1 box-border items-center justify-between max-w-[25.5rem] md:w-[18.75rem] md:flex-col md:gap-[1.25rem] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
          <Input addonBefore={<SearchOutlined />} size="large" placeholder="Enter Location..." className="h-full" />
        </div>
      </nav>
      <div className="flex flex-1 w-full">
        <div className="flex-[0.6]">
            
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
