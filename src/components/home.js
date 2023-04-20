import React from "react";
const space = require("../assets/nasa-CzigtQ8gPi4-unsplash.jpg");
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="welcome">
        <div className="bigWord">
          Welcome.
        </div>
        <div className="mission">
            Here at Trace Diagnostics it is our mission to understand our
            customers needs, meet our customers requirements, and to exceed our
            customers expectations.
          </div>
      </div>

      <div className="whoContainer">
        <h1>Who We Are </h1>
        <p>Trace Diagnostics, Inc. is a state of the art product
        development and manufacturing company whose corporate mission is to
        provide quality rapid immunoassay products and contract manufacturing
        services to the human healthcare, veterinary, and environmental
        industries. It is our goal to establish this company as a FDA and USDA
        cGMP compliant manufacturer in order to ensure that all products and
        services meet the highest quality standards. </p><br/>
        <p>Trace Diagnostics offers to
        the diagnostic industry, market expertise, expertise in product
        development, expertise in immunoassay manufacturing as well as expertise
        in plastics and medical device design as a fundamental component of the
        rapid test.</p>
      </div>
    </div>
  );
};

export default Home;
