import React from "react";
import { Link } from "react-router-dom";
import { LandingBanner, CreateContainer } from "../style";
import BannerImage from "../../../Assets/podecastenogrupo2.svg";
import { useMeQuery } from "../../../generated/graphql";

export const LandingStaticContent = () => {
  const [{ data, fetching }] = useMeQuery();
  let linksContainer = null;

  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    linksContainer = (
      <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>
    );
  }
  return (
    <>
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
          {linksContainer}
        </div>
      </LandingBanner>
      <CreateContainer>
        <h1>Create Your Podcast Card</h1>
        <p>Click in the button below to create your podcast.</p>
        <Link to="/">Create Podcast Card</Link>
      </CreateContainer>
    </>
  );
};
