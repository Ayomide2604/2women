import ContactForm from "@/components/ContactForm";
import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-light relative no-top no-bottom overflow-hidden">
      <div className="container-fluid position-relative half-fluid">
        <div className="container">
          <div className="row g-4">
            {/* Image */}
            <div className="col-lg-6 position-lg-absolute left-half h-100">
              <a
                className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2 popup-youtube"
                href="https://www.youtube.com/watch?v=AkSwAc7ApNc"
              >
                <div className="player invert bg-color-2 no-border rounded-1 wow scaleIn">
                  <span />
                </div>
              </a>
              <div
                className="image"
                data-bgimage="url(assets/images/misc/12.webp) center"
              />
            </div>
            {/* Text */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
