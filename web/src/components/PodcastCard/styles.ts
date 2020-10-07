import styled from "styled-components";

export const PodcastCardStyle = styled.div`
  padding: 15px 20px;
  background: linear-gradient(60deg, #fff, #effcef);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
    0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06),
    0 16px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .img-block {
    width: 40%;
    & img {
      height: auto;
      width: 100%;
    }
  }
  & div {
    width: 60%;
    text-align: center;
  }
  & a {
    text-decoration: none;
    & h1 {
      font-family: "Roboto", sans-serif;
      color: #655c56;
      font-size: 16px;
    }
    & p {
      font-family: "Poppins", sans-serif;
      color: #94d3ac;
      font-size: 12px;
    }
  }
`;
