import React from "react";
import { NavBar, Footer } from "./exports";
import { GiMushrooms, GiChemicalDrop } from "react-icons/gi";
import {MdAir} from "react-icons/md"

const Environmental = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="subContainer">
      <div className="titleContainer">
      {/* <div className="subImage"></div> */}
        <div className="iconContainer">
      <div className="circle">
              <GiMushrooms className="person" />
            </div>
            <div className="circle">
              <MdAir className="person" />
            </div> 
            <div className="circle">
              <GiChemicalDrop className="person" />
            </div> 
            </div>
      <div className="title">Environmental Diagnostics</div>

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

      </div>
      <Footer />
    </div>
  );
};

export default Environmental;
