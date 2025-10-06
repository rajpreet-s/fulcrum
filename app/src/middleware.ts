import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
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
        return NextResponse.next();
    } catch (err) {
        console.error("JWT Verification Error:", err);
        // Invalid token, redirect to login
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/deals/:path*", "/settings/:path*"],
};
