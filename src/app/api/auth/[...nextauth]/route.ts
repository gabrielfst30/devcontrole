import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

//handler terá as configuraçoes do nextAuth
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, handler as PUT, handler as DELETE}