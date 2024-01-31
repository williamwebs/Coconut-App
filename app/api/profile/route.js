import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const GET = async (req) => {
  try {

    console.log("API request received", req.url);
    await connectToDB();

    // const { email } = req.query || {};

     const url = new URL(req.url, "http://localhost:3000");
    const email = url.searchParams.get("email");
    
    console.log(email);

    if (!email) return new Response("Email is required!", { status: 400 });

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) return new Response("User not found!", { status: 400 });

    return new Response(JSON.stringify(user), { status: 200 });

    // const user = await User.findOne({ email: req.email });

    // console.log(req);
    // return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch profile", { status: 500 });
  }
};
