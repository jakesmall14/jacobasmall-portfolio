import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob A. Small",
  description: "Researcher, builder. New York City.",
  metadataBase: new URL("https://jacobasmall.world"),
  openGraph: {
    title: "Jacob A. Small",
    description: "Researcher, builder. New York City.",
    url: "https://jacobasmall.world",
    siteName: "Jacob A. Small",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jacob A. Small",
    description: "Researcher, builder. New York City.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Playfair Display: weights 400 + 500, normal + italic */}
        {/* Inter: weights 300 + 400 + 500 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
