const ForgotPassword = ({ onSetComponent }) => {
  const handleSignIn = () => {
    onSetComponent("signIn");
  };
  return (
    <aside className="forgot-password-wrapper w-full">
      <h2 className="text-3xl text-center font-grotesk font-semibold">
        Forgot Password
      </h2>
      <form>
        {/* email */}
        <div className="w-full relative mt-3">
          <label
            htmlFor="email"
            className="block w-full text-sm font-grotesk font-semibold "
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="w-full h-9 bg-gray-100 rounded-full px-4 font-grotesk font-regular text-gray-900 outline-none"
          />
        </div>

        <button className="outline_btn w-full mt-3">Reset password</button>
      </form>

      <div className="flex items-center justify-between mt-5">
        <p className="text-sm font-grotesk font-medium">
          Remember your password?
        </p>
        <button onClick={handleSignIn} className="outline_btn">
          Sign in
        </button>
      </div>
    </aside>
  );
};

export default ForgotPassword;
