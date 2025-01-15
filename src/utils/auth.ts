import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "./db";

import authConfig from "./auth.config";
import { getUserById } from "@/_data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db), // prisma is not edge runtime supporter so we dont use this auth here in middleware
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token }) => {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role as "ADMIN" | "USER";
      return token;
    },
    session: async ({ session, token }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as "ADMIN" | "USER";
      }
      return session;
    },
  },
});

// token is sync with jwt and session
//if we sat token.mmd ="test" in jwt we also see this field  in  session is pass
// everything want extend to session first should be pass into jwt
