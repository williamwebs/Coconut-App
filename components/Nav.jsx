"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import SignInComponent from "./SignIn";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  // const session = false;
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const [component, setComponent] = useState("signIn");

  const handleSetComponent = (currentComponent) => {
    setComponent(currentComponent);

    switch (component) {
      case "signIn":
        return <SignInComponent />;
        break;
      case "signUp":
        return <SignUp />;
        break;
      case "forgotPassword":
        return <ForgotPassword />;
        break;
      default:
        return <SignInComponent />;
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="flex_between navigation_bg z-10">
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src="/assets/images/logo.png"
            width={40}
            height={40}
            className="bg-black rounded-full"
          />
          <p className="logo_text">coconut.</p>
        </Link>
        {/* desktop navigation */}
        <div className="sm:flex">
          {session ? (
            <>
              <Link href="/dashboard" className="primary_btn">
                Go to Dashboard
              </Link>
              <button className="outline_btn ml-2" onClick={() => signOut()}>
                logout
              </button>
            </>
          ) : (
            <div className="flex gap-3 md:gap-2">
              <button className="outline_btn">privacy policy</button>
              <button className="primary_btn" onClick={openModal}>
                sign in
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {component === "signIn" && (
          <SignInComponent onSetComponent={handleSetComponent} />
        )}
        {component === "signUp" && (
          <SignUp onSetComponent={handleSetComponent} />
        )}
        {component === "forgotPassword" && (
          <ForgotPassword onSetComponent={handleSetComponent} />
        )}
      </Modal>
    </>
  );
};

export default Nav;
