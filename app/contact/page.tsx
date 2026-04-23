import PageBanner from "../../components/PageBanner";
import ContactInfo from "./ContactInfo";
import ContactSection from "./ContactSection";

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
