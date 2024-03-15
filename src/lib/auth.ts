//adaptador prisma para o nextAuth
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from 'next-auth/adapters';
import Google from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import prismaClient from "./prisma";

//configurações de authentication
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient) as Adapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string,
        name: string,
        email: string;
      };

      return session;
    },
  },
};
