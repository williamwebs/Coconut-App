import Card from "@/app/dashboard component/card/Card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async () => {
  const session = await getServerSession();

  if (!session) redirect("/");
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
