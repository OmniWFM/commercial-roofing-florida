import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://commercialroofingflorida.net"),
  title: {
    default: "Commercial Roofing Florida | JR&CO — Industrial Roofing Contractors",
    template: "%s | Commercial Roofing Florida",
  },
  description:
    "JR&CO's Florida commercial roofing branch. TPO, PVC, EPDM, metal and coating systems for industrial and commercial properties. Free roof inspections statewide.",
  keywords: [
    "commercial roofing florida",
    "industrial roofing",
    "TPO roofing",
    "PVC roofing",
    "metal roofing",
    "roof coatings",
    "JR&CO",
  ],
  openGraph: {
    title: "Commercial Roofing Florida | JR&CO",
    description:
      "Industrial and commercial roofing across Florida. Four decades of craftsmanship. Free roof inspections.",
    url: "https://commercialroofingflorida.net",
    siteName: "Commercial Roofing Florida",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
