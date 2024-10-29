import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { clientPath } from "./stataic";

export default auth(({ auth, nextUrl }) => {
  if (!auth) return NextResponse.redirect(`${process.env.AUTH_URL}/signin`);
  if(clientPath.includes(nextUrl.pathname) && auth.user.email.includes('admin')) return NextResponse.redirect(`${process.env.AUTH_URL}/admin`);


  
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
    "/((?!api|_next/static|_next/image|favicon.ico|signin|signup).*)",
  ],
};
