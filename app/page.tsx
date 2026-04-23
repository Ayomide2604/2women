import type { Metadata } from "next";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import InfoBar from "./sections/InfoBar";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Edmonton's trusted female-owned cleaning service offering residential, commercial, deep cleaning, and specialty sanitization.",
  openGraph: {
    title: "Home | 2 Women and a Lady Cleaning Services",
    description:
      "Edmonton's trusted female-owned cleaning service offering residential, commercial, deep cleaning, and specialty sanitization.",
    url: "https://2womenandalady.ca/",
    siteName: "2 Women and a Lady Cleaning Services",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "2 Women and a Lady Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | 2 Women and a Lady Cleaning Services",
    description:
      "Edmonton's trusted female-owned cleaning service offering residential, commercial, deep cleaning, and specialty sanitization.",
    images: ["/logo.jpeg"],
  },
};

export default function Home() {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <Hero />
      <InfoBar />
      <AboutUs />
      <Services />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
