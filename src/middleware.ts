import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const authenticatedRoutes = ['/weather'];

  const cookie = request.cookies.get('next-auth.session-token');

  // Check if the current route requires authentication
  if (authenticatedRoutes.includes(pathName)) {
    // If the user is not authenticated, redirect to '/'
    if (!cookie || !cookie.value) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Check if the current route is a public route that should not be accessed by authenticated users
  if (pathName === '/' && cookie && cookie.value) {
    return NextResponse.redirect(new URL('/weather', request.url));
  }

  // If neither of the conditions is met, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/weather', '/'],
};
