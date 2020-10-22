import styled from "styled-components";
import backgroundImage from "../../Assets/podecastenogrupo.svg";

export const PodcastCreatePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ccedd2;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
`;

export const PodcastCreateBlock = styled.div`
  padding: 10px 0px;
  border-radius: 12px;
  background: #effcef;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
    0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06),
    0 16px 16px rgba(0, 0, 0, 0.06);
  & header {
    text-align: center;
    font-family: "Poppins", sans-serif;
    border-bottom: 0.2px solid #655c56;
    width: 100%;
    & h1 {
      color: #94d3ac;
      font-size: 25px;
    }
    & p {
      width: 70%;
      margin: 5px auto;
      font-weight: 500;
      color: #655c56;
      font-size: 14px;
    }
  }
  & form {
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
  }
  & label {
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    color: #655c56;
    font-size: 13px;
    width: 100%;
    text-align: left;
    margin-left: 3px;
  }
  & input {
    background: #ccedd2;
    border: 0;
    font-family: "Poppins", sans-serif;
    color: #655c56;
    font-weight: 500;
    font-size: 17px;
    padding: 15px 40px 15px 10px;
    margin: 0 0 15px 0;
    border-radius: 7px;
    transition: background 0.2s;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
      0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06),
      0 16px 16px rgba(0, 0, 0, 0.06);
    &::placeholder {
      color: #effcef;
    }
    &:hover {
      background: #94d3ac;
    }
    &:focus {
      outline: none;
      background: #94d3ac;
    }
    & ~ label {
      margin-top: 5px;
    }
  }
  & button {
    width: 50%;
    margin: 10px auto;
    padding: 10px 15px;
    border-radius: 12px;
    border: 0;
    background: #ccedd2;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    color: #655c56;
    cursor: pointer;
    font-size: 15px;
    transition: background-color 0.2;
    transition: color 0.5s;
    &:hover {
      background: #655c56;
      color: #ccedd2;
    }
  }
  & .external-links {
    width: 100%;
    text-align: center;
    & a {
      text-decoration: none;
      color: #655c56;
      font-weight: 600;
      font-size: 11px;
      font-family: "Poppins", sans-serif;
      transition: color 0.1s;
      &:hover {
        color: #94d3ac;
      }
    }
  }
`;
