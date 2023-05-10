import React from "react";
import { NavBar, Footer } from "./exports";
import { SiTestcafe } from "react-icons/si";
import { IoMdClock } from "react-icons/io";
import { GiTestTubes } from "react-icons/gi";
const img = require("../assets/R&D.jpg");

const ProductDevelopment = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="subContainer">
        <div className="subImageProduct">
          <div className="title">Product Development & Manufacturing</div>
        </div>
        <div className="content">
          <div className="iconContainer">
            <div className="circle">
              <GiTestTubes className="person" />
            </div>
            <div className="circle">
              <IoMdClock className="person" />
            </div>
            <div className="circle">
              <SiTestcafe className="person" />
            </div>
          </div>
          <div className="quote"></div>
          <div className="description">
            Trace Diagnostics provides to its clients premier R&D services.
            Trace Diagnostics can effectively analyze the feasibility of
            reagents for use in rapid immunoassays. This process offers a quick
            glance as to the potential a reagent or concept may have, and can
            result in saving considerable time and money for Trace Diagnostics
            {"’"}
            clients. The scientific team at Trace Diagnostics can develop
            immunoassays that would meet or exceed performance requirements at a
            cost substantially less than in-house development efforts.
          </div>
          <img className="techImg" src={img} />
        </div>
      </div>
      <div className="credit">
        Photo by:{" "}
        <a href="https://unsplash.com/@nci?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          National Cancer Institute
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDevelopment;
