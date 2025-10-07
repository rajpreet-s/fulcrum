import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { nanoid } from "nanoid";

// Function to generate a random string for the CSRF token
const generateCsrfToken = () => nanoid(32);

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const res = NextResponse.next();

    // --- CSRF Protection ---
    const csrfCookieName = "csrf-secret";
    const csrfHeaderName = "x-csrf-token";
    const formPages = ["/login", "/signup"];
    const apiRoutes = ["/api/login", "/api/signup", "/api/signout"];

    if (formPages.includes(pathname)) {
        // For form pages, generate a token and set the cookies
        const token = generateCsrfToken();
        res.cookies.set(csrfCookieName, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        res.cookies.set("XSRF-TOKEN", token, {
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
    } else if (apiRoutes.includes(pathname)) {
        // For API routes, validate the token
        const csrfSecret = req.cookies.get(csrfCookieName)?.value;
        const csrfTokenHeader = req.headers.get(csrfHeaderName);

        if (!csrfSecret || !csrfTokenHeader || csrfSecret !== csrfTokenHeader) {
            return new NextResponse("CSRF token validation failed", { status: 403 });
        }
    }

    // --- JWT Authentication ---
    const protectedRoutes = ["/dashboard", "/deals", "/settings"];
    const isProtectedRoute = protectedRoutes.some((path) => pathname.startsWith(path));

    if (!isProtectedRoute) {
        return res; // Not a protected route, continue
    }

    const token = req.cookies.get("token")?.value;
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        return new NextResponse("Internal Server Error: JWT_SECRET not configured", { status: 500 });
    }

    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        const secretKey = new TextEncoder().encode(jwtSecret);
        await jwtVerify(token, secretKey);
        return res; // Token is valid
    } catch (err) {
        console.error("JWT Verification Error:", err);
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: [
        // Protected pages
        "/dashboard/:path*",
        "/deals/:path*",
        "/settings/:path*",
        // Pages and APIs for CSRF
        "/login",
        "/signup",
        "/api/login",
        "/api/signup",
        "/api/signout",
    ],
};
