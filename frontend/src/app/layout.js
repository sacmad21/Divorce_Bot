// src/app/layout.js or src/app/chat/layout.js — use one, not both

import {
  Inter,
  Poppins,
  DM_Sans,
  Outfit,
  Plus_Jakarta_Sans,
  Montserrat,
} from "next/font/google";
import "../styles/globals.css";
import { DarkModeProvider } from "@/context/DarkModeContext";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "Chat",
  description: "Modern chat interface for legal assistance",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black-translucent",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
  themeColor: "#4267B2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🛡 Dark mode applied BEFORE hydration to prevent flicker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const stored = localStorage.getItem("theme");
                  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const isDark = stored === "dark" || (stored === null && systemPrefersDark);
                  if (isDark) {
                    document.documentElement.classList.add("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`bg-gray-100 antialiased text-sm min-h-[100dvh]
  ${inter.variable} ${poppins.variable} ${dmSans.variable} 
  ${outfit.variable} ${plusJakarta.variable} ${montserrat.variable}`}>

      
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
