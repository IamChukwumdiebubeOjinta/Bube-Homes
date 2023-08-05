import type { NextPage } from "next";
import { useEffect } from "react";
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
import { useRouter } from "next/router";

const Hero: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onSearchCTAClick = () => {
    router.push("/");
  };

  return (
    <div className="self-stretch flex flex-col py-[7.5rem] px-[1.88rem] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-[3.25rem] text-gray-white font-body-regular-400">
      <div
        className="self-stretch flex flex-col items-center justify-center gap-[3.88rem] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_scale-up] opacity-[1] max-w-[false]"
        data-animate-on-scroll
      >
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-[1.25rem] leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.06rem] text-left text-[1rem] text-primary-700 font-body-regular-600">
          <div className="flex flex-row items-start justify-start gap-[0.63rem]">
            <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.5rem] bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start hover:bg-darkslateblue active:animate-[1s_ease_0s_infinite_normal_none_pulsate] active:opacity-[1]">
              <div className="relative text-[1rem] leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.5rem] bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start hover:animate-[1s_ease_0s_infinite_normal_none_pulsate] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_pulsate] active:opacity-[1]">
              <div className="relative text-[1rem] leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-[2rem] px-[3.88rem] box-border items-center justify-between max-w-[87.5rem] md:w-[18.75rem] md:flex-col md:gap-[1.25rem] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[8.56rem] flex flex-col items-start justify-start gap-[1rem] text-center">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Locations
                </div>
                <Dropdown
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "New York" },
                          { value: "Los Angeles" },
                          { value: "Chicago" },
                          { value: "Berlin" },
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
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[11.06rem] flex flex-col items-start justify-start gap-[1rem]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[9.38rem]">
                  Property Type
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
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
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[9.69rem] flex flex-col items-start justify-start gap-[1rem]">
                <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[9.38rem]">
                  Rent Range
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {(
                        [
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
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
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <button
                className="cursor-pointer [border:none] py-[0.75rem] px-[1.5rem] bg-primary-500 rounded w-[6.38rem] flex flex-row box-border items-center justify-center hover:bg-darkslateblue hover:animate-[1s_ease_0s_infinite_normal_none_pulsate] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_pulsate] active:opacity-[1]"
                onClick={onSearchCTAClick}
              >
                <div className="relative text-[1rem] leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                  Search
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
