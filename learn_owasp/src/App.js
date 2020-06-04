import React from 'react';
import logo from './logo.svg';
import SideBar from './components/sidebar';
import BrokenAccessControl from './components/BrokenAccessControl';
import BrokenAuthentication from './components/BrokenAuthentication';
import CrossSiteScripting from './components/CrossSiteScripting';
import InsecureDeserialization from './components/InsecureDeserialization';
import InsufficientLogging from './components/InsufficientLogging';
import SecurityMisconfigurations from './components/SecurityMisconfigurations';
import SensitiveDataExposure from './components/SensitiveDataExposure';
import SQLInjections from './components/SQLInjections';
import VulnerableComponents from './components/VulnerableComponents';
import XmlExternalEntities from './components/XmlExternalEntities';
import HomePage from './components/HomePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar></SideBar>
      <Switch>
        {/* <Route path="/">
          <HomePage></HomePage>
        </Route> */}
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
      </BrowserRouter>
    </div>
  );
}


export default App;
