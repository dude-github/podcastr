import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexClerkProvider";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
