"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
                        <p className="text-xl text-gray-600 mb-4">{error.message}</p>
                        <button onClick={() => reset()} className="text-blue-500 hover:text-blue-700 underline mr-4">
                            Try again
                        </button>
                        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
                            Return to Home
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    );
}
