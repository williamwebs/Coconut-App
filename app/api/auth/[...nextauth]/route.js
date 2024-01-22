import clientPromise from "@/libs/mongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    },
    pages: {
      signIn: "/"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Coconut App",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        await connectToDB();

        const user = await User.findOne({ email: credentials.email });
        console.log(user);

        const passwordCorrect = await compare(
          credentials?.password || "",
          user.password
        );

        if (passwordCorrect) {
          return { id: user._id, email: user.email };
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
