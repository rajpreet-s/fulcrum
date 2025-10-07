// Custom error for when the CSRF token is not found
export class CsrfTokenMissingError extends Error {
    constructor(message = "CSRF token not found. Please refresh the page.") {
        super(message);
        this.name = "CsrfTokenMissingError";
    }
}

// Custom error for general API failures
export class ApiError extends Error {
    status: number;
    info: unknown;

    constructor(message: string, status: number, info: unknown = {}) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.info = info;
    }
}

// Helper function to get a cookie by name
function getCookie(name: string): string | undefined {
    if (typeof document === 'undefined') {
        return undefined;
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
}

export async function apiFetch(url: string, options: RequestInit = {}): Promise<Response> {
    const unsafeMethods = ['POST', 'PUT', 'DELETE', 'PATCH'];

    if (options.method && unsafeMethods.includes(options.method.toUpperCase())) {
        const csrfToken = getCookie("XSRF-TOKEN");
        if (!csrfToken) {
            throw new CsrfTokenMissingError();
        }

        // Use the Headers object to safely append headers
        const headers = new Headers(options.headers);
        headers.set('x-csrf-token', csrfToken);
        // Set Content-Type to JSON only if it's not already specified
        if (!headers.has('Content-Type')) {
            headers.set('Content-Type', 'application/json');
        }
        options.headers = headers;
    }

    let response;
    try {
        response = await fetch(url, options);
    } catch (error) {
        // Handle network errors (e.g., server is down, DNS issues)
        throw new ApiError("Network error, please try again later.", 0, error);
    }

    if (!response.ok) {
        // Handle HTTP errors (e.g., 404, 500)
        let errorInfo: unknown = {};
        try {
            // Try to parse a JSON error body from the API
            errorInfo = await response.json();
        } catch (e) {
            // Ignore if the response is not JSON
        }
        const errorMessage = (errorInfo as { error?: string })?.error || `Request failed with status ${response.status}`;
        throw new ApiError(errorMessage, response.status, errorInfo);
    }

    return response;
}
