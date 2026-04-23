import React from "react";

const BookServiceForm = () => {
  return (
    <div className="row g-4 align-items-center justify-content-center">
      <div className="col-lg-10">
        <div className="p-30 pb-0 shadow-soft bg-white rounded-10px">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 sm-hide">
              <img src="/assets/images/misc/9.webp" className="w-100" alt="" />
            </div>
            <div className="col-lg-6">
              <div
                id="success_message_col"
                className="success rounded-1 p-40 h-100"
              >
                <h3>Thank You For Your Order</h3>
                <p>
                  We have received your request and will be processing it
                  shortly. Click button below if you want to make another order.
                </p>
                <a className="btn-main" href="/book-service">
                  Re-order
                </a>
              </div>
              <form
                name="bookingForm"
                id="booking_form"
                className="position-relative z1000"
                method="post"
                action="https://www.madebydesignesia.com/themes/uclean/booking.php"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <h5>Select Service</h5>
                    <div className="relative">
                      <select
                        name="service"
                        id="service"
                        className="form-control"
                      >
                        <option value="Residential Cleaning">
                          Residential Cleaning
                        </option>
                        <option value="Commercial Cleaning">
                          Commercial Cleaning
                        </option>
                        <option value="Deep Cleaning">Deep Cleaning</option>
                        <option value="Move-In/Move-Out Cleaning">
                          Move-In/Move-Out Cleaning
                        </option>
                        <option value="Post-Construction Cleaning">
                          Post-Construction Cleaning
                        </option>
                        <option value="Carpet and Upholstery Cleaning">
                          Carpet and Upholstery Cleaning
                        </option>
                      </select>
                      <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h5>Select Date</h5>
                    <div
                      id="date"
                      className="relative input-group date"
                      data-date-format="mm-dd-yyyy"
                    >
                      <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-calendar" />
                      <input className="form-control" name="date" type="text" />
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-calendar" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h5>Time</h5>
                    <div className="relative">
                      <select name="time" id="time" className="form-control">
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                      </select>
                      <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h5>Duration</h5>
                    <div className="relative">
                      <select
                        name="duration"
                        id="duration"
                        className="form-control"
                      >
                        <option value="1 Hour">1 Hour</option>
                        <option value="2 Hours">2 Hours</option>
                        <option value="3 Hours">3 Hours</option>
                        <option value="4 Hours">4 Hours</option>
                        <option value="5 Hours">5 Hours</option>
                      </select>
                      <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <h5>Name</h5>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-lg-4">
                    <h5>Email</h5>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                  <div className="col-lg-4">
                    <h5>Phone</h5>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="field-set mb-4">
                  <h5>Have Any Message?</h5>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div id="submit" className="mt20">
                  <input
                    type="submit"
                    id="send_message"
                    defaultValue="Send Appointment"
                    className="btn-main"
                  />
                </div>
                <div id="error_message" className="error">
                  Sorry there was an error sending your form.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookServiceForm;
