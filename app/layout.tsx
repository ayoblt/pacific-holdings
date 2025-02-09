import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollProvider } from "@/providers/scroll-provider";
import { ToggleProvider } from "@/providers/toggle-provider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pacific Holdings",
  description: "Pacific holdings limited",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollProvider>
      <ToggleProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </body>
        </html>
      </ToggleProvider>
    </ScrollProvider>
  );
}
