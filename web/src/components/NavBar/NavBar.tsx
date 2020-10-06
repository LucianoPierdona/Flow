import React from "react";
import { Link } from "react-router-dom";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { NavBarContainer } from "./styles";

const NavBar = () => {
  const [, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
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
        <button
          onClick={() => {
            logout();
          }}
        >
          logout
        </button>
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
