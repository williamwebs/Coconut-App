"use client";

import GoogleAndFacebookProviders from "@/app/dashboard component/googleFacebook/GoogleAndFacebookProviders";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignUp = ({ onSetComponent }) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // console.log(user);

  const handleSignIn = () => {
    onSetComponent("signIn");
  };

  const toggleViewPassword = () => {
    setViewPassword((prev) => !prev);
  };

  // handle form input change
  const handleFormInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));

    // console.log(user);
  };

  // fn to create a new user
  const createUser = async (e) => {
    e.preventDefault();

    const userData = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    };

    try {
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log(res);

      if (res.ok) {
        router.push("/dashboard");
        router.refresh();
        console.log("user created!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <aside className="sign-up-wrapper w-full">
      <h2 className="text-3xl text-center font-grotesk font-semibold">
        Sign Up
      </h2>

      {/* google and facebook signIn buttons */}
      <section className="mt-3 mb-2">
        <GoogleAndFacebookProviders
          facebookTitle="Sign up with Facebook"
          googleTitle="Sign up with Google"
        />

        <div className="w-6 h-6 rounded-full bg-red-400 border border-gray-100 mx-auto flex items-center justify-center mt-2">
          <span className="text-white text-xs font-semibold font-grotesk">
            or
          </span>
        </div>
      </section>

      {/* form */}
      <div className="sign-up-form">
        <form onSubmit={createUser}>
          {/* first name */}
          <div className="w-full relative mt-3">
            <label
              htmlFor="firstName"
              className="block w-full text-sm font-grotesk font-semibold "
            >
              First name
            </label>
            <input
              value={user.firstname}
              name="firstname"
              onChange={handleFormInputChange}
              type="text"
              id="firstname"
              className="w-full h-9 bg-gray-100 rounded-full px-4 font-grotesk font-regular text-gray-900 outline-none"
            />
          </div>

          {/* last name */}
          <div className="w-full relative mt-3">
            <label
              htmlFor="lastName"
              className="block w-full text-sm font-grotesk font-semibold "
            >
              Last name
            </label>
            <input
              value={user.lastname}
              name="lastname"
              onChange={handleFormInputChange}
              type="text"
              id="lastname"
              className="w-full h-9 bg-gray-100 rounded-full px-4 font-grotesk font-regular text-gray-900 outline-none"
            />
          </div>

          {/* email */}
          <div className="w-full relative mt-3">
            <label
              htmlFor="email"
              className="block w-full text-sm font-grotesk font-semibold "
            >
              Email
            </label>
            <input
              value={user.email}
              name="email"
              onChange={handleFormInputChange}
              type="text"
              id="email"
              className="w-full h-9 bg-gray-100 rounded-full px-4 font-grotesk font-regular text-gray-900 outline-none"
            />
          </div>

          {/* password */}
          <div className="w-full mt-3">
            <label
              htmlFor="password"
              className="block w-full text-sm font-grotesk font-semibold "
            >
              Password
            </label>

            <div className="relative">
              <input
                value={user.password}
                name="password"
                onChange={handleFormInputChange}
                type={viewPassword ? "text" : "password"}
                id="password"
                className="w-full h-9 bg-gray-100 rounded-full px-4 font-grotesk font-regular text-gray-900 outline-none"
              />

              {viewPassword ? (
                <IoMdEyeOff
                  className="absolute top-[50%] right-3 -translate-y-[50%] text-gray-800 cursor-pointer"
                  onClick={toggleViewPassword}
                />
              ) : (
                <IoMdEye
                  className="absolute top-[50%] right-3 -translate-y-[50%] text-gray-800 cursor-pointer"
                  onClick={toggleViewPassword}
                />
              )}
            </div>
          </div>

          {/* confirm password */}
          <div className="w-full mt-3">
            <label
              htmlFor="password"
              className="block w-full text-sm font-grotesk font-semibold "
            >
              Confirm password
            </label>

            <div className="relative">
              <input
                value={user.confirmPassword}
                name="confirmPassword"
                onChange={handleFormInputChange}
                type={viewPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full h-9 bg-gray-100 rounded-full px-4 font-grotesk font-regular text-gray-900 outline-none"
              />

              {viewPassword ? (
                <IoMdEyeOff
                  className="absolute top-[50%] right-3 -translate-y-[50%] text-gray-800 cursor-pointer"
                  onClick={toggleViewPassword}
                />
              ) : (
                <IoMdEye
                  className="absolute top-[50%] right-3 -translate-y-[50%] text-gray-800 cursor-pointer"
                  onClick={toggleViewPassword}
                />
              )}
            </div>
          </div>

          <button className="outline_btn w-full mt-3">Sign up</button>
        </form>

        <div className="flex items-center justify-between mt-5">
          <p className="text-sm font-grotesk font-medium">
            Already have an account?
          </p>
          <button onClick={handleSignIn} className="outline_btn">
            {loading ? "Signing up ..." : "Sign up"}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SignUp;
