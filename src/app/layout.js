"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <GoogleOAuthProvider clientId="1068387664961-51d7s58ap400kdjg9bqv6pdkeb4uqbj6.apps.googleusercontent.com"> */}
        {children}
        {/* </GoogleOAuthProvider> */}
      </body>
    </html>
  );
}
