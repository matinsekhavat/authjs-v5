// cause prisma by default not support edge runtime, so we need to use this file to config the auth middleware

// we use this file to config the auth middleware
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/_data/user";
import { LoginSchema } from "@/schema";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (!validatedFields.success) {
          throw new Error("credenetials are not valid");
        }
        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);
        if (!user || !user.password) {
          return null;
        }
        const passwordMatches = await bcrypt.compare(password, user.password);
        if (passwordMatches) {
          return user;
        }
        return null;
      },
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
} satisfies NextAuthConfig;
