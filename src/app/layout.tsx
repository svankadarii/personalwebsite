import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SocialSidebar from "@/components/SocialSidebar";
import FollowCursor from "@/components/FollowCursor";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Srini Vankadari",
  description: "Welcome to Srini Vankadari's personal portfolio website",
  icons: {
    icon: "/sv.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SocialSidebar />
          <FollowCursor color="#c7a42180" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
