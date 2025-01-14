// cause prisma by default not support edge runtime, so we need to use this file to config the auth middleware

// we use this file to config the auth middleware
import Github from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";


export default {
  providers: [Github],
} satisfies NextAuthConfig;