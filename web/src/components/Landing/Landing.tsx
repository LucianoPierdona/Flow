import React from "react";
import NavBar from "../NavBar/NavBar";
import BannerImage from "../../Assets/podecastenogrupo2.svg";
import { LandingBanner } from "./style";

const Landing = () => {
  return (
    <>
      <NavBar />
      <LandingBanner>
        <div className="image-banner">
          <img src={BannerImage} alt="flow logo" />
        </div>
        <div className="content-banner">
          <h1>Welcome To Flow!</h1>
          <p>
            The Best place to share with others your favorites podcasts, if you
            want to create your own list and share, register or login.
          </p>
        </div>
      </LandingBanner>
    </>
  );
};

export default Landing;
