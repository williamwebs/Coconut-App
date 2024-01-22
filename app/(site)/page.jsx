import Features from "@/components/Features";
import MobileFirst from "@/components/MobileFirst";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);

  if (session) redirect("/dashboard");
  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="head_text text-center">
        Create Unforgetable
        <br className="md:block" />
        <span className="blue_gradient text-center">Birthday Experiences</span>
      </h1>
      <p className="desc text-center">
        Create personalized birthday celebrations with{" "}
        <span className="text-blue-400">coconut</span> - because every moment
        deserves to be extraordinary.
      </p>
      <Link href="/" className="secondary_btn mt-10 animate-pulse">
        Get Started
      </Link>

      <MobileFirst />
      <Features />
    </section>
  );
}
