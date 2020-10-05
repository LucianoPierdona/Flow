import styled from "styled-components";

export const NavBarContainer = styled.div`
  font-family: "Roboto", sans-serif;
  background: #ccedd2;
  width: 100%;
  position: fixed;
  border-radius: 0px 0px 20px 20px;
  height: 55px;
  z-index: 3;
  & > div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex: 1;
    height: 45px;
    justify-content: space-between;
    align-items: center;
    & .navbar-left {
      font-size: 30px;
      font-style: italic;
      font-weight: 900;
      color: #655c56;
    }
    & .navbar-right {
      font-weight: 700;
      color: #effcef;
      display: flex;
      align-items: center;
      & p {
        color: #655c56;
        transition: color 0.2s;
        cursor: pointer;
        &:hover {
          color: #94d3ac;
        }
      }
      & a {
        font-size: 10px;
        text-decoration: none;
        margin: 0 5px;
        color: tomato;
        transition: color 0.2s;
        &:hover {
          color: #655c56;
        }
      }
    }
  }
`;
