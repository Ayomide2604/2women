import React from "react";
import PortfolioCard from "./PortfolioCard";
import { portfolioProjects } from "./projectsData";

const PortfolioSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row g-4">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
