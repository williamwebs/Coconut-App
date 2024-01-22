"use client";

import { menuLists } from "@/app/constants/menuLists";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { MdLogout } from "react-icons/md";

const Menu = ({ toggle }) => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <div className="my-5 font-grotesk text-textSoft font-medium">
        {menuLists.map((i) => (
          <Link
            href={i.path}
            className="flex items-center gap-3 sm:gap-5 py-1 px-2 rounded-md bg-transparent hover:bg-dashboardBgSoft transition-all duration-500 mb-2 sm:mb-4"
            key={i.heading}
          >
            <div className="text-[1.3rem]">{i.icon}</div>
            <div
              className={`${
                toggle ? "opacity-0 delay-300" : "block"
              } text-[1rem]`}
            >
              {i.heading}
            </div>
          </Link>
        ))}

        {/* logout */}
        <div className="absolute bottom-2 left-7 sm:left-6 cursor-pointer flex items-center gap-3 sm:gap-5">
          <div>
            <MdLogout className="text-[1.3rem]" />
          </div>
          <div
            className={`${
              toggle ? "opacity-0 delay-300" : "block"
            } text-[1rem]`}
            onClick={() => signOut()}
          >
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
