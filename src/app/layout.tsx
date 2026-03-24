import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

import FollowCursor from "@/components/FollowCursor";
import Header from "@/components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srini Vankadari",
  description: "Welcome to Srini Vankadari's personal portfolio website",
  icons: {
    icon: "/KinHeadShot.jpg",
    apple: "/KinHeadShot.jpg",
  },
  openGraph: {
    title: "Srini Vankadari | Personal Portfolio",
    description: "Software Engineering Student @ Western University building clean, scalable products.",
    type: "website",
    images: [
      {
        url: "/KinHeadShot.jpg",
        width: 1200,
        height: 630,
        alt: "Srini Vankadari",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20 dark" suppressHydrationWarning>
      <body className={`${outfit.variable} ${inter.variable} font-[family-name:var(--font-outfit)] antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />

          <FollowCursor color="#c9a84c60" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
