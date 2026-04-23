import React from "react";

const Hero = () => {
  const slides = [
    {
      bgImage: "/assets/images/hero.jpg",
      subtitle: "Officialy Certified",
      title: "Refreshing Spaces With Sparkle And Care",
      teaser: "Fast, Reliable, and Affordable Cleaning Service",
      buttonText: "Book a Services",
      buttonHref: "contact.html",
    },
    {
      bgImage: "/assets/images/hero2.jpg",
      subtitle: "Officially Certified",
      title: "Expert Cleaning Services For Spotless Results",
      teaser: "Fast, Reliable, and Affordable Cleaning Service",
      buttonText: "Book a Services",
      buttonHref: "contact.html",
    },
  ];

  return (
    <section className="section-dark text-light no-top no-bottom position-relative overflow-hidden z-1000">
      <div className="v-center">
        <div className="swiper">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <div
                  className="swiper-inner"
                  data-bgimage={`url(${slide.bgImage})`}
                >
                  <div className="sw-caption">
                    <div className="container">
                      <div className="row g-4 justify-content-center">
                        <div className="spacer-double" />
                        <div className="col-lg-7 text-center">
                          <div className="spacer-single" />
                          <div className="sw-text-wrapper">
                            <div className="subtitle mb-2">
                              {slide.subtitle}
                            </div>
                            <h1 className="slider-title mb-3">{slide.title}</h1>
                            <p className="slider-teaser mb-3">{slide.teaser}</p>
                            <div className="spacer-10" />
                            <a
                              className="btn-main bg-color-2 text-dark mb10 mb-3"
                              href={slide.buttonHref}
                            >
                              {slide.buttonText}
                            </a>
                          </div>
                        </div>
                        <div className="spacer-single" />
                      </div>
                    </div>
                  </div>
                  <div className="sw-overlay op-4" />
                </div>
              </div>
            ))}
          </div>
          {/* If we need pagination */}
          {/* <div className="swiper-pagination" /> */}
          {/* If we need navigation buttons */}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
          {/* If we need scrollbar */}
          <div className="swiper-scrollbar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
