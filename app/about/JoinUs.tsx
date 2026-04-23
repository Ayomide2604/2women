import React from "react";

const JoinUs = () => {
  return (
    <section className="pt-30 pb-0 border-top">
      <div className="container relative">
        <div className="row g-4 gx-5 align-items-center">
          <div className="col-lg-6">
            <img src="/assets/images/misc/2.webp" className="w-100" alt="" />
          </div>
          <div className="col-lg-6 relative">
            <div className="relative z-1000">
              <div className="subtitle wow fadeInUp" data-wow-delay=".0s">
                Join Our Team
              </div>
              <h2>Join Our Team of Professionals Cleaners</h2>
              <p>
                Join our team and be part of a dynamic, professional, and
                supportive environment! Enjoy flexible schedules, competitive
                pay, and growth opportunities while helping create spotless,
                welcoming spaces for our valued clients.
              </p>
              <a href="contact.html" className="btn-main">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
