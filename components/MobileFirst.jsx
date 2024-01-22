import Link from "next/link";
import { MdOutlineArrowCircleRight } from "react-icons/md";


const MobileFirst = () => {
  return (
    <section className="mt-20 w-full">
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/images/mobile.png"
            alt="mobile device"
            className="w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="head_text">
            Mobile-First <br className="md:block" />
            <span className="blue_gradient text-center">Approach</span>
          </h2>
          <p className="desc w-full md:w-4/5">
            Switch to mobile or tablet devices to adjust spacing, text sizes,
            alignments and more.
          </p>

          {/* features */}
          <div className="mt-10">
            <Link href="/" className="secondary_btn w-fit flex items-center gap-2">
              see more features <MdOutlineArrowCircleRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirst;
