import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import { cert } from "firebase-admin/app";

const authoptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_AUTH_CLIENT_ID || "",
      clientSecret: process.env.NEXT_GOOGLE_AUTH_CLIENT_SECRET || "",
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
    })
 })
};

const {handler} = NextAuth(authoptions);
export { handler as GET, handler as POST};