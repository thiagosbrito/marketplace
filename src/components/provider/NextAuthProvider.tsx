"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface NextAuthProviderProps {
  children: React.ReactNode;
  session: Session;
}

const NextAuthProvider = ({ children, session }: NextAuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default NextAuthProvider;