import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechCorp - Modern Tech Solutions",
  description: "Leading technology company providing innovative solutions for modern businesses. Discover our services, team, and cutting-edge approach to digital transformation.",
  keywords: "technology, software, innovation, digital transformation, tech solutions",
  authors: [{ name: "TechCorp" }],
  openGraph: {
    title: "TechCorp - Modern Tech Solutions",
    description: "Leading technology company providing innovative solutions for modern businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCorp - Modern Tech Solutions",
    description: "Leading technology company providing innovative solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
