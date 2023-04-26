import React, { useState, useRef, useEffect } from "react";
import {NavDrawer, Footer} from "./exports"
import { IoMdFingerPrint, IoIosArrowDropdown } from "react-icons/io";
import { Fade } from "@mui/material";

const Home = () => {
  const [myElementIsVisible, updateMyElementIsVisible] = useState();
  const boxElement = useRef();
  const aboutUs = useRef();

  const scrollTo = (pageSection) => { window.scrollTo({ top: pageSection.current.offsetTop, behavior: 'smooth', transition: '1s' });}

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
      console.log("entry", entry);
      console.log("entry.isIntersecting", entry.isIntersecting);
    });
    observer.observe(boxElement.current);
  }, []);

  return (
    <>
      <div>
        <NavDrawer />
      </div>
      <div className="homeContainer">
        <div className="welcome">
          <div className="bigWord">Trace Diagnostics, Inc.</div>
          <div className="mission">
            Welcome. <br />
            Here at Trace Diagnostics it is our mission to understand our
            customers needs, meet our customers requirements, and to exceed our
            customers expectations.
          </div>
          <button onClick={((e)=>{
            e.preventDefault()
            scrollTo(aboutUs)
          })}>Learn More<IoIosArrowDropdown/></button>
        </div>

        <Fade in={myElementIsVisible}>
          <div className="whoContainer">
            <div className="circle" ref={boxElement}>
              <IoMdFingerPrint className="person" />
            </div>
            <h1 ref={aboutUs}>Who We Are </h1>
            <p>
              Trace Diagnostics, Inc. is a state of the art product development
              and manufacturing company whose corporate mission is to provide
              quality rapid immunoassay products and contract manufacturing
              services to the human healthcare, veterinary, and environmental
              industries. It is our goal to establish this company as a FDA and
              USDA cGMP compliant manufacturer in order to ensure that all
              products and services meet the highest quality standards.{" "}
            </p>
            <p ref={boxElement}>
              Trace Diagnostics offers to the diagnostic industry, market
              expertise, expertise in product development, expertise in
              immunoassay manufacturing as well as expertise in plastics and
              medical device design as a fundamental component of the rapid
              test.
            </p>
          </div>
        </Fade>
      </div>
      <Footer />
    </>
  );
};

export default Home;
