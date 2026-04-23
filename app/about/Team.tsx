import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Barbara Charline",
      role: "Senior Cleaning Specialist",
      image: "/assets/images/team/1.webp",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Thomas Bennett",
      role: "Deep Cleaning Specialist",
      image: "/assets/images/team/2.webp",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Madison Jane",
      role: "Appliance and Specialty Cleaner",
      image: "/assets/images/team/3.webp",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      name: "Joshua Henry",
      role: "Move-In/Move-Out Cleaner",
      image: "/assets/images/team/4.webp",
      social: {
        facebook: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section className="border-top">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="subtitle wow fadeInUp mb-3">Behind the Scene</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">
              Our Team
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-3">
              <img
                src={member.image}
                className="img-fluid rounded-10px"
                alt={member.name}
              />
              <div className="p-3 text-center">
                <h4 className="mb-0">{member.name}</h4>
                <p className="mb-2">{member.role}</p>
                <div className="social-icons">
                  <a href={member.social.facebook}>
                    <i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-facebook-f" />
                  </a>
                  <a href={member.social.twitter}>
                    <i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-x-twitter" />
                  </a>
                  <a href={member.social.instagram}>
                    <i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
