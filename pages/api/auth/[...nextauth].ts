import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "e4ba8e20e25ae99949e8",
      clientSecret: "58008175e5e6d88a43910e5e7e7f88e627852473",
    }),
  ],
  secret: "qwe123!!",
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);
