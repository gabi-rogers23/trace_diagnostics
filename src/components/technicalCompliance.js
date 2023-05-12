import React from "react";
import { NavBar, Footer } from "./exports";
import { BsBoxFill, BsClipboardCheckFill } from "react-icons/bs";
import { TbStarsFilled } from "react-icons/tb";
const img = require('../assets/Technical_Compliance_03.jpg');

const TechnicalCompliance = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="subContainer">
        <div className="subImageTechnical">
          <div className="title">Technical Compliance</div>
        </div>
        <div className="content">
          <div className="iconContainer">
            <div className="circle">
              <BsBoxFill className="person" />
            </div>
            <div className="circle">
              <BsClipboardCheckFill className="person" />
            </div>
            <div className="circle">
              <TbStarsFilled className="person" />
            </div>
          </div>
          <div className="quote">
            <h2>Quality Policy At Trace Diagnostics, Inc.</h2>
            We will maintain quality
            systems that ensure regulatory compliance, continuous improvements
            of our processes, products and services and create enduring
            relationships as partners with our customers.
          </div>
          <div className="description">
            At Trace Diagnostics we understand that quality is crucial to the
            success of any business, not just ours but that of our clients.
            These components carry the burden for successful product launch and
            market sustainability. At Trace Diagnostics, our team of compliance
            specialists will ensure that all products meet the proper quality
            standards and that only the best of the best leave our facility. We
            recognize that it is the name and the reputation of our clients that
            are on the line and we want to be a contributor to that, not an
            obstacle. Trace Diagnostics not only creates all the necessary
            paperwork such as manufacturing and quality assurance SOP{"’"}s, but
            also creates the validation work such that not only the client, but
            the client{"’"}s customers and governing agencies know that the product
            is of the highest caliber in design and production.
          </div>
            <img className="techImg" src={img}/>
        </div>
      </div>
      <div className="credit">
        Photo by:{" "}
        <a target="_blank" href="https://unsplash.com/@romaindancre?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Romain Dancre</a> 
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalCompliance;
