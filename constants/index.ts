import { SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import menu from "antd/lib/menu";

interface NAV_LINKItem {
  name: string;
  link: string;
}

export const NAV_LINKS: NAV_LINKItem[][] = [
  [
    {
      name: "Buy",
      link: "/homes",
    },
    {
      name: "Rent",
      link: "/homes/rent",
    },
    {
      name: "Sell",
      link: "/homes/sell-properties",
    },
    {
      name: "My Homes",
      link: "/homes/my-homes",
    },
    {
      name: "Agents",
      link: "/find-agents",
    },
  ],
  [
    {
      name: "Manage Rentals",
      link: "/dash/manage-rentals",
    },
    {
      name: "Advertise",
      link: "/dash/adverts",
    },
    {
      name: "FAQs",
      link: "/faqs",
    },
    {
      name: "Sign In",
      link: "#contact-us",
    },
  ],
];
