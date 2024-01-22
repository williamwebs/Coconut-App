"use client";

import Lists from "@/app/dashboard component/bucketlist/Lists";
import styles from "./wishlist.module.css";
import { useState } from "react";
import Modal from "@/components/Modal";
import CreateList from "@/app/dashboard component/bucketlist/CreateList";

const BucketList = () => {
  const [openModal, setOpenModal] = useState(false);

  const createList = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div>
      <div className="my-4 flex justify-end">
        <button className="secondary_btn" onClick={createList}>
          Create list
        </button>
      </div>

      <div className="text-textSoft font-grotesk p-2 my-2">
        {/* <h3 className="text-base sm:text-lg font-medium font-grotesk text-center mt-10 tracking-wide">
          No List to display. <br className="hidden sm:block" /> Click on the
          "create list" button above to create a list
        </h3> */}
        <Lists
          name="Product Name"
          price="product price"
          desc="product description"
          image=""
        />
      </div>

      {/* modal */}
      <Modal isOpen={openModal} onClose={createList}>
        <CreateList name="Create" />
      </Modal>
    </div>
  );
};

export default BucketList;
