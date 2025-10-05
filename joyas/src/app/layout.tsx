import type { Metadata } from "next";
import "./globals.css";

// Google fonts, близкие к UI: Nunito (UI), Dancing Script (скриптовые заголовки), Cormorant Garamond (сериичные подписи)
import { Nunito, Dancing_Script, Cormorant_Garamond } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
});
const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-script",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Joyas Rodriguez",
  description: "Joyería – Hecho con amor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} ${script.variable} ${cormorant.variable}`}
    >
      <body className="font-sans text-ink-900 bg-white antialiased">
        {children}
      </body>
    </html>
  );
}
