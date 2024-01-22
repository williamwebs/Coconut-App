import { TiPlus } from "react-icons/ti";

const Features = () => {
  return (
    <section className="mt-20 sm:mt-10 mb-10 w-full">
      <h2 className="head_text text-left sm:text-center">
        Built <br className="sm:hidden" />{" "}
        <span className="blue_gradient">for You</span>
      </h2>

      {/* features */}
      <div className="mt-10 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="w-full border border-gray-800 rounded-md p-8 relative">
            <h4 className="text-lg text-[#e6e6e6] font-medium font-grotesk max-w-xl">
              Advanced{" "}
              <span className="text-purple-800 font-semibold"> Typography</span>
            </h4>

            <div className="plus-icon">
              <TiPlus className="text-white" />
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-2">
              <div className="w-full border border-gray-800 rounded-md p-8 relative">
                <h4 className="text-lg text-[#e6e6e6] font-medium font-grotesk max-w-xl">
                  Built for
                  <span className="text-purple-800 font-semibold"> SEO</span>
                </h4>

                <div className="plus-icon">
                  <TiPlus className="text-white" />
                </div>
              </div>
              <div className="w-full border border-gray-800 rounded-md p-8 relative">
                <h4 className="text-lg text-[#e6e6e6] font-medium font-grotesk max-w-xl">
                  Payment
                  <span className="text-purple-800 font-semibold">
                    {" "}
                    Integration
                  </span>
                </h4>

                <div className="plus-icon">
                  <TiPlus className="text-white" />
                </div>
              </div>
              <div className="w-full border border-gray-800 rounded-md p-8 relative">
                <h4 className="text-lg text-[#e6e6e6] font-medium font-grotesk max-w-xl">
                  One-click
                  <span className="text-purple-800 font-semibold">
                    {" "}
                    Installation
                  </span>
                </h4>

                <div className="plus-icon">
                  <TiPlus className="text-white" />
                </div>
              </div>
              <div className="w-full border border-gray-800 rounded-md p-8 relative">
                <h4 className="text-lg text-[#e6e6e6] font-medium font-grotesk max-w-xl">
                  Mobile
                  <span className="text-purple-800 font-semibold">
                    {" "}
                    Friendly
                  </span>
                </h4>

                <div className="plus-icon">
                  <TiPlus className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
