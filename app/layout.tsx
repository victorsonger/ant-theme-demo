import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Ant Theme Demo",
  description: "Dynamic Ant Design theme demo powered by CSS variables",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
