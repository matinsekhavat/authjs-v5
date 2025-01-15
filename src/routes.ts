/**
 * Public routes are routes that are not protected and not authenticated
 * Protected routes are routes that are protected and authenticated
 * Auth routes are routes that are only accessible to authenticated users
 */
export const PUBLIC_ROUTES: string[] = ["/"];
export const PROTECTED_ROUTES: string[] = ["/settings"];
export const AUTH_ROUTES: string[] = ["/auth/register", "/auth/login"];
export const apiAuthPrefix: string = "/api/auth"; //never block this route in middleware also not in public routes
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
