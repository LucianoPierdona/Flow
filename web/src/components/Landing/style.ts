import styled from "styled-components";

export const LandingBanner = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  top: 46px;
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
    padding: 120px 0;
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
      margin: 10px auto 25px auto;
    }
    & a {
      margin: 15px;
      background: #94d3ac;
      color: #655c56;
      text-decoration: none;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      padding: 10px 35px;
      border-radius: 12px;
      transition: background-color 0.2s;
      &:hover {
        background: #ccedd2;
      }
    }
  }
`;

export const CreateContainer = styled.div`
  position: relative;
  top: 46px;
  width: 100%;
  background: #94d3ac;
  text-align: center;
  align-items: center;
  z-index: 0;
  padding: 75px 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
    0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06),
    0 16px 16px rgba(0, 0, 0, 0.06);
  & h1 {
    font-family: "Roboto", sans-serif;
    color: #655c56;
  }
  & p {
    font-family: "Poppins", sans-serif;
    color: #effcef;
    margin: 5px 0 15px 0;
  }
  & a {
    background: #effcef;
    color: #655c56;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    padding: 10px 15px;
    border-radius: 12px;
    transition: background-color 0.2s;
    &:hover {
      background: #ccedd2;
    }
  }
`;

export const PodcastList = styled.div`
  position: relative;
  top: 70px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;
