import React from "react";

const InfoBar = () => {
  return (
    <section className="pt-0 relative z-1000">
      <div className="container mt-min-50">
        <div className="row">
          <div className="col-lg-12">
            <div className="bg-white p-30 rounded-1 shadow-soft">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="relative">
                    <i className="icofont-map-pins absolute fs-64 id-color" />
                    <div className="ps-80">
                      <h4 className="mb-0">Areas of Coverage</h4>
                      <p className="mb-0">
                        Serving Edmonton, St. Albert, Sherwood Park, Beaumont,
                        Leduc, Fort Saskatchewan and nearby communities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="relative">
                    <i className="icofont-calendar absolute fs-64 id-color" />
                    <div className="ps-80">
                      <h4 className="mb-0">Easy Booking</h4>
                      <p className="mb-0">
                        Book your home or business cleaning by phone, email, or
                        WhatsApp for quick appointment scheduling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="relative">
                    <i className="icofont-clock-time absolute fs-64 id-color" />
                    <div className="ps-80">
                      <h4 className="mb-0">Emergency Cleanup</h4>
                      <p className="mb-0">
                        Rapid-response cleanup support for urgent spills,
                        move-out messes, or construction site needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
