import PageBanner from "@/components/PageBanner";
import AboutUs from "../sections/AboutUs";
import JoinUs from "./JoinUs";
import ContactSection from "../contact/ContactSection";
import Team from "./Team";

const page = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <PageBanner
        title="About Us"
        description="Enjoy a spotless space with our expert cleaning team. Affordable, eco-friendly, and tailored to your needs!"
      />

      <AboutUs />
      {/* <Team /> */}
      <JoinUs />
      <ContactSection />
    </div>
  );
};

export default page;
