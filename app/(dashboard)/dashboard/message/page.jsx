"use client";

import { useState } from "react";

import {
  BiArrowFromLeft,
  BiChevronLeftCircle,
  BiChevronRightCircle,
} from "react-icons/bi";
import styles from "./message.module.css";
import Modal from "@/components/Modal";

const Messages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <div className="flex items-center justify-between text-textSoft w-full md:w-1/2">
        <div className="font-grotesk font-medium text-sm">1000 messages</div>
        <div className="flex items-center gap-2 text-sm">
          <BiChevronLeftCircle className="text-2xl cursor-pointer" />
          <span className="text-sm font-grotesk">1/100</span>
          <BiChevronRightCircle className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* messages */}
      <div className="flex items-start gap-5 font-league">
        <div className="w-full md:w-1/2 bg-dashboardBgSoft text-black p-2 my-2 rounded-md">
          <div className="relative text-base border border-dashboardBg bg-dashboardBg text-textSoft w-full p-1 px-3 my-2 cursor-pointer rounded-full">
            Happy birthday to you. I love you...
            <div
              onClick={toggleModal}
              className="absolute right-1 top-[50%] -translate-y-[50%] bg-textSoft rounded-full p-1 cursor-pointer"
            >
              <BiArrowFromLeft className="text-red-600" />
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="w-full md:w-1/2 text-black my-5">
            <div className="text-base text-textSoft">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              error! Delectus voluptates fugit aliquid cumque ducimus
              voluptatum, repellat tempore dicta perspiciatis laboriosam sunt
              qui harum? Inventore quis eos laborum quidem quae eum facilis
              explicabo, ut fuga iure possimus animi facere ad ab quod!
              Blanditiis ad doloremque consectetur saepe, quis sed!
            </div>
          </div>
        )}
      </div>

      {/* modal */}
      {/* <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2 className="font-bold">message appears here</h2>
      </Modal> */}
    </div>
  );
};

export default Messages;
