"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./sidebar.module.css";
import { TbChevronLeftPipe } from "react-icons/tb";
import Menu from "../menu/Menu";

const SideNav = () => {
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <section
        className={`${toggle ? "w-[4.8rem]" : "w-[16rem]"} ${styles.container}`}
      >
        <div className={styles.logo_container}>
          <Image
            src="/assets/images/logo.png"
            width="40"
            height="40"
            alt=""
            className="bg-black rounded-full"
          />
          {!toggle && <p className={styles.logo_text}>coconut.</p>}
        </div>

        {/* toggle btn */}
        <div
          className="absolute top-[4rem] -left-4 w-8 h-8 border border-gray-700 bg-dashboardBgSoft flex items-center justify-center rounded-full cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <TbChevronLeftPipe
            className={`${
              toggle ? "rotate-180" : ""
            } text-xl text-textSoft transition-all duration-500`}
          />
        </div>

        {/* menu */}
        <div className="menu">
          <Menu toggle={toggle} />
        </div>
      </section>
    </>
  );
};

export default SideNav;
