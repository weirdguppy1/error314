import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "error314 — TEENAGERS_WITH_TOO_MUCH_AMBITION",
  description:
    "A St. Louis hack club for teen founders. June-Aug. 15 spots. Come build things that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexMono.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
