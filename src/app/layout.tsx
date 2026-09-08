import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Mariam Kaldas' Industrial Design Portfolio",
  description: "Interactive blueprint workspace",
  icons: {
    icon: [
      { url: "/favicon-package/favicon.ico" },
      { url: "/favicon-package/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-package/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon-package/favicon.ico",
    apple: "/favicon-package/apple-touch-icon.png",
  },
  manifest: "/favicon-package/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased text-[#111111]`}>
        {children}
      </body>
    </html>
  );
}