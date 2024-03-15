"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

//session provider para acessar os dados do usuário, lembra o context api
export const AuthProvider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
