"use client";

import Modal from "@/components/Modal";
import Navbar from "../dashboard component/navbar/Navbar";
import SideNav from "../dashboard component/sidebar/SideNav";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <html lang="en">
      <body className="">
        <div className="flex items-center w-full h-screen overflow-y-auto sm:overflow-hidden bg-dashboardBg">
          <div className="flex gap-5 h-full w-full mt-6">
            <section>
              <SideNav />
            </section>
            <section className="main_content flex-1 pr-5">
              <Navbar openModal={toggleModal} />
              {children}

              {isModalOpen && (
                <Modal isOpen={toggleModal} onClose={toggleModal}>
                  <h3 className="block w-full mt-2 mb-1 text-lg font-bold font-league text-center">No Notification!</h3>
                </Modal>
              )}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
