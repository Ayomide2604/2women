import React from "react";

const Header = () => {
  return (
    <header className="header-light">
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
                  </li>

                  <li>
                    <a className="menu-item" href="about.html">
                      About
                    </a>
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
                    <a className="menu-item" href="projects.html">
                      Projects
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
