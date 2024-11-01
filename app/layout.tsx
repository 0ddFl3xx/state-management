import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import StoreProvider from "@/components/store/StoreProvider";
import Navbar from "@/components/NavFooter/NavBar";
import FooterBlock from "@/components/NavFooter/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redux Shopping Cart",
  description: "A simple shopping cart built with Redux Toolkit for state management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html lang="en">
          <body className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <Navbar />

            {children}

            <FooterBlock />
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
