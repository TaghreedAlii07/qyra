import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://qyratech.io"),

  title: {
    default: "QYRA Technologies",
    template: "%s | QYRA Technologies",
  },

  description:
    "QYRA Technologies delivers AI solutions, software development, cloud services, cybersecurity, web development, and digital transformation for businesses worldwide.",

  applicationName: "QYRA Technologies",

  keywords: [
    "AI",
    "Artificial Intelligence",
    "Software Development",
    "Web Development",
    "Cloud",
    "Cybersecurity",
    "QYRA Technologies",
  ],

  authors: [{ name: "QYRA Technologies" }],

  creator: "QYRA Technologies",

  openGraph: {
    title: "QYRA Technologies",
    description:
      "Smart Technology. Real Results.",
    url: "https://qyratech.io",
    siteName: "QYRA Technologies",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "QYRA Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "QYRA Technologies",
    description: "Smart Technology. Real Results.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}