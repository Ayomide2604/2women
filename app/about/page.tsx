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
        description="2 Women and a Lady Cleaning Services is Edmonton’s trusted female-owned cleaning company, serving homes and businesses across Edmonton and nearby communities."
      />

      <AboutUs />
      {/* <Team /> */}
      <JoinUs />
      <ContactSection />
    </div>
  );
};

export default page;
