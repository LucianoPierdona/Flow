import React from "react";
import { Link } from "react-router-dom";
import { BannerLeft, BannerRight, FormStyle, LoginRegisterPage } from "./style";
import BannerImage from "../../Assets/podecastenogrupo.svg";

interface FormProps {
  name: String;
}

const LoginRegisterTemplate: React.FC<FormProps> = ({ name }) => {
  const externalLinks = () => {
    if (name === "Login") {
      return (
        <>
          <Link to="/forgot">Forgot Password?</Link>
          <Link to="/register">Don't Have an account?</Link>
        </>
      );
    } else if (name === "Register") {
      return <Link to="/login">Already Have an account?</Link>;
    } else {
      return <Link to="/login">Get Back to Login</Link>;
    }
  };

  return (
    <>
      <div>
        <LoginRegisterPage>
          <BannerLeft>
            <img src={BannerImage} alt="flow logo" />
          </BannerLeft>
          <BannerRight>
            <FormStyle className="animate__animated animate__fadeInDown">
              <h1>{name}</h1>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Your email"
                required
              />
              {name === "Forgot Password" ? null : (
                <>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Your password" />
                </>
              )}
              <div className="external-links">{externalLinks()}</div>
              <button type="submit">{name}</button>
              <Link to="/">Back to Home</Link>
            </FormStyle>
          </BannerRight>
        </LoginRegisterPage>
      </div>
    </>
  );
};

export default LoginRegisterTemplate;
