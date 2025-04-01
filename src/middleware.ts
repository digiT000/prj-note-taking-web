import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the user is trying to access exactly the /app route
  if (pathname === '/app') {
    // Redirect to /app/all-notes
    return NextResponse.redirect(new URL('/app/all-notes', request.url));
  }

  // For all other paths, continue as normal
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/app/:path*',
};
