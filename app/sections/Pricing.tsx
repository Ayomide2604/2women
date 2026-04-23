import React from "react";

const Pricing = () => {
  return (
    <>
      <section className="bg-color text-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="subtitle wow fadeInUp mb-3">
                Complate Solutions
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Pricing Plans
              </h2>
              <p className="lead mb-0 wow fadeInUp">
                Choose from flexible, affordable cleaning plans designed to fit
                your needs, from one-time deep cleans to regular maintenance
                services.
              </p>
              <div className="spacer-single" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-0">
        <div className="container">
          <div className="row g-4 mt-min-100">
            <div className="col-lg-4 col-sm-6">
              <div className="relative bg-light p-4 rounded-10">
                <div className="text-center">
                  <h5 className="mb-0">One Time or Monthly</h5>
                  <div className="spacer-30" />
                  <div className="ms-5 fw-500">
                    <span>$</span>
                    <span className="fs-64 fw-bold text-dark">49</span>
                    <span>/Hour/Cleaner</span>
                  </div>
                  <div className="spacer-20" />
                </div>
                <div className="text-center">
                  <a
                    className="btn-main bg-color-2 text-dark"
                    href="book-service.html"
                  >
                    Book Now
                  </a>
                </div>
                <div className="spacer-20" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="relative bg-light p-4 rounded-10">
                <div className="text-center">
                  <h5 className="mb-0">Recurring (Weekly, Biweekly)</h5>
                  <div className="spacer-30" />
                  <div className="ms-5 fw-500">
                    <span>$</span>
                    <span className="fs-64 fw-bold text-dark">43</span>
                    <span>/Hour/Cleaner</span>
                  </div>
                  <div className="spacer-20" />
                </div>
                <div className="text-center">
                  <a
                    className="btn-main bg-color-2 text-dark"
                    href="book-service.html"
                  >
                    Book Now
                  </a>
                </div>
                <div className="spacer-20" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="relative bg-light p-4 rounded-10">
                <div className="text-center">
                  <h5 className="mb-0">Office &amp; Commercial</h5>
                  <div className="spacer-30" />
                  <div className="ms-5 fw-500">
                    <span>$</span>
                    <span className="fs-64 fw-bold text-dark">40</span>
                    <span>/Hour/Cleaner</span>
                  </div>
                  <div className="spacer-20" />
                </div>
                <div className="text-center">
                  <a
                    className="btn-main bg-color-2 text-dark"
                    href="book-service.html"
                  >
                    Book Now
                  </a>
                </div>
                <div className="spacer-20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
