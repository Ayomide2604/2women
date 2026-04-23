import React from "react";

const BookServiceHeader = () => {
  return (
    <>
      <img
        src="/assets/images/deco/s1.webp"
        className="w-10 abs start-10 wow scaleOut"
        alt=""
      />
      <div id="shine-wrapper">
        <div className="template shine" />
      </div>
      <div className="container relative z-1">
        <div className="row g-1 justify-content-center text-light">
          <div className="col-lg-6 text-center">
            <div className="spacer-single" />
            <div className="relative z-1000">
              <h1 className="wow fadeInUp mb-0" data-wow-delay=".2s">
                Book Service
              </h1>
            </div>
          </div>
          <div className="clearfix" />
          <div className="col-lg-5 text-center">
            <p className="wow fadeInUp" data-wow-delay=".4s">
              Enjoy a spotless space with our expert cleaning team. Affordable,
              eco-friendly, and tailored to your needs!
            </p>
          </div>
          <div className="spacer-single" />
        </div>
      </div>
    </>
  );
};

export default BookServiceHeader;
