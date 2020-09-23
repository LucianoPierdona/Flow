import styled from 'styled-components';

export const LoginRegisterPage = styled.div`
  display: flex; 
  height: 100vh;
  width: 100vw;
`;

export const BannerLeft = styled.div`
  width: 50%;
  background: #ccedd2;
  display: grid;
  place-items: center;
  & img {
    width: 80%;
  }
`;

export const BannerRight = styled.div`
  background: #effcef;
  width: 50%;
  display: grid;
  place-items: center;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0,0,0,0.06), 
  0 2px 2px rgba(0,0,0,0.06), 
  0 4px 4px rgba(0,0,0,0.06), 
  0 8px 8px rgba(0,0,0,0.06),
  0 16px 16px rgba(0,0,0,0.06);
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 55%;
  & h1 {
    color: #94d3ac;
    font-family: 'Poppins', sans-serif;
    margin-bottom: .6rem;
    font-size: 35px;
    width: 100%;
  }
  & label {
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color:#655c56;
    font-size: 13px;
    width: 100%;
    text-align: left;
    margin-left: 3px;
  }
  & input {
    background: #ccedd2;
    border: 0;
    font-family: 'Poppins', sans-serif;
    color:#655c56;
    font-weight: 500;
    font-size: 17px;
    padding: 15px 40px 15px 10px;
    border-radius: 7px;
    transition: background 0.2s;
    &::placeholder {
      color: #effcef;
    }
    &:hover {
      background: #94d3ac;
    }
    &:focus {

    }
    & ~ label {
      margin-top: 5px;
    }
    & ~ input {
      margin-bottom: 15px;
    }
  }
  & .external-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & a {
      text-decoration: none;
      text-align: left;
      margin-bottom: 5px;
      color: #655c56;
      font-weight: 600;
      font-size: 11px;
      font-family: "Poppins", sans-serif;
      & a:hover {
        color: #94d3ac;
      }
    }
  }
  & button {
    color: #effcef;
    background-color: #94d3ac;
    border: 0;
    border-radius: 12px;
    padding: 10px 25px;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: color 0.2s;
    transition: background-color .5s;
    &:focus {
      outline: none;
    }
    &:hover {
      color: #94d3ac;
      background-color: #ccedd2;
    }
  }
`;