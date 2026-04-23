
type PortfolioProject = {
  id: number;
  title: string;
  location: string;
  image: string;
  href: string;
};

interface PortfolioCardProps {
  project: PortfolioProject;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className="col-lg-4 text-center">
      <div className="relative">
        <a href={project.href} className="d-block hover">
          <div className="relative overflow-hidden rounded-1 shadow-soft">
            <div className="absolute z-2 start-0 w-100 abs-middle fs-36 text-white text-center">
              <span className="btn-main hover-op-1">Read More</span>
            </div>
            <img
              src={project.image}
              className="img-fluid hover-scale-1-2"
              alt={project.title}
            />
            <div className="hover-op-0 abs p-3 bottom-0 text-center text-dark w-100">
              <div className="bg-white rounded-1 p-4">
                <h4 className="mb-0">{project.title}</h4>
                <small>{project.location}</small>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
