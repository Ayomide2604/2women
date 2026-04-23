import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "images/testimonial/1.jpg",
      name: "Michael S.",
      role: "Customer",
      rating: 5,
      quote:
        "Absolutely love this service. They're prompt, thorough, and friendly. I can trust them to clean my home exactly how I want it. Plus, they're affordable and use safe, green products.",
    },
    {
      image: "images/testimonial/2.jpg",
      name: "Robert L.",
      role: "Customer",
      rating: 5,
      quote:
        "Absolutely love this service. They're prompt, thorough, and friendly. I can trust them to clean my home exactly how I want it. Plus, they're affordable and use safe, green products.",
    },
    {
      image: "images/testimonial/3.jpg",
      name: "Jake M.",
      role: "Customer",
      rating: 5,
      quote:
        "Absolutely love this service. They're prompt, thorough, and friendly. I can trust them to clean my home exactly how I want it. Plus, they're affordable and use safe, green products.",
    },
    {
      image: "images/testimonial/4.jpg",
      name: "Alex P.",
      role: "Customer",
      rating: 5,
      quote:
        "Absolutely love this service. They're prompt, thorough, and friendly. I can trust them to clean my home exactly how I want it. Plus, they're affordable and use safe, green products.",
    },
    {
      image: "images/testimonial/5.jpg",
      name: "Carlos R.",
      role: "Customer",
      rating: 5,
      quote:
        "Absolutely love this service. They're prompt, thorough, and friendly. I can trust them to clean my home exactly how I want it. Plus, they're affordable and use safe, green products.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <i key={i} className="fa fa-star" />
    ));
  };

  return (
    <section>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="subtitle wow fadeInUp mb-3">Testimonials</div>
            <h2 className="mb-4 wow fadeInUp" data-wow-delay=".2s">
              Our Happy Customers
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="owl-carousel owl-theme wow fadeInUp"
            id="testimonial-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="item">
                <div className="relative p-2">
                  <div className="relative">
                    <img
                      className="relative z-2 w-80px mb-3 rounded-1"
                      alt=""
                      src={testimonial.image}
                    />
                  </div>
                  <div className="mt-4 text-dark fw-600">
                    {testimonial.name}
                    <span>{testimonial.role}</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      {renderStars(testimonial.rating)}
                    </span>
                  </div>
                  <p>{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
