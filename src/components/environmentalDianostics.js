import React from "react";
import { NavBar, Footer } from "./exports";
import { GiMushrooms } from "react-icons/gi";

const Environmental = () => {
  return (
    <>
      <NavBar />
      <div className="subContainer">
      <div className="iconContainer">
      <div className="title">Environmental Diagnostics</div>
        <div className="subImage"></div>
        </div>

        <div className="description">
          Trace Diagnostics offers development services in the environmental
          industry. For the detection of analytes in order to determine air
          quality, contamination of surfaces with microorganisms, contamination
          with chemical residues, etc., Trace Diagnostics can serve to identify
          rare reagents and perform development into viable products, products
          that can lead to inexpensive and rapid diagnosis to ensure immediate
          and proper response to ensure safety and quality in all environmental
          settings.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Environmental;
