import type { Metadata } from "next";
import PageBanner from "../../components/PageBanner";
import ContactInfo from "./ContactInfo";
import ContactSection from "./ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact 2 Women and a Lady Cleaning Services for an Edmonton cleaning quote. Call, email, or WhatsApp us to book professional home and business cleaning.",
  openGraph: {
    title: "Contact Us | 2 Women and a Lady Cleaning Services",
    description:
      "Contact 2 Women and a Lady Cleaning Services for an Edmonton cleaning quote. Call, email, or WhatsApp us to book professional home and business cleaning.",
    url: "https://2womenandalady.ca/contact",
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
    title: "Contact Us | 2 Women and a Lady Cleaning Services",
    description:
      "Contact 2 Women and a Lady Cleaning Services for an Edmonton cleaning quote. Call, email, or WhatsApp us to book professional home and business cleaning.",
    images: ["/logo.jpeg"],
  },
};

const page = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />

      <PageBanner
        title="Contact Us"
        description="Enjoy a spotless space with our expert cleaning team. Affordable, eco-friendly, and tailored to your needs!"
        image="/assets/images/misc/1.webp"
      />

      <ContactInfo />

      <ContactSection />
    </div>
  );
};

export default page;
