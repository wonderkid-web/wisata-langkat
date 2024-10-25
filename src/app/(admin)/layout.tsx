import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import AuthWrapper from "@/src/wrapper/AdminAuthWrapper";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wisata Langkat",
  description:
    "Merupakan website pemesanan online untuk destinasi wisata Kabupaten Langkat Sumatera Utara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen sm:max-h-screen relative">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen max-h-screen overflow-auto`}
      >
        <AuthWrapper>{children}</AuthWrapper>
        <Toaster />
      </body>
    </html>
  );
}
