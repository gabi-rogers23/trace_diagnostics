import React from "react";
import { NavBar, Footer } from "./exports";
import { AiTwotonePhone } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdManageAccounts } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="subContainer">
        <div className="subImageContact">
          <div className="title">Contact Us</div>
        </div>
        <div className="contentContact">
          <div className="contactIcon">
            <div className="circle">
              <FaMapMarkerAlt className="person" />
            </div>
            <span>
              <b>Address & Accounts Payable and Billing: </b>
              <br />
              Trace Diagnostics, Inc.
              <br /> 830 Seton Court, Suite 12
              <br /> Wheeling, IL 60090
            </span>
          </div>
          <div className="contactIcon">
            <div className="circle">
              <AiTwotonePhone className="person" />
            </div>
            <span>
              <b>Phone: </b>847-9-TRACE-9
              <br /> (+1 847-987-2239)
            </span>
          </div>
          <div className="contactIcon">
            <div className="circle">
              <MdEmail className="person" />
            </div>
            <span>
              <b>E-Mail: </b>
              <a href="mailto:service@tracedx.com">service@tracedx.com</a>
            </span>
          </div>

          <div className="quote"></div>
          <div className="description"></div>
        </div>
      </div>
      <div className="credit">
        Photo by:{" "}
        <a
          target="_blank"
          href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          NASA
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
