import React from "react";

const ContactForm = () => {
  return (
    <div className="col-lg-6 offset-lg-6">
      <div className="spacer-single" />
      <div className="spacer-double" />
      <div className="ps-lg-5">
        <div className="mb-4">
          <h3 className="mb-3 fw-bold">Get In Touch</h3>
          <p className="text-muted mb-4">
            Have questions about our cleaning services? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <form
          name="contactForm"
          id="contact_form"
          className="modern-form"
          method="post"
          action="https://www.madebydesignesia.com/themes/uclean/contact.php"
        >
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control modern-input"
                  placeholder="Your Name"
                  required
                />
                <label htmlFor="name" className="form-label">
                  <i className="fa fa-user me-2"></i>Full Name
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control modern-input"
                  placeholder="your@email.com"
                  required
                />
                <label htmlFor="email" className="form-label">
                  <i className="fa fa-envelope me-2"></i>Email Address
                </label>
              </div>
            </div>
          </div>

          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control modern-input"
                  placeholder="+1 (555) 123-4567"
                  required
                />
                <label htmlFor="phone" className="form-label">
                  <i className="fa fa-phone me-2"></i>Phone Number
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <select
                  name="service"
                  id="service"
                  className="form-control modern-input"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep-cleaning">Deep Cleaning</option>
                  <option value="move-in-out">Move In/Out Cleaning</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="service" className="form-label">
                  <i className="fa fa-broom me-2"></i>Service Type
                </label>
              </div>
            </div>
          </div>

          <div className="form-floating mt-3">
            <textarea
              name="message"
              id="message"
              className="form-control modern-input"
              style={{ height: "120px", resize: "none" }}
              placeholder="Tell us about your cleaning needs..."
              required
            />
            <label htmlFor="message" className="form-label">
              <i className="fa fa-comment me-2"></i>Your Message
            </label>
          </div>

          <div className="d-flex align-items-center mt-4">
            <button
              type="submit"
              id="send_message"
              className="btn btn-primary btn-lg px-5 py-3 rounded-pill modern-btn"
            >
              <i className="fa fa-paper-plane me-2"></i>
              Send Message
            </button>
            <div className="ms-3">
              <small className="text-muted">
                <i className="fa fa-shield-alt me-1"></i>
                Your information is secure
              </small>
            </div>
          </div>

          <div id="success_message" className="alert alert-success mt-3 d-none">
            <i className="fa fa-check-circle me-2"></i>
            Your message has been sent successfully! We'll get back to you soon.
          </div>
          <div id="error_message" className="alert alert-danger mt-3 d-none">
            <i className="fa fa-exclamation-triangle me-2"></i>
            Sorry, there was an error sending your message. Please try again.
          </div>
        </form>
      </div>
      <div className="spacer-double" />
      <div className="spacer-single" />
    </div>
  );
};

export default ContactForm;
