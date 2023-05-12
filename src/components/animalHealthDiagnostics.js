import React from "react";
import { NavBar, Footer } from "./exports";
import { GiSittingDog, GiCat } from "react-icons/gi";
import { MdPets } from "react-icons/md";

const AnimalHealth = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <div className="subContainer">
        <div className="subImageAnimal">
          <div className="title">Animal Health Diagnostics</div>
        </div>
        <div className="content">
          <div className="iconContainer">
            <div className="circle">
              <GiSittingDog className="person" />
            </div>
            <div className="circle">
              <MdPets className="person" />
            </div>
            <div className="circle">
              <GiCat className="person" />
            </div>
          </div>
          <div className="quote">
            "The best doctor in the world is the veterinarian. He can't ask his
            patients what is the matter. He's got to just know."
            <br />
            <b>{"–"} Will Rogers, </b>
            US humorist & showman {"(1879 - 1935)"}
          </div>
          <div className="description">
            Trace Diagnostics has a team of seasoned professionals in animal
            welfare and can provide invaluable market consultation, identify
            successful market entry points, as well as provide exceptional
            immunoassay development services in this field. From companion
            animal wellness to agricultural animal wellness, Trace Diagnostics
            serves to be a substantial partner. Our understanding of animal
            health conditions allows the scientific team and marketing personnel
            to be able to create products that can further define wellness
            programs and create niche markets.
          </div>
        </div>
      </div>
      <div className="credit">
        Photo by:{" "}
        <a target="_blank" href="https://unsplash.com/@mnelson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Matt Nelson
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default AnimalHealth;
