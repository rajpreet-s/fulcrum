import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        const { email, password }: { email: string; password: string } = await req.json();

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET as string, {
            expiresIn: "1h",
        });

        const res = NextResponse.json({ message: "Login successful" });
        res.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60,
            sameSite: "lax",
        });

        return res;
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
