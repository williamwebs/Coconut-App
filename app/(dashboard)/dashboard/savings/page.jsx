"use client";

import styles from "./savings.module.css";

const Savings = () => {
  return (
    <div className={styles.container}>
      <div className="mb-4 flex justify-end">
        <button className="secondary_btn" onClick={() => {}}>
          Start saving
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
          <aside className="text-textSoft font-league border border-dashboardBgSoft bg-dashboardBgSoft hover:bg-transparent transition-all duration-300 cursor-pointer rounded-md w-1/2 sm:w-1/2 text-center p-2 py-5">
            <h3 className="text-xl sm:text-3xl font-semibold">$100,000</h3>
            <p className="text-xs tracking-wide sm:text-sm">Saved</p>
          </aside>
          <aside className="text-textSoft font-league border border-dashboardBgSoft bg-dashboardBgSoft hover:bg-transparent transition-all duration-300 cursor-pointer rounded-md w-1/2 sm:w-1/2 text-center p-2 py-5">
            <h3 className="text-xl sm:text-3xl font-semibold">$90,000</h3>
            <p className="text-xs tracking-wide sm:text-sm">Withdrawn</p>
          </aside>
        </div>

        <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
          <aside className="text-textSoft font-league border border-dashboardBgSoft bg-dashboardBgSoft hover:bg-transparent transition-all duration-300 cursor-pointer rounded-md w-1/2 sm:w-1/2 text-center p-2 py-5">
            <h3 className="text-xl sm:text-3xl font-semibold">$10,000</h3>
            <p className="text-xs tracking-wide sm:text-sm">Balance</p>
          </aside>
          <aside className="text-textSoft font-league border border-dashboardBgSoft bg-dashboardBgSoft hover:bg-transparent transition-all duration-300 cursor-pointer rounded-md w-1/2 sm:w-1/2 text-center p-2 py-5">
            <h3 className="text-xl sm:text-3xl font-semibold">4</h3>
            <p className="text-xs tracking-wide sm:text-sm">
              Savings portfolio
            </p>
          </aside>
        </div>
      </div>

      {/* graph to show savings per week */}
      {/* an aside to show the portfolios. max of 4 with a link to the portfolio page 
      displaying all the portfolio */}
    </div>
  );
};

export default Savings;
