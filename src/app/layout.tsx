import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Neon Production",
  description: "Create memory with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" type="image/svg+xml" href="/abroad-footer-logo.svg" />
      <ColorSchemeScript />
    </head>
    <body>
      <MantineProvider>{children}</MantineProvider>
    </body>
  </html>
  );
}
