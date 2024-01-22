"use client";

import Modal from "@/components/Modal";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import CreateList from "./CreateList";

const Lists = ({ name, price, desc, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editList = () => {
    setIsModalOpen((prev) => !prev);
  };

  const deleteList = () => {
    //
  };

  return (
    <div className="font-league">
      <aside className="flex flex-col sm:flex-row items-start justify-between gap-5 sm:gap-0 border-b border-dashboardBgSoft font-grotesk p-1 pb-2 my-2">
        <div className="w-full sm:w-1/3 flex items-start gap-3">
          <div className="image w-20 h-20 bg-dashboardBgSoft rounded-md"></div>
          <div>
            <h3 className="text-base font-bold tracking-wide">{name}</h3>
            <span className="text-sm font-light tracking-wide">{price}</span>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <p className="text-sm font-light tracking-wide">{desc}</p>
        </div>
        <div className="w-full sm:w-1/3 flex justify-end">
          <div className="flex items-center gap-2">
            <div
              onClick={editList}
              className="rounded-full flex items-center justify-center bg-textSoft p-1 w-7 h-7 cursor-pointer"
            >
              <MdEdit className="text-green-600 text-sm" />
            </div>
            <div
              onClick={() => deleteList(id)}
              className="rounded-full flex items-center justify-center bg-textSoft p-1 w-7 h-7 cursor-pointer"
            >
              <MdDelete className="text-red-600 text-sm" />
            </div>
          </div>
        </div>
      </aside>

      {/* modal */}
      <Modal isOpen={isModalOpen} onClose={editList}>
        <CreateList name="Edit" />
      </Modal>
    </div>
  );
};

export default Lists;
