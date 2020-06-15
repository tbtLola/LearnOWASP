import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import styled from "styled-components";

const StyledSideBar = styled.div`
  border:none; 
  border-radius: 50px; 
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    min-height: 100vh !important;
    z-index: 100;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
    
  }
  .vulnerability {
    /* border-bottom: solid;
    border-bottom-color: gray;
    border-bottom-width: 0.2px; */
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 13px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }

  .NavTitle:hover {
    background-color: rgb(227, 255, 172);
  }
  .NavTitle {
    /* border-radius: 0px 50px 0px 0px;  */

    font-family: "TestFont";
    font-weight: normal;
    font-style: normal;
    font-size: 60px;
    text-align: center;
    background-color: rgb(255, 227, 172);
  }

  .vulnerability:hover {
    background-color: rgb(255, 248, 172);
  }
  .vulnerability {
    background-color: rgb(255, 227, 172);
    font-family: "TestFont";
    font-weight: normal;
    font-style: normal;
  }

  .active {
    background-color: rgb(255, 248, 172);
  }


  .vulnerabilityFiller {
    border-bottom: solid;
    border-bottom-width: 0.2px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 13px;
    text-align: center;
    background-color: rgb(255, 227, 172);
    height: 100%;
  }

  .activeNavTitle {
    background-color: rgb(227, 255, 172);
  }
`;

const Side = (props) => {
  var Link = require("react-router-dom").Link;
  const [setActiveNavTitle, setActiveStateNavTitle] = useState("");
  const [setActiveSQL, setActiveStateSQL] = useState("");
  const [setActiveBrokenAuth, setActiveStateBrokenAuth] = useState("");
  const [
    setsensitiveDataExposure,
    setActiveStateSensitiveDataExposure,
  ] = useState("");
  const [setxmlEE, setActiveStateXmlEE] = useState("");
  const [setbrokenAccessControl, setActiveStateBrokenAccessControl] = useState(
    ""
  );
  const [setsecurityMisconfig, setActiveStateSecurityMisconfig] = useState("");
  const [setxss, setActiveStateXss] = useState("");
  const [
    setinsecureDeserialization,
    setActiveStateInsecureDeserialization,
  ] = useState("");
  const [
    setusingVulnerableComponents,
    setActiveStateUsingVulnerableComponents,
  ] = useState("");
  const [setinsufficientLogging, setActiveStateInsufficientLogging] = useState(
    ""
  );

  function clearEveryThing() {
    setActiveStateSQL("");
    setActiveStateBrokenAuth("");
    setActiveStateSensitiveDataExposure("");
    setActiveStateXmlEE("");
    setActiveStateBrokenAccessControl("");
    setActiveStateSecurityMisconfig("");
    setActiveStateXss("");
    setActiveStateInsecureDeserialization("");
    setActiveStateUsingVulnerableComponents("");
    setActiveStateInsufficientLogging("");
    setActiveStateNavTitle("");
  }

  function linkClickHandlerSQL() {
    clearEveryThing();
    setActiveStateSQL(setActiveSQL === "" ? "active" : "");
  }

  function linkClickHandlerBrokenAuth() {
    clearEveryThing();
    setActiveStateBrokenAuth(setActiveBrokenAuth === "" ? "active" : "");
  }

  function linkClickHandlerSensitiveDataExposure() {
    clearEveryThing();
    setActiveStateSensitiveDataExposure(
      setsensitiveDataExposure === "" ? "active" : ""
    );
  }
  function linkClickHandlerXmlEE() {
    clearEveryThing();
    setActiveStateXmlEE(setxmlEE === "" ? "active" : "");
  }
  function linkClickHandlerBrokenAccessControl() {
    clearEveryThing();
    setActiveStateBrokenAccessControl(
      setbrokenAccessControl === "" ? "active" : ""
    );
  }
  function linkClickHandlerSecurityMisconfig() {
    clearEveryThing();
    setActiveStateSecurityMisconfig(
      setsecurityMisconfig === "" ? "active" : ""
    );
  }
  function linkClickHandlerXss() {
    clearEveryThing();
    setActiveStateXss(setxss === "" ? "active" : "");
  }
  function linkClickHandlerInsecureDeserialization() {
    clearEveryThing();
    setActiveStateInsecureDeserialization(
      setinsecureDeserialization === "" ? "active" : ""
    );
  }
  function linkClickHandlerUsingVulnerableComponents() {
    clearEveryThing();
    setActiveStateUsingVulnerableComponents(
      setusingVulnerableComponents === "" ? "active" : ""
    );
  }
  function linkClickHandlerInsufficientLogging() {
    clearEveryThing();
    setActiveStateInsufficientLogging(
      setinsufficientLogging === "" ? "active" : ""
    );
  }

  function linkClickHandlerNavTitle() {
    clearEveryThing();
    setActiveStateNavTitle(setActiveNavTitle === "" ? "activeNavTitle" : "");
  }

  return (
    <StyledSideBar>
      <Nav className="sidebar" activeKey="/home">
        <Nav.Item className={`NavTitle ${setActiveNavTitle}`}>
          <Nav.Link as={Link} to="/home" onClick={linkClickHandlerNavTitle}>
            Learn OWASP
            <br />
            Top 10
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className={`vulnerability ${setActiveSQL}`}>
          <Nav.Link as={Link} to="/sqlInjection" onClick={linkClickHandlerSQL}>
            1. SQL Injections
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setActiveBrokenAuth}`}>
          <Nav.Link
            as={Link}
            to="/brokenAuthentication"
            onClick={linkClickHandlerBrokenAuth}
          >
            2. Broken Authentication
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setsensitiveDataExposure}`}>
          <Nav.Link
            as={Link}
            to="/sensitiveDataExposure"
            onClick={linkClickHandlerSensitiveDataExposure}
          >
            3. Sensitive Data Exposure
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setxmlEE}`}>
          <Nav.Link as={Link} to="/xmlEE" onClick={linkClickHandlerXmlEE}>
            4. XML External Entities (XXE)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setbrokenAccessControl}`}>
          <Nav.Link
            as={Link}
            to="/brokenAccessControl"
            onClick={linkClickHandlerBrokenAccessControl}
          >
            5. Broken Access control
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setsecurityMisconfig}`}>
          <Nav.Link
            as={Link}
            to="/securityMisconfig"
            onClick={linkClickHandlerSecurityMisconfig}
          >
            6. Security misconfigurations
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setxss}`}>
          <Nav.Link as={Link} to="/xss" onClick={linkClickHandlerXss}>
            7. Cross Site Scripting (XSS)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setinsecureDeserialization}`}>
          <Nav.Link
            as={Link}
            to="/insecureDeserialization"
            onClick={linkClickHandlerInsecureDeserialization}
          >
            8. Insecure Deserialization
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setusingVulnerableComponents}`}>
          <Nav.Link
            as={Link}
            to="/usingVulnerableComponents"
            onClick={linkClickHandlerUsingVulnerableComponents}
          >
            9. Using Components with known vulnerabilities
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className={`vulnerability ${setinsufficientLogging}`}>
          <Nav.Link
            as={Link}
            to="/insufficientLogging"
            onClick={linkClickHandlerInsufficientLogging}
          >
            10. Insufficient logging and monitoring
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="vulnerabilityFiller"></Nav.Item>
      </Nav>
    </StyledSideBar>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
