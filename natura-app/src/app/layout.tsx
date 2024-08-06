import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import ReactQueryProvider from "@/providers/react-query";
import Navbar from "@/components/navbar";
import StyledComponentsRegistry from "@/lib/registry";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Natura App",
  description: "Natura App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ReactQueryProvider>
            <Navbar />
            {children}
          </ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
