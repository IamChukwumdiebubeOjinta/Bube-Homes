import type { NextPage } from "next";
import Head from "next/head";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Header from "../components/header";
import PropertiesWrapper from "../components/properties-wrapper";
import Footer from "../components/footer";

const PropertiesGridView: NextPage = () => {
  return (
    <>
      <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-[3.25rem] text-gray-white font-body-regular-400">
        {/* <Header hamburger={false} /> */}
        <div className="self-stretch h-[15rem] flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="flex flex-col items-center justify-start gap-[0.75rem]">
            <div className="relative leading-[72px] font-semibold">
              Properties
            </div>
            <div className="relative text-[1rem] leading-[24px] text-whitesmoke-200 font-body-regular-600">
              <span>{`Home / `}</span>
              <span className="font-medium text-gray-white">Properties</span>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col pt-[4rem] px-[0rem] pb-[0.5rem] items-center justify-start gap-[5.94rem] text-left text-[1rem] text-gray-black font-body-regular-600 lg:pl-[7.5rem] lg:pr-[7.5rem] lg:box-border md:pl-[3.75rem] md:pr-[3.75rem] md:box-border sm:pl-[1.25rem] sm:pr-[1.25rem] sm:box-border">
          <div className="w-[17rem] flex flex-row items-center justify-start">
            <div className="flex flex-row items-end justify-start gap-[1rem]">
              <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                <img
                  className="relative w-[1.5rem] h-[1.5rem]"
                  alt=""
                  src="/listbullets.svg"
                />
                <img
                  className="relative w-[1.5rem] h-[1.5rem]"
                  alt=""
                  src="/squaresfour.svg"
                />
              </div>
              <div className="relative leading-[24px]">Sort by:</div>
              <Dropdown
                overlay={
                  <Menu>
                    {(
                      [
                        { value: "Popular properties" },
                        { value: "Latest properties" },
                        { value: "Recommended properties" },
                      ] as any
                    ).map((option: any, index: number) => (
                      <Menu.Item key={index}>
                        <a onClick={(e) => e.preventDefault()}>
                          {option.value || ""}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomLeft"
                trigger={["hover"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  {`Default Order `}
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
          <PropertiesWrapper />
          <div className="flex flex-row items-end justify-center gap-[0.5rem] text-center text-primary-500">
            <div className="rounded bg-primary-50 flex flex-row p-[0.63rem] items-start justify-start">
              <img
                className="relative w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/arrowleft.svg"
              />
            </div>
            <div className="rounded-10xs bg-primary-500 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start text-gray-white">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[1.63rem]">
                1
              </div>
            </div>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[1.63rem]">
                2
              </div>
            </div>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[1.63rem]">
                3
              </div>
            </div>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[1.63rem]">
                ...
              </div>
            </div>
            <div className="rounded-10xs bg-primary-50 flex flex-col py-[0.63rem] px-[0.56rem] items-start justify-start">
              <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[1.63rem]">
                54
              </div>
            </div>
            <div className="rounded bg-primary-500 flex flex-row p-[0.63rem] items-start justify-start">
              <img
                className="relative w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/arrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesGridView;
