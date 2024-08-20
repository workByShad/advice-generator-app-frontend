import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advice Generator App",
  description: "Frontend for an advice generator app.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-between w-screen h-screen box-border bg-[hsl(218,23%,16%)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
