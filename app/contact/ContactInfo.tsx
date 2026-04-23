import React from "react";

const ContactInfo = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="row g-4 grid-divider">
          <div className="col-md-3 wow fadeInRight" data-wow-delay=".2s">
            <div className="text-center">
              <i className="bg-color text-light fs-32 p-30 circle mb-3 fa fa-phone" />
              <h5 className="mb-0">Call</h5>
              +1 780 709 1707
            </div>
          </div>
          <div className="col-md-3 wow fadeInRight" data-wow-delay=".4s">
            <div className="text-center">
              <i className="bg-color text-light fs-32 p-30 circle mb-3 fa fa-user" />
              <h5 className="mb-0">Support</h5>
              +1 780 709 1707
            </div>
          </div>
          <div className="col-md-3 wow fadeInRight" data-wow-delay=".6s">
            <div className="text-center">
              <i className="bg-color text-light fs-32 p-30 circle mb-3 fa-brands fa-whatsapp" />
              <h5 className="mb-0">WhatsApp</h5>
              <a href="https://wa.me/17807091707" className="text-light">
                +1 780 709 1707
              </a>
            </div>
          </div>
          <div className="col-md-3 wow fadeInRight" data-wow-delay=".8s">
            <div className="text-center">
              <i className="bg-color text-light fs-32 p-30 circle mb-3 fa fa-envelope" />
              <h5 className="mb-0">Email</h5>
              <a href="mailto:info@2womenandalady.ca" className="text-light">
                info@2womenandalady.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
