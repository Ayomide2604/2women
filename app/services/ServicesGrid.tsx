import React from "react";
import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
