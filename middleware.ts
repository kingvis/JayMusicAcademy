import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// No-op middleware to avoid requiring CLERK_SECRET_KEY during development.
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
