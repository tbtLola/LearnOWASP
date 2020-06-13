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
import { Container, Row } from "react-bootstrap";


import styled from "styled-components";

const Application = styled.div`

  .vulnerabilityPageContainer {
    background-color: rgb(255, 248, 172);
    padding-left: 272px;
    padding-top:25px;
    height: 1500px;
  }
`;

function App() {
  return (
    <Application>
      <BrowserRouter>
        <Container fluid >
          <Row>           
              <SideBar></SideBar>
              <div className="vulnerabilityPageContainer">
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route exact path="/home" component={HomePage}/>
                  <Route path="/sqlInjection" component={SQLInjections}/>                  
                  <Route path="/brokenAuthentication" component={BrokenAuthentication}/>                                    
                  <Route path="/sensitiveDataExposure" component={SensitiveDataExposure}/>
                  <Route path="/xmlEE" component={XmlExternalEntities}/>      
                  <Route path="/brokenAccessControl" component={BrokenAccessControl}/>
                  <Route path="/securityMisconfig" component={SecurityMisconfigurations}/>
                  <Route path="/xss" component={CrossSiteScripting}/>
                  <Route path="/insecureDeserialization" component={InsecureDeserialization}/>
                  <Route path="/usingVulnerableComponents" component={VulnerableComponents}/>            
                  <Route path="/insufficientLogging" component={InsufficientLogging}/>                  
                </Switch>
              </div>
          </Row>
        </Container>
      </BrowserRouter>
    </Application>
  );
}

export default App;
