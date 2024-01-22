import Card from "@/app/dashboard component/card/Card";
import React from "react";

const Dashboard = async () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Dashboard;
