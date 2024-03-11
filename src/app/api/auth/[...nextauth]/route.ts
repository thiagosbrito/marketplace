import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

const authoptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_AUTH_CLIENT_ID || "",
      clientSecret: process.env.NEXT_GOOGLE_AUTH_CLIENT_SECRET || "",
    }),
  ]
};

const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };