import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";

export const metadata: Metadata = { title: { default: "AuthX — Browser authenticator", template: "%s — AuthX" }, description: "Help and setup for the AuthX browser authenticator extension.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
