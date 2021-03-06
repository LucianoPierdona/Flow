import styled from "styled-components";

export const PodcastCardStyle = styled.div`
  padding: 15px 20px;
  background: linear-gradient(60deg, #fff, #effcef);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
    0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06),
    0 -8px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .img-block {
    width: 50%;
    & img {
      object-fit: cover;
      height: auto;
      width: 100%;
    }
  }
  & div {
    padding-left: 12px;
    width: 60%;
    text-align: left;
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
  & .icons-block {
    padding-left: 0;
    width: 100%;
    text-align: right;
    & .trash-icon {
      opacity: 0.2;
      color: tomato;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        opacity: 1;
        color: #655c56;
      }
    }
  }
`;
