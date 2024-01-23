import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const GET = async (req) => {
  console.log(req);
  try {
    await connectToDB();

    

    
    // const user = await User.findOne({ email });
    // return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch profile", { status: 500 });
  }
};
