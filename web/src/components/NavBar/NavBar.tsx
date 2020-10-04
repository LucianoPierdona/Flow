import React from "react";
import { Link } from "react-router-dom";
import { useMeQuery } from "../../generated/graphql";
import { NavBarContainer } from "./styles";

const NavBar = () => {
  const [{ data, fetching }] = useMeQuery();
  let rightBar = null;

  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    rightBar = (
      <>
        <Link to="/login">Login</Link>
        or
        <Link to="/register">Register</Link>
      </>
    );
    // user is logged in
  } else {
    rightBar = (
      <>
        <p>{data.me.username}</p>
        <Link to="/">Logout</Link>
      </>
    );
  }

  return (
    <NavBarContainer>
      <div>
        <div className="navbar-left animate__animated animate__fadeInLeft">
          Flow
        </div>
        <div className="navbar-right">{rightBar}</div>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
