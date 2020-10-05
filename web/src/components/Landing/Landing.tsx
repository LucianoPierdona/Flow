import React from "react";
import NavBar from "../NavBar/NavBar";
import BannerImage from "../../Assets/podecastenogrupo2.svg";
import { CreateContainer, LandingBanner } from "./style";
import { Link } from "react-router-dom";

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
      <CreateContainer>
        <h1>Create Your Podcast Card</h1>
        <p>Click in the button below to create your podcast.</p>
        <Link to="/">Create Podcast</Link>
      </CreateContainer>
    </>
  );
};

export default Landing;
