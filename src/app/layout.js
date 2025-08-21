import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add custom font for titles
const latienneMedium = {
  variable: "--font-latienne-medium",
  style: {
    fontFamily: "Latienne Medium, serif",
  },
};

export const metadata = {
  title: "LALOS Carpentry - Premium Woodworking & Custom Furniture",
  description: "Professional carpentry services specializing in custom furniture, kitchen renovations, bathroom remodels, and commercial projects. Quality craftsmanship since 2009.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={latienneMedium.style}
      >
        {children}
      </body>
    </html>
  );
}
