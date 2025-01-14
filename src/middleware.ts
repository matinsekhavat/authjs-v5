
// import { NextResponse } from "next/server";
// import { auth } from "./utils/auth"; // prisma is not edge runtime supporter so we dont use this auth here in middleware

import NextAuth from "next-auth";
import authConfig from "./utils/auth.config"; // we use this file to config the auth middleware for edge runtime support
const {auth} = NextAuth(authConfig);

export default auth((req) => {
  // const isLoggedIn = !!req.auth;
  // if (!isLoggedIn) {
  //   return NextResponse.redirect(new URL("/auth/register", req.nextUrl.origin));
  // }
  // return NextResponse.next();
});
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images/).*)',
  ],
};

//we instead of main auth.ts file, we use this auth.config.ts file to config the auth middleware for edge runtime support cause prisma is not edge runtime supporter
//this structure is from next-auth documentation
