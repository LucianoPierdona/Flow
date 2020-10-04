import styled from "styled-components";

export const LandingBanner = styled.div`
  display: flex;
  position: relative;
  z-index: -1;
  top: -8px;
  & .image-banner {
    background: #effcef;
    width: 50%;
    padding: 20px 10px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
      0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06),
      0 16px 16px rgba(0, 0, 0, 0.06);
    & img {
      width: 100%;
    }
  }
  & .content-banner {
    padding: 90px 0;
    width: 50%;
    text-align: center;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
      0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06),
      0 16px 16px rgba(0, 0, 0, 0.06);
    & h1 {
      font-family: "Poppins", sans-serif;
      color: #94d3ac;
    }
    & p {
      font-family: "Roboto", sans-serif;
      color: #655c56;
      width: 70%;
      margin: 10px auto;
    }
  }
`;
