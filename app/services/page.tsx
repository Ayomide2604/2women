import React from "react";
import PageBanner from "@/components/PageBanner";
import ServicesGrid from "./ServicesGrid";

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
