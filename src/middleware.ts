// import { NextResponse } from "next/server";
// import { auth } from "./utils/auth"; // prisma is not edge runtime supporter so we dont use this auth here in middleware
import {
  AUTH_ROUTES,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
  // PROTECTED_ROUTES,
  PUBLIC_ROUTES,
} from "./routes";
import NextAuth from "next-auth";
import authConfig from "./utils/auth.config"; // we use this file to config the auth middleware for edge runtime support
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req: any) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);
  if (isApiAuthRoute) return null;

  if (isAuthRoute) {
    //login page & register page
    if (isLoggedIn) {
      //if user is logged in, redirect to default login redirect cause we dont want to show login page to user if they are already logged in
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl)); //=> nextUrl  +  DEFAULT_LOGIN_REDIRECT
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  return null;
});
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images/).*)",
  ],
};

//we instead of main auth.ts file, we use this auth.config.ts file to config the auth middleware for edge runtime support cause prisma is not edge runtime supporter
//this structure is from next-auth documentation
