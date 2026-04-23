import React from "react";

const Header = () => {
  return (
    <header className="header-light transparent">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <a href="index.html">
                    <img
                      className="logo-main"
                      src="images/logo-black.webp"
                      alt=""
                    />
                    <img
                      className="logo-scroll"
                      src="images/logo-black.webp"
                      alt=""
                    />
                    <img
                      className="logo-mobile"
                      src="images/logo-black.webp"
                      alt=""
                    />
                  </a>
                </div>
                {/* logo close */}
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <a className="menu-item" href="index.html">
                      Home
                    </a>
                    <ul className="mega">
                      <li>
                        <div className="container">
                          <div className="sb-menu p-4">
                            <div className="row g-3">
                              <div className="col-lg-3 col-md-4 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                  <a href="index.html" className="p-0">
                                    <img
                                      src="images/demo/homepage-1.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h5 className="mt-3 mb-1">Homepage 1</h5>
                              </div>
                              <div className="col-lg-3 col-md-4 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                  <a href="homepage-2.html" className="p-0">
                                    <img
                                      src="images/demo/homepage-2.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h5 className="mt-3 mb-1">Homepage 2</h5>
                              </div>
                              <div className="col-lg-3 col-md-4 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                  <a href="homepage-3.html" className="p-0">
                                    <img
                                      src="images/demo/homepage-3.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h5 className="mt-3 mb-1">Homepage 3</h5>
                              </div>
                              <div className="col-lg-3 col-md-4 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                  <a href="homepage-4.html" className="p-0">
                                    <img
                                      src="images/demo/homepage-4.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h5 className="mt-3 mb-1">Homepage 4</h5>
                              </div>
                              <div className="col-lg-3 col-md-4 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                  <a href="homepage-5.html" className="p-0">
                                    <img
                                      src="images/demo/homepage-5.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h5 className="mt-3 mb-1">Homepage 5</h5>
                              </div>
                              <div className="col-lg-3 col-md-4 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                  <a href="homepage-6.html" className="p-0">
                                    <img
                                      src="images/demo/homepage-6.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h5 className="mt-3 mb-1">Homepage 6</h5>
                              </div>
                              <div className="col-lg-3 col-md-4 text-center">
                                <div className="relative hover text-center overflow-hidden soft-shadow rounded-1">
                                  <a href="homepage-7.html" className="p-0">
                                    <img
                                      src="images/demo/homepage-7.webp"
                                      className="w-100 relative hover-scale-1-1"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <h5 className="mt-3 mb-1">Homepage 7</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="services.html">
                      Services
                    </a>
                    <ul>
                      <li>
                        <a className="menu-item" href="service-single.html">
                          Residential Cleaning
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="service-single.html">
                          Commercial Cleaning
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="service-single.html">
                          Deep Cleaning
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="service-single.html">
                          Move-In/Move-Out Cleaning
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="service-single.html">
                          Post-Construction Cleaning
                        </a>
                      </li>
                      <li>
                        <a className="menu-item" href="service-single.html">
                          Carpet and Upholstery Cleaning
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="menu-item" href="how-it-works.html">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="about.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="projects.html">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="menu-item" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <div className="h-phone xs-hide">
                    <span>Need Help?</span>
                    <h5>+1 5000 6000</h5>
                  </div>
                  <a href="book-service.html" className="btn-main">
                    Book Service Now
                  </a>
                  <span id="menu-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
