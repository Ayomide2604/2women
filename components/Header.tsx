import React from "react";
import Link from "next/link";

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
                  <Link href="/">
                    <div>
                      <img
                        className="logo-main"
                        src="/assets/images/logo-black.webp"
                        alt=""
                      />
                      <img
                        className="logo-scroll"
                        src="/assets/images/logo-black.webp"
                        alt=""
                      />
                      <img
                        className="logo-mobile"
                        src="/assets/images/logo-black.webp"
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
                {/* logo close */}
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <Link className="menu-item" href="/">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link className="menu-item" href="/about">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link className="menu-item" href="/book-service">
                      Service
                    </Link>
                  </li>

                  <li>
                    <Link className="menu-item" href="/portfolio">
                      Portfolio
                    </Link>
                  </li>

                  <li>
                    <Link className="menu-item" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <div className="h-phone xs-hide">
                    <span>Need Help?</span>
                    <h5>+1 5000 6000</h5>
                  </div>
                  <Link className="btn-main" href="/book-service">
                    Book Service Now
                  </Link>
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
