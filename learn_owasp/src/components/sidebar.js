import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import styled from "styled-components";
import SQLInjections from './SQLInjections'

const StyledSideBar = styled.div`
 .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        min-height: 100vh !important;
        z-index: 100;
        padding: 0px 10px 0 0;
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }
 .vulnerability {
     border-bottom: solid;
     border-bottom-color:gray; 
     border-bottom-width:0.2px;
     padding-top:20px;
     padding-bottom:20px; 
     font-size:13px; 
     text-align: center; 
 }
 a {
     text-decoration:none;
     color: black; 
 }
 a:hover {
     text-decoration:underline; 
 }
 .NavTitle{
    border-bottom: solid;
    padding-bottom: 35px;
    font-size: 40px; 
    text-align: center; 
 }
`

const Side = props => {


    return (
        <StyledSideBar>
            <Nav className="sidebar"
            activeKey="/home"
           
            >
            <Nav.Item className="NavTitle">
                Learn OWASP
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/sqlInjection">SQL Injections</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability"> 
                <Nav.Link href="/brokenAuthentication">Broken Authentication</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/sensitiveDataExposure" >Sensitive Data Exposure</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/xmlEE">XML External Entities (XXE)</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/brokenAccessControl" >Broken Access control</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/securityMisconfig" >Security misconfigurations</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/xss" >Cross Site Scripting (XSS)</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/insecureDeserialization" >Insecure Deserialization</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/usingVulnerableComponents" >Using Components with known vulnerabilities</Nav.Link>
            </Nav.Item>
            <Nav.Item className="vulnerability">
                <Nav.Link href="/insufficientLogging" >Insufficient logging and monitoring</Nav.Link>
            </Nav.Item>
            </Nav>
        </StyledSideBar>        
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar