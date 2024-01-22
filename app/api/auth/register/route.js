import { connectToDB } from "@/utils/database";
import User from "@/models/user";
import { hash } from "bcrypt";

export const POST = async (req) => {
  const { firstname, lastname, email, password, confirmPassword } =
    await req.json();

  try {
    await connectToDB();

    const hashedPassword = await hash(password, 10);
    const hashedConfirmPassword = await hash(confirmPassword, 10);

    //   check if user exits in the database
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return new Response("Email already exists!", { status: 400 });

    //   if email doesnt exits, create new user
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
    });
    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response("Failed to register user!", { status: 500 });
  }
};
