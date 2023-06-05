import { RxDashboard } from "react-icons/rx";
import { HiOutlineSupport } from "react-icons/hi";
import { AiOutlineCar } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { RiScissors2Line } from "react-icons/ri";
import { BsCalendar4Range } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

export const navigationItems = [
  {
    id: 1,
    link: "Dashboard",
    icon: <RxDashboard />,
    pathLink: "dashboard",
  },

  {
    id: 3,
    link: "Booking",
    icon: <AiOutlineCar />,
    pathLink: "booking",
  },
];
