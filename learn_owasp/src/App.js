import React from "react";
import SideBar from "./components/sidebar";
import BrokenAccessControl from "./components/BrokenAccessControl";
import BrokenAuthentication from "./components/BrokenAuthentication";
import CrossSiteScripting from "./components/CrossSiteScripting";
import InsecureDeserialization from "./components/InsecureDeserialization";
import InsufficientLogging from "./components/InsufficientLogging";
import SecurityMisconfigurations from "./components/SecurityMisconfigurations";
import SensitiveDataExposure from "./components/SensitiveDataExposure";
import SQLInjections from "./components/SQLInjections";
import VulnerableComponents from "./components/VulnerableComponents";
import XmlExternalEntities from "./components/XmlExternalEntities";
import HomePage from "./components/HomePage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


import styled from "styled-components";

const Application = styled.div`
  
  height: 100%;
  .ew {
    background-color: rgb(235, 245, 223);
    padding-left: 272px;
    padding-top:25px;
    height: 100%;
  }
`;

function App() {
  return (
    <Application>
      <BrowserRouter>
        <Container fluid >
          <Row>
           
              <SideBar></SideBar>
              <div className="ew">
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route exact path="/home" component={HomePage}></Route>
                  <Route path="/sqlInjection">
                    <SQLInjections></SQLInjections>
                  </Route>
                  <Route path="/brokenAuthentication">
                    <BrokenAuthentication></BrokenAuthentication>
                  </Route>
                  <Route path="/sensitiveDataExposure">
                    <SensitiveDataExposure></SensitiveDataExposure>
                  </Route>
                  <Route path="/xmlEE">
                    <XmlExternalEntities></XmlExternalEntities>
                  </Route>
                  <Route path="/brokenAccessControl">
                    <BrokenAccessControl></BrokenAccessControl>
                  </Route>
                  <Route path="/securityMisconfig">
                    <SecurityMisconfigurations></SecurityMisconfigurations>
                  </Route>
                  <Route path="/xss">
                    <CrossSiteScripting></CrossSiteScripting>
                  </Route>
                  <Route path="/insecureDeserialization">
                    <InsecureDeserialization></InsecureDeserialization>
                  </Route>
                  <Route path="/usingVulnerableComponents">
                    <VulnerableComponents></VulnerableComponents>
                  </Route>
                  <Route path="/insufficientLogging">
                    <InsufficientLogging></InsufficientLogging>
                  </Route>
                </Switch>
              </div>
          </Row>
        </Container>
      </BrowserRouter>
    </Application>
  );
}

export default App;
