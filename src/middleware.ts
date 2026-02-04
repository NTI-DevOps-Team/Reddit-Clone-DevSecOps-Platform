import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const start = Date.now();

    // Create the response first
    const response = NextResponse.next();

    // Add request start time header
    response.headers.set('x-request-start', start.toString());

    // Add response time header
    const duration = Date.now() - start;
    response.headers.set('x-response-time', `${duration}ms`);

    return response;
}

// Apply middleware to API routes only
export const config = {
    matcher: '/api/:path*',
};