import React from "react";
import styled from "styled-components";
import * as ReactBootStrap from 'react-bootstrap';

const TitleStyle = styled.div`

  h1 {
    text-align: center;
  }
  p {
      text-align:center; 
      font-size:50px;
  }
`;

const HomePage = () => {
  return (
    <TitleStyle>
      <ReactBootStrap.Jumbotron>
        hey
      </ReactBootStrap.Jumbotron>
      <h1>About OWASP</h1>
      <p>asdfds</p>
    </TitleStyle>

  );
};

export default HomePage;
