import type { Metadata } from "next";
import React from "react";
import PageBanner from "../../components/PageBanner";
import PortfolioSection from "./PortfolioSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See examples of our professional cleaning projects and results from residential, commercial, and post-construction cleaning work in Edmonton.",
  openGraph: {
    title: "Portfolio | 2 Women and a Lady Cleaning Services",
    description:
      "See examples of our professional cleaning projects and results from residential, commercial, and post-construction cleaning work in Edmonton.",
    url: "https://2womenandalady.ca/portfolio",
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
    title: "Portfolio | 2 Women and a Lady Cleaning Services",
    description:
      "See examples of our professional cleaning projects and results from residential, commercial, and post-construction cleaning work in Edmonton.",
    images: ["/logo.jpeg"],
  },
};

const page = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <PageBanner
        title="Projects"
        description="Enjoy a spotless space with our expert cleaning team. Affordable, eco-friendly, and tailored to your needs!"
        image="/assets/images/misc/6.webp"
      />
      <PortfolioSection />
    </div>
  );
};

export default page;
