import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutUs from "../sections/AboutUs";
import JoinUs from "./JoinUs";
import ContactSection from "../contact/ContactSection";
import Team from "./Team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 2 Women and a Lady Cleaning Services, a female-owned Edmonton cleaning business delivering reliable home and commercial cleaning across Edmonton and nearby communities.",
  openGraph: {
    title: "About Us | 2 Women and a Lady Cleaning Services",
    description:
      "Learn about 2 Women and a Lady Cleaning Services, a female-owned Edmonton cleaning business delivering reliable home and commercial cleaning across Edmonton and nearby communities.",
    url: "https://2womenandalady.ca/about",
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
    title: "About Us | 2 Women and a Lady Cleaning Services",
    description:
      "Learn about 2 Women and a Lady Cleaning Services, a female-owned Edmonton cleaning business delivering reliable home and commercial cleaning across Edmonton and nearby communities.",
    images: ["/logo.jpeg"],
  },
};

const page = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <PageBanner
        title="About Us"
        description="2 Women and a Lady Cleaning Services is Edmonton’s trusted female-owned cleaning company, serving homes and businesses across Edmonton and nearby communities."
      />

      <div className="mt-5">
        <AboutUs />
      </div>
      {/* <Team /> */}
      <JoinUs />
      <ContactSection />
    </div>
  );
};

export default page;
