import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import * as ReactBootStrap from "react-bootstrap";

const TitleStyle = styled.div`
  body,
  .headerDisplay {
    position:absolute; 
    top:0px; 
    left:0px; 
    width:100%; 
    margin-top:0px; 
    background-color: rgb(227, 255, 172);
    height: 280px;
    padding-bottom: 10px;
  }
  h1 {
    padding-top:50px; 
    padding-left: 300px; 
    text-align: left;
    font-size: 50px;
  }
  .bodyStuff{
    top:300px;
    position:relative; 
  }
`;

const InsufficientLogging = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>Insufficient Logging</h1>
      </div>
      <div className="bodyStuff">
        <Accordion
          title="What is Insufficient Logging?"
          content="What is dis?"
        />
        <Accordion
          title="Examples of Insufficient Logging"
          content="What is dis?"
        />
        <Accordion
          title="Preventing Insufficient Logging"
          content="What is dis?"
        />
      </div>
    </TitleStyle>
  );
};

export default InsufficientLogging;
