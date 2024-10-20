import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth(({ nextUrl, auth }) => {
  // req.auth
  const url = nextUrl.clone();
  url.pathname = "/api/auth/signin";

  if (!auth) {
    return NextResponse.redirect('http://localhost:3000/api/auth/signin');
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}