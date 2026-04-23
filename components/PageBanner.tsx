import React from "react";

interface PageBannerProps {
  title: string;
  description: string;
  image?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  description,
  image = "/assets/images/misc/1.webp",
}) => {
  return (
    <section className="bg-color-3 section-dark text-light pb-0 relative overflow-hidden">
      <img
        src="/assets/images/deco/s1.webp"
        className="w-5 mt-min-60 abs start-10 bottom-10 wow scaleOut"
        alt=""
      />
      <div id="shine-wrapper">
        <div className="template shine" />
      </div>
      <div className="container relative z-1000">
        <div className="row g-3 align-items-center">
          <div className="col-lg-6">
            <div className="relative z-1000">
              <h1 className="wow fadeInUp mb-2" data-wow-delay=".2s">
                {title}
              </h1>
              <p
                className="lead col-lg-10 mb-0 wow fadeInUp"
                data-wow-delay=".4s"
              >
                {description}
              </p>
              <div className="spacer-single" />
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={image}
              className="w-100"
              data-0="transform: translateY(0px);"
              data-500="transform: translateY(300px);"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
