import type { Metadata } from "next";
import React from "react";
import BookServiceHeader from "./BookServiceHeader";
import BookServiceForm from "./BookServiceForm";

export const metadata: Metadata = {
  title: "Book Service",
  description:
    "Book your next cleaning service with Edmonton's female-owned cleaning experts. Fast quote and reliable, eco-friendly cleaning options available.",
  openGraph: {
    title: "Book Service | 2 Women and a Lady Cleaning Services",
    description:
      "Book your next cleaning service with Edmonton's female-owned cleaning experts. Fast quote and reliable, eco-friendly cleaning options available.",
    url: "https://2womenandalady.ca/book-service",
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
    title: "Book Service | 2 Women and a Lady Cleaning Services",
    description:
      "Book your next cleaning service with Edmonton's female-owned cleaning experts. Fast quote and reliable, eco-friendly cleaning options available.",
    images: ["/logo.jpeg"],
  },
};

const page = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <section className="bg-color-3 section-dark relative overflow-hidden">
        <BookServiceHeader />
        <BookServiceForm />
      </section>
    </div>
  );
};

export default page;
