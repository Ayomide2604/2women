import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteName = "2 Women and a Lady Cleaning Services";
const description =
  "Female-owned residential and commercial cleaning services in Edmonton and nearby communities. Trusted for housekeeping, deep cleaning, move-in/out, construction cleanup, carpet care and specialty sanitization.";

export const metadata: Metadata = {
  metadataBase: new URL("https://2womenandalady.ca"),
  title: {
    default: siteName,
    template: "%s | 2 Women and a Lady Cleaning Services",
  },
  description,
  keywords: [
    "Edmonton cleaning services",
    "female-owned cleaning company",
    "residential cleaning",
    "commercial cleaning",
    "deep cleaning",
    "move in cleaning",
    "construction cleanup",
    "carpet cleaning",
    "biohazard cleaning",
  ],
  openGraph: {
    title: siteName,
    description,
    type: "website",
    url: "https://2womenandalady.ca",
    siteName,
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-32x32.png",
    apple: "/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0171c5" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/swiper.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/coloring.css" />
        <link rel="stylesheet" href="/assets/css/colors/scheme-01.css" />
      </head>
      <body>
        <div id="wrapper">
          <div className="float-text show-on-scroll">
            <span>
              <a href="#">Scroll to top</a>
            </span>
          </div>
          <div className="scrollbar-v show-on-scroll" />
          {/* page preloader begin */}
          <div id="de-loader" />
          {/* page preloader close */}
          <Header />
          {children}
          <Footer />
        </div>

        <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/designesia.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/custom-marquee.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/custom-swiper-1.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.event.move.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.twentytwenty.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
