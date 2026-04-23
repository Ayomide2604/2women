import React from "react";
import PageBanner from "../../components/PageBanner";
import PortfolioSection from "./PortfolioSection";

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
