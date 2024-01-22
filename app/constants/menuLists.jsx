import { LuLayoutDashboard, LuPiggyBank } from "react-icons/lu";
import { BiMessageSquareDots, BiSave } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdSettings } from "react-icons/md";

export const menuLists = [
  {
    heading: "Dashboard",
    icon: <LuLayoutDashboard />,
    path: "/dashboard",
  },
  {
    heading: "Profile",
    icon: <FaRegUser />,
    path: "/dashboard/profile",
  },
  {
    heading: "Messages",
    icon: <BiMessageSquareDots />,
    path: "/dashboard/message",
  },
  {
    heading: "Bucket Lists",
    icon: <TbListDetails />,
    path: "/dashboard/bucket-lists",
  },
  {
    heading: "Transactions",
    icon: <CiMoneyCheck1 />,
    path: "/dashboard/transactions",
  },
  {
    heading: "Savings",
    icon: <LuPiggyBank />,
    path: "/dashboard/savings",
  },
  {
    heading: "Settings",
    icon: <MdSettings />,
    path: "/dashboard/settings",
  },
  {
    heading: "websites",
    icon: <TbWorldWww />,
    path: "/dashboard/websites",
  },
];
