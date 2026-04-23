import React from "react";

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <img src="images/logo.webp" className="w-150px" alt="" />
            <div className="spacer-20" />
            <p>
              We are a team of passionate cleaning experts who take pride in
              delivering the highest standard of service. With years of
              experience in the industry, we’ve perfected our cleaning methods
              to ensure every job is done right.
            </p>
            <div className="social-icons mb-sm-30">
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-discord" />
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok" />
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget">
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="services.html">Our Services</a>
                    </li>
                    <li>
                      <a href="projects.html">Projects</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-sm-6">
                <div className="widget">
                  <h5>Our Services</h5>
                  <ul>
                    <li>
                      <a href="service-single.html">Residential Cleaning</a>
                    </li>
                    <li>
                      <a href="service-single.html">Commercial Cleaning</a>
                    </li>
                    <li>
                      <a href="service-single.html">Deep Cleaning</a>
                    </li>
                    <li>
                      <a href="service-single.html">
                        Move-In/Move-Out Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="service-single.html">
                        Post-Construction Cleaning
                      </a>
                    </li>
                    <li>
                      <a href="service-single.html">
                        Carpet and Upholstery Cleaning
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
            <div className="widget">
              <div className="fw-bold text-white">
                <i className="icofont-wall-clock me-2 id-color-2" />
                We're Open
              </div>
              Monday - Saturday 08.00 - 18.00
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-location-pin me-2 id-color-2" />
                Office Location
              </div>
              100 S Main St, New York, NY
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-envelope me-2 id-color-2" />
                Send a Message
              </div>
              contact@uclean.com
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  Copyright 2025 - Uclean by Designesia
                </div>
                <ul className="menu-simple">
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
