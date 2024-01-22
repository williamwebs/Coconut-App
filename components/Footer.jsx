import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gird-cols-4 gap-1 sm:gap-6 py-10">
        <div className="p-4">
          <Link href="/" className="flex items-start gap-2">
            <Image
              src="/assets/images/logo.png"
              width={40}
              height={40}
              className="bg-black rounded-full"
            />
            <p className="font-semibold font-league text-2xl tracking-wide text-white">
              coconut.
            </p>
          </Link>
        </div>
        <div className="p-4">
          <h5 className="blue_gradient font-bold mb-4">Useful links</h5>
          <ul className="">
            <li>
              <a href="" className="text-gray-300 text-sm hover:text-gray-200">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="" className="text-gray-300 text-sm hover:text-gray-200">
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h5 className="blue_gradient font-bold mb-4">Follow us</h5>
          <ul className="">
            <li>
              <a href="" className="text-gray-300 text-sm hover:text-gray-200">
                Facebook
              </a>
            </li>
            <li>
              <a href="" className="text-gray-300 text-sm hover:text-gray-200">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h5 className="blue_gradient font-bold">
            Join our newsletter to stay up to date on features and releases.
          </h5>

          <form className="mt-5 h-10 relative rounded-md overflow-hidden">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@email.com"
              className="h-full w-full px-2 rounded-md outline-none text-gray-600 text-sm bg-gray-200"
            />
            <button
              type="submit"
              className="absolute right-1 top-[50%] -translate-y-[50%] bg-orange-500 hover:bg-orange-600 text-sm px-2 py-1 rounded-md transition-all delay-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
