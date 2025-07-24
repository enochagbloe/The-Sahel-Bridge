import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Pure African Harvest - Premium Natural Products",
  description:
    "Discover sustainably sourced shea butter, shea nuts, cashews, and soybeans directly from African farmers. Experience the purity of nature with our organic agricultural products.",
  keywords:
    "shea butter, shea nuts, cashew, soybean, african products, organic, sustainable, natural",
  openGraph: {
    title: "Pure African Harvest - Premium Natural Products",
    description: "Sustainably sourced agricultural products from Africa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
