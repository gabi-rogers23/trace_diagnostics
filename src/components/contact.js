import React from "react";
import { NavBar, Footer } from "./exports";
import { BsBoxFill, BsClipboardCheckFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
const img = require("../assets/Technical_Compliance_03.jpg");

const Contact = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="subContainer">
        <div className="subImageTechnical">
          <div className="title">Contact Us</div>
        </div>
        <div className="content">
          <div className="iconContainer">
            <div className="circle">
              <FaMapMarkerAlt className="person" />
            </div>
              <span>Trace Diagnostics, Inc. 830 Seton Court, Suite 12 Wheeling, IL 60090</span>
          </div>

          <div className="iconContainer">
            <div className="circle">
              <BsBoxFill className="person" />
            </div>
              <span>Phone: 847-9-TRACE-9</span>
          </div>

          <div className="iconContainer">
            <div className="circle">
              <BsBoxFill className="person" />
            </div>
              <span>E-Mail: service@tracedx.com</span>
          </div>

          <div className="iconContainer">
            <div className="circle">
              <BsBoxFill className="person" />
            </div>
              <span>Accounts Payable
            and Billing: Trace Diagnostics, Inc. 2033 N. Milwaukee Ave., Suite
            120 Riverwoods, IL 60015</span>
          </div>

          <div className="quote">
          </div>
          <div className="description">
          </div>
        </div>
      </div>
      <div className="credit">
        Photo by:{" "}
        <a href="https://unsplash.com/@romaindancre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Romain Dancre
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
