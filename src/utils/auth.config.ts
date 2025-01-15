// cause prisma by default not support edge runtime, so we need to use this file to config the auth middleware

// we use this file to config the auth middleware
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/_data/user";
import { LoginSchema } from "@/schema";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
  ],
} satisfies NextAuthConfig;
