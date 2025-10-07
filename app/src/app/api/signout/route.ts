import { NextResponse } from "next/server";

export async function POST() {
    try {
        const res = NextResponse.json({ message: "Sign out successful" }, { status: 200 });

        // Clear the authentication token cookie
        res.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0), // Set to a past date
            maxAge: 0,
            path: "/",
        });

        // Clear the CSRF secret cookie
        res.cookies.set("csrf-secret", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0),
            maxAge: 0,
            path: "/",
        });

        // Clear the client-readable CSRF token cookie
        res.cookies.set("XSRF-TOKEN", "", {
            secure: process.env.NODE_ENV === "production",
            expires: new Date(0),
            maxAge: 0,
            path: "/",
        });

        return res;
    } catch (error) {
        console.error("Signout error:", error);
        return NextResponse.json({ error: "An unexpected error occurred during sign out." }, { status: 500 });
    }
}
