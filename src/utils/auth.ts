import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import db from "./db";

import authConfig from "./auth.config";
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(db), // prisma is not edge runtime supporter so we dont use this auth here in middleware
    session: {
        strategy: "jwt",
    },

});

