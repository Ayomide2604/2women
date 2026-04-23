import React from "react";

const Services = () => {
  const services = [
    {
      image: "/assets/images/services/1.webp",
      title: "Residential Cleaning",
      href: "service-single.html",
    },
    {
      image: "/assets/images/services/2.webp",
      title: "Commercial Cleaning",
      href: "service-single.html",
    },
    {
      image: "/assets/images/services/3.webp",
      title: "Deep Cleaning",
      href: "service-single.html",
    },
    {
      image: "/assets/images/services/4.webp",
      title: "Move-In/Move-Out Cleaning",
      href: "service-single.html",
    },
    {
      image: "/assets/images/services/5.webp",
      title: "Post-Construction Cleaning",
      href: "service-single.html",
    },
    {
      image: "/assets/images/services/6.webp",
      title: "Carpet and Upholstery Cleaning",
      href: "service-single.html",
    },
  ];

  return (
    <section className="relative overflow-hidden border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="subtitle wow fadeInUp mb-3">Our Services</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Our Cleaning Services
            </h2>
            <p className="lead mb-0 wow fadeInUp">
              Whether it's a quick refresh or a deep clean transformation, our
              expert touch leaves your home or office shining.
            </p>
            <div className="spacer-single" />
            <div className="spacer-half" />
          </div>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <div className="relative">
                <a href={service.href} className="d-block hover">
                  <div className="relative overflow-hidden rounded-1 shadow-soft">
                    <img
                      src="/assets/images/misc/flowers-crop-3-white.html"
                      className="w-50 end-0 absolute hover-op-0"
                      alt=""
                    />
                    <div className="absolute z-2 start-0 w-100 abs-middle fs-36 text-white text-center">
                      <span className="btn-main hover-op-1">Read More</span>
                    </div>
                    <img
                      src={service.image}
                      className="img-fluid hover-scale-1-2"
                      alt=""
                    />
                    <div className="hover-op-0 abs p-3 px-4 bottom-0 text-center text-light w-100 overlay-black-1 bg-blur">
                      <h4>{service.title}</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
