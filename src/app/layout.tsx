import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.avocadolab.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Avocado.ai", template: "%s | Avocado.ai" },
  description: "AI-native Security Operations & Validation Platform",
  applicationName: "Avocado.ai",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101714",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
