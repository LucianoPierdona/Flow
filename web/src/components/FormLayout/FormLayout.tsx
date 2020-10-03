import React from "react";
import { BannerLeft, BannerRight, FormStyle, LoginRegisterPage } from "./style";
import BannerImage from "../../Assets/podecastenogrupo.svg";

const FormLayout: React.FC = ({ children }) => {
  return (
    <>
      <div>
        <LoginRegisterPage>
          <BannerLeft>
            <img src={BannerImage} alt="flow logo" />
          </BannerLeft>
          <BannerRight>
            <FormStyle className="animate__animated animate__fadeInDown">
              {children}
            </FormStyle>
          </BannerRight>
        </LoginRegisterPage>
      </div>
    </>
  );
};

export default FormLayout;
