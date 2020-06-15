import React from "react";
import styled from "styled-components";
import * as ReactBootStrap from "react-bootstrap";

const TitleStyle = styled.div`
  .headerDisplay {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    margin-top: 0px;
    background-color: rgb(227, 255, 172);
    height: 133px;
    padding-bottom: 10px;
  }
  h1 {
    text-align: center;
    font-family: "TestFont";
    font-weight: normal;
    font-style: normal;
    padding-top: 50px;
    padding-left: 300px;
    text-align: center;
    font-size: 50px;
  }
  p {
    text-align: center;
    font-size: 50px;
  }
`;

const HomePage = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>About OWASP</h1>
      </div>
    </TitleStyle>
  );
};

export default HomePage;
