import React from "react";

type Service = {
  title: string;
  image: string;
  description: string;
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="relative mb-3 p-3 h-100 rounded-1 shadow-soft">
        <a href="/contact" className="d-block hover mb-3">
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
              alt={service.title}
            />
          </div>
        </a>
        <h4>{service.title}</h4>
        <p className="no-bottom">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
