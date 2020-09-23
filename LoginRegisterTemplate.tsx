import React from 'react';
import { BannerLeft, BannerRight, LoginRegisterPage } from './style';

interface FormProps {
  name: String;
}

const LoginRegisterTemplate = ({ name }) => {
  
  const externalLinks = () => {
    if (name === 'Login') {
      return (
        <div className="external-links">
          <a href="#">Forgot Password?</a>
          <a href="register.html">Don't Have an account?</a>
        </div>
      );
    } else if (name === 'Register') {
      return (
        <div className="external-links">
          <a href="login.html">Already Have an account?</a>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <>
      <div>
        <LoginRegisterPage>
          <BannerLeft>
            <img src="./podecastenogrupo.svg" />
          </BannerLeft>
          <BannerRight>
            <form>
              <h1>{name}</h1>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Your email" />
              {name === "Forgot" ? null : (
                <>
                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Your password" />
                </>
              )}
              {externalLinks()}
              <button type="submit">{name}</button>
            </form>
          </BannerRight>
        </LoginRegisterPage>
      </div>
    </>
  );
}

export default LoginRegisterTemplate;