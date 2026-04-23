import type { Metadata } from "next";
import React from "react";
import PageBanner from "@/components/PageBanner";
import ServicesGrid from "./ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our Edmonton cleaning services including residential, construction, carpet, and biohazard cleaning tailored to your schedule and budget.",
  openGraph: {
    title: "Services | 2 Women and a Lady Cleaning Services",
    description:
      "Explore our Edmonton cleaning services including residential, construction, carpet, and biohazard cleaning tailored to your schedule and budget.",
    url: "https://2womenandalady.ca/services",
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
    title: "Services | 2 Women and a Lady Cleaning Services",
    description:
      "Explore our Edmonton cleaning services including residential, construction, carpet, and biohazard cleaning tailored to your schedule and budget.",
    images: ["/logo.jpeg"],
  },
};

const Page = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <PageBanner
        title="Our Services"
        description="Enjoy a spotless space with our expert cleaning team. Affordable, eco-friendly, and tailored to your needs!"
        image="/assets/images/misc/1.webp"
      />
      <ServicesGrid />
    </div>
  );
};

export default Page;
