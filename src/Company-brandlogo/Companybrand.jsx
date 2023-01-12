import React from "react";
import "./companybrand.css";
import brandlogo from "../Asset/akbari_logo.png";

const Companybrand = () => {
  return (
   <div className="container">
    <div className="row pt-4">
      <div className="col-lg-8  ">
      <figure>
            <img
              src={brandlogo}
              alt=""
              style={{ width: "200px", height: "80px" }}
              className="d-sm-none d-md-block "
            />
          </figure>
      </div>
     <div className="col-lg-4    d-flex justify-content-lg-evenly justify-content-md-center  ">
     <p className="email-info  pt-2    ">
              <span>
                <a href="mailto:info@aci.com.pk">info@aci.com.pk</a>
              </span>
            </p>

            <div className=" requestquote-btn d-sm-none d-xl-block  ">
              <a href="https://aci.com.pk/request-quote.php">REQUEST A QUOTE</a>
            </div>
     </div>
    </div>
   </div>
  );
};

export default Companybrand;
