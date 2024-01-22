"use client";

import GoogleAndFacebookProviders from "@/app/dashboard component/googleFacebook/GoogleAndFacebookProviders";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const SignInComponent = ({ onSetComponent }) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    onSetComponent("signUp");
  };

  const handleForgotPassword = () => {
    onSetComponent("forgotPassword");
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

    console.log(user);
  };

  // fn to create a new user
  const signInUser = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/dashboard");
      console.log("user logged in!");
      setLoading(false);
    }

    setLoading(false);

    console.log(res);
  };
  return (
    <aside className="sign-in-wrapper w-full">
      <h2 className="text-3xl text-center font-grotesk font-semibold">
        Sign In
      </h2>

      {/* form */}
      <div className="login-form">
        <form onSubmit={signInUser}>
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

          <p className="block w-full text-sm font-grotesk font-medium mt-3">
            Forgot Password?{" "}
            <button onClick={handleForgotPassword} className="underline">
              click here
            </button>
          </p>

          <button className="outline_btn w-full mt-3">
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* google and facebook signIn buttons */}
        <section className="mt-4">
          <div className="w-6 h-6 rounded-full bg-red-400 border border-gray-100 mx-auto flex items-center justify-center mb-2">
            <span className="text-white text-xs font-semibold font-grotesk">
              or
            </span>
          </div>
          <GoogleAndFacebookProviders
            facebookTitle="Sign in with Facebook"
            googleTitle="Sign in with Google"
          />
        </section>

        <div className="flex items-center justify-between mt-5">
          <p className="text-sm font-grotesk font-medium">
            Dont have an account?
          </p>
          <button onClick={handleSignUp} className="outline_btn">
            Sign up
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SignInComponent;
