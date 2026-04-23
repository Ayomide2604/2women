import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="pt-0">
        <div className="container relative">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6 relative">
              <div className="relative z-1000">
                <div className="subtitle wow fadeInUp" data-wow-delay=".0s">
                  About Uclean
                </div>
                <h2>Bringing Clean, Comfort, and Care Together</h2>
                <p>
                  We are a team of passionate cleaning experts who take pride in
                  delivering the highest standard of service. With years of
                  experience in the industry, we’ve perfected our cleaning
                  methods to ensure every job is done right.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <img
                    src="assets/images/misc/11.webp"
                    className="img-fluid rounded-10 mb-4 w-70 ms-30 wow scaleIn"
                    alt=""
                  />
                  <img
                    src="/assets/images/misc/3.webp"
                    className="img-fluid rounded-10 wow scaleIn"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <div className="spacer-single sm-hide" />
                  <img
                    src="/assets/images/misc/10.webp"
                    className="img-fluid rounded-10 mb-4 wow scaleIn"
                    alt=""
                  />
                  <img
                    src="/assets/images/misc/8.webp"
                    className="img-fluid rounded-10 w-70 wow scaleIn"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="relative">
                <img
                  src="/assets/images/icons/black/labor.webp"
                  className="abs bg-color-2 w-100px p-15 rounded-10 mb-3 wow scaleIn"
                  alt=""
                />
                <div className="relative ps-100 ms-4 wow fadeInUp">
                  <h4>Professional Team</h4>
                  <p className="mb-0">
                    Our trained, insured cleaners ensure professional, trusted
                    service and impeccable results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="relative">
                <img
                  src="/assets/images/icons/black/calendar.webp"
                  className="abs bg-color-2 w-100px p-15 rounded-10 mb-3 wow scaleIn"
                  alt=""
                />
                <div className="relative ps-100 ms-4 wow fadeInUp">
                  <h4>On Time Service</h4>
                  <p className="mb-0">
                    Reliable, punctual service that respects your schedule and
                    exceeds expectations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="relative">
                <img
                  src="/assets/images/icons/black/best-price.webp"
                  className="abs bg-color-2 w-100px p-15 rounded-10 mb-3 wow scaleIn"
                  alt=""
                />
                <div className="relative ps-100 ms-4 wow fadeInUp">
                  <h4>Transparent Pricing</h4>
                  <p className="mb-0">
                    Affordable, upfront rates with no hidden costs — quality
                    cleaning at the right price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
