import styled from "styled-components";

export const PodcastCreatePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ccedd2;
`;

export const PodcastCreateBlock = styled.div`
  padding: 10px 0px;
  border-radius: 12px;
  background: #effcef;
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
`;
