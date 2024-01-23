"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { usePathname } from "next/navigation";
import { MdClose, MdMenu, MdPublic } from "react-icons/md";
import Link from "next/link";
import Menu from "../menu/Menu";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Navbar = ({ openModal }) => {
  const [mounted, setMounted] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const pathname = usePathname();

  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  // open notification modal
  const toggleNotification = () => {
    openModal();
  };

  // open mobile menu
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{pathname.split("/").pop()}</div>
        <div className={styles.icons}>
          <div className={styles.icon} onClick={toggleNotification}>
            <IoMdNotificationsOutline size={20} />
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div className={styles.icon}>
            <MdPublic size={20} />
          </div>
        </div>
        <Link
          href="/dashboard/profile"
          className="hidden sm:block text-textSoft"
        >
          <h6 className="text-xs font-semibold font-league">Welcome back</h6>
          <span className="block text-sm font-light font-league -mt-1 tracking-wide">
            {session?.user?.email}
          </span>
        </Link>

        {/* hamburgar menu */}
        <div className="bg-dashboardBgSoft rounded-md flex items-center justify-center p-1 cursor-pointer sm:hidden">
          {menuIsOpen ? (
            <MdClose className="text-2xl text-textSoft" onClick={toggleMenu} />
          ) : (
            <MdMenu className="text-2xl text-textSoft" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* mobile menu */}
      {menuIsOpen && (
        <section
          className={`${
            menuIsOpen ? "left-[120px]" : "left-[400px]"
          } sm:hidden absolute top-20 min-w-[250px] p-5 py-8 bg-dashboardBgSoft rounded-md transition-all duration-1000`}
        >
          <div className="">
            <Image
              src="/assets/images/logo.png"
              width="40"
              height="40"
              alt=""
              className="bg-black rounded-full"
            />
            <p className="font-semibold font-league text-xl text-white tracking-wide">
              coconut.
            </p>
          </div>

          {/* menu */}
          <div className="menu">
            <Menu />
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
