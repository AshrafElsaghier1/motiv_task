import { FaTint, FaArrowsAltV } from "react-icons/fa";
import { GiFlatTire } from "react-icons/gi"
import { AiFillThunderbolt } from "react-icons/ai"

export const featuresData = [
    {
        title: "Energy",
        id: 1,
        precentage: "45",
        text: "45%",
        icon: <AiFillThunderbolt />,
        color: "rgb(8 65 122)",
        bgColor: "rgb(8 65 122 / 17%)"
    }, {
        title: "Range",
        id: 2,
        precentage: "50",
        text: "157k%",
        icon: <FaArrowsAltV />,
        color: "#FF7E86",
        bgColor: "rgba(255, 126, 134, 0.1)"

    }, {
        title: "Break fluid",
        id: 3,
        precentage: "9",
        text: "9%",
        icon: <FaTint />,
        color: "#A162F7",
        bgColor: "rgba(161, 98, 247, 0.1)"

    }, {
        title: "Tire Wear",
        id: 4,
        precentage: "25",
        text: "25%",
        icon: <GiFlatTire />,
        color: "#F6CC0D",
        bgColor: "rgba(246, 204, 13, 0.1)"

    }
]