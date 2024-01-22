import { signIn } from "next-auth/react";

const GoogleAndFacebookProviders = ({ googleTitle, facebookTitle }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 sm:justify-between">
      <button
        className="primary_btn w-full sm:w-fit"
        onClick={() => signIn("google")}
      >
        {googleTitle}
      </button>
      <button className="primary_btn w-full sm:w-fit">{facebookTitle}</button>
    </div>
  );
};

export default GoogleAndFacebookProviders;
