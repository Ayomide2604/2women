const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <h3 className="footer-brand">
              2 Women and a Lady Cleaning Services
            </h3>
            <div className="spacer-20" />
            <p>
              2 Women and a Lady Cleaning Services is an Edmonton-based,
              female-owned cleaning company delivering reliable residential and
              commercial cleaning across Edmonton and surrounding areas.
            </p>
            <div className="social-icons mb-sm-30">
              <a
                href="https://www.facebook.com/2womenandalady"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/2womenandalady"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="https://wa.me/17807091707"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp" />
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
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/book-service">Book Service</a>
                    </li>
                    <li>
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-sm-6">
                <div className="widget">
                  <h5>Our Services</h5>
                  <ul>
                    <li>
                      <a href="/services">Residential Cleaning</a>
                    </li>
                    <li>
                      <a href="/services">Commercial Cleaning</a>
                    </li>
                    <li>
                      <a href="/services">Deep Cleaning</a>
                    </li>
                    <li>
                      <a href="/services">Move-In/Move-Out Cleaning</a>
                    </li>
                    <li>
                      <a href="/services">Post-Construction Cleaning</a>
                    </li>
                    <li>
                      <a href="/services">Carpet and Upholstery Cleaning</a>
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
                <i className="icofont-phone me-2 id-color-2" />
                Call / WhatsApp
              </div>
              <a href="tel:+17807091707">+1 780 709 1707</a>
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-envelope me-2 id-color-2" />
                Send a Message
              </div>
              <a href="mailto:info@2womenandalady.ca">info@2womenandalady.ca</a>
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
                  Copyright 2026 - 2 Women and a Lady Cleaning Services
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
