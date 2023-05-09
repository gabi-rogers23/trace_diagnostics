import React from "react";
import { NavBar, Footer } from "./exports";
import { GiHealthNormal } from "react-icons/gi";
import { BsFillLungsFill } from "react-icons/bs";
import { RiHeartPulseFill } from "react-icons/ri";

const HumanDiagnostics = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="subContainer">
        <div className="subImageHuman">
          <div className="title">Human Diagnostics</div>
        </div>
        <div className="content">
          <div className="iconContainer">
            <div className="circle">
              <GiHealthNormal className="person" />
            </div>
            <div className="circle">
              <BsFillLungsFill className="person" />
            </div>
            <div className="circle">
              <RiHeartPulseFill className="person" />
            </div>
          </div>
          <div className="quote"></div>
          <div className="description">
            Trace Diagnostics{"’"} expertise in immunoassay development for
            human health conditions is unparalleled. With over 30 years combined
            experience, the scientific team has the skills and knowledge to
            effectively develop and manufacture rapid immunoassays for a variety
            of analytes including but not limited to infectious diseases,
            cardiac markers, cancer markers, hormones, etc. Trace Diagnostics
            offers to its clients service in these areas that can be a catalyst
            to quick entry into market.
          </div>
        </div>
      </div>
      <div className="credit">
        Photo by:{" "}
       <a href="https://unsplash.com/@nexgenfx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luca Campioni</a>
      </div>
      <Footer />
    </div>
  );
};

export default HumanDiagnostics;
