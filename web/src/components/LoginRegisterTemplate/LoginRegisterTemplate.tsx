import React from "react";
import { Link } from "react-router-dom";
import { BannerLeft, BannerRight, FormStyle, LoginRegisterPage } from "./style";
import BannerImage from "../../Assets/podecastenogrupo.svg";
import { Formik } from "formik";
import { InputField } from "./components/InputField";

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
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => console.log(values)}
            >
              {() => (
                <FormStyle className="animate__animated animate__fadeInDown">
                  <h1>{name}</h1>
                  <InputField
                    type="text"
                    label="Email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  {name === "Forgot Password" ? null : (
                    <>
                      <InputField
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Your password"
                      />
                    </>
                  )}
                  <div className="external-links">{externalLinks()}</div>
                  <button type="submit">{name}</button>
                  <Link to="/">Back to Home</Link>
                </FormStyle>
              )}
            </Formik>
          </BannerRight>
        </LoginRegisterPage>
      </div>
    </>
  );
};

export default LoginRegisterTemplate;
