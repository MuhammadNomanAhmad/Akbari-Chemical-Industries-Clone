import React from "react";
import "./getintouch.css";
import getInTounchSideImg from "../Asset/contact_index.jpg";

const Getintouch = () => {
  return (
    <div className="container getintouch-padding">
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <h2 className="getintouch-heading ">Get in touch</h2>
          <hr className="getintouch-hrline  " />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="form-border">
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your Name:"
                  className="username w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email:"
                  className="yourEmail w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="phone"
                  id="quantity"
                  name="quantity"
                  min="11"
                  max="25"
                  placeholder="Your Phone Number:"
                  className="yourPhoneNumber w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  id="Subject"
                  name="Subject"
                  placeholder="Subject:"
                  className="yourSubject w-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12  ">
                <textarea
                  name="textArea"
                  id="textArea"
                  cols="10"
                  rows="10"
                  placeholder="Your Message:"
                  className="textArea w-100  "
                ></textarea>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 d-flex justify-content-sm-center d-flex justify-content-lg-start">
                {/* <button className='getInTouch-Btn '>SUBMIT NOW</button> */}
                <div className="getInTouch-Btn">SUBMIT NOW</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
            <img src={getInTounchSideImg} alt="getInTounchSideImg" className="img-fluid getInTounch-SideImg" />
          </div>
      </div>
    </div>
  );
};

export default Getintouch;
