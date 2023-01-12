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
        pathLink: "dashboard"
    },
    {
        id: 2,
        link: "Assets",
        icon: <HiOutlineSupport />,
        pathLink: "assets"

    },
    {
        id: 3,
        link: "Booking",
        icon: <AiOutlineCar />,
        pathLink: "booking"

    },
    {
        id: 4,
        link: "Sell Cars",
        icon: <HiOutlineShoppingBag />,
        pathLink: "sell-cars"

    },
    {
        id: 5,
        link: "Buy Cars",
        icon: <BsCart2 />,
        pathLink: "buy-cars"

    },
    {
        id: 6,
        link: "Services",
        icon: <RiScissors2Line />,
        pathLink: "services"

    },
    {
        id: 7,
        link: "Calender",
        icon: <BsCalendar4Range />,
        pathLink: "calender"

    },
    {
        id: 8,
        link: "Messages",
        icon: <BiMessageDetail />,
        pathLink: "messages"

    }
]