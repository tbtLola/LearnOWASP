import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";


const TitleStyle = styled.div`
  h1 {
    text-align: center;
  }
`;

const InsufficientLogging = () => {
  return (
    <TitleStyle>
      <h1>Insufficient Logging</h1>
      <Accordion title="What is Insufficient Logging?" content="What is dis?" />
      <Accordion
        title="Examples of Insufficient Logging"
        content="What is dis?"
      />
      <Accordion
        title="Preventing Insufficient Logging"
        content="What is dis?"
      />
    </TitleStyle>
  );
};

export default InsufficientLogging;
