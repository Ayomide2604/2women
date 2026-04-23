import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import InfoBar from "./sections/InfoBar";
import Pricing from "./sections/Pricing";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <Hero />
      <InfoBar />
      <AboutUs />
      <Services />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
