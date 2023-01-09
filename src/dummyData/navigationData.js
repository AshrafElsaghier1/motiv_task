import shape from "../assets/imgs/icons/shape.png"
import dashboard from "../assets/imgs/icons/dashboard.png"
import car from "../assets/imgs/icons/car.png"
import bag from "../assets/imgs/icons/bag.png"
import cart from "../assets/imgs/icons/cart.png"
import cut from "../assets/imgs/icons/cut.png"
import calender from "../assets/imgs/icons/calender.png"
import comment from "../assets/imgs/icons/comment.png"
export const navigationItems = [
    {
        id: 1,
        link: "Dashboard",
        icon: dashboard,
        pathLink: "dashboard"
    },
    {
        id: 2,
        link: "Assets",
        icon: shape,
        pathLink: "assets"

    },
    {
        id: 3,
        link: "Booking",
        icon: car,
        pathLink: "booking"

    },
    {
        id: 4,
        link: "Sell Cars",
        icon: bag,
        pathLink: "sell-cars"

    },
    {
        id: 5,
        link: "Buy Cars",
        icon: cart,
        pathLink: "buy-cars"

    },
    {
        id: 6,
        link: "Services",
        icon: cut,
        pathLink: "services"

    },
    {
        id: 7,
        link: "Calender",
        icon: calender,
        pathLink: "calender"

    },
    {
        id: 8,
        link: "Messages",
        icon: comment,
        pathLink: "messages"

    }
]