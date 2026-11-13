import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Dvor",
  description: "Аренда квартир для семей с детьми",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
