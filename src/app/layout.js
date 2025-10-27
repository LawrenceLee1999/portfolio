import "./globals.css";
import { Manrope, Bebas_Neue } from "next/font/google";

// Fonts
const headingFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const bodyFont = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Lawrence Lee | Portfolio",
  description:
    "Portfolio of Lawrence Lee, a full-stack developer based in Paisley building real-world web apps using React, Node.js, and more.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} font-sans scroll-smooth`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] antialiased">
        {/* GLOBAL WRAPPER */}
        <div className="w-full max-w-[1440px] mx-auto px-6">{children}</div>
      </body>
    </html>
  );
}
