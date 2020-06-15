import React from "react";
import styled from "styled-components";
import XEE from "../images/XEE.png";
import XEENetworkAttack from "../images/XEENetworkAttack.png";
import Accordion from "../components/Accordion";
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
  html,
  body {
    height: 100%;
  }
  flex-grow: 100;
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
  h2 {
    text-align: center;
  }
  .brokenAuthProtection {
    width: 50%;
  }
  .brokenAuth {
    width: 50%;
  }
  table {
    margin: auto;
  }
  table td {
    vertical-align: top;
  }
  p {
    padding-left: 20px;
    font-size: 16px;
  }
  .intro {
    width: 50%;
    margin: auto;
  }
  .mainBody {
    top: 250px;
    position: relative;
  }
`;

const XmlExternalEntities = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>4. XML External Entities</h1>
      </div>
      <div className="mainBody">
        <Accordion 
        title="What are XML External Entities?"
        definition="External markup language (XML) is a tool similar to HTML that is used
        for storing and transporting data. XML is essentially data wrapped in
        tags. Vulnerable XML processors can be exploited by hackers if they can
        take advantage of the processor to upload inappropriate content in the
        XML document, or exploit varying dependences in the code. There are
        various impacts of XEE flaws, especially if an applications accepts XML
        files from untrusted sources."
        />
        <Accordion
        title="Examples of XML External Entities"
        subheading="Attempting To Extract Data From the Server"
        definition="Since XML allows the transport of data, an attacker may include
        a malicious line of code in an attempt to extract data from the
        server. This may look something like:"
        subheadingTwo="Attempting to search the server's network"
        definitionTwo="An attacker can try to maliciously test the server's private
        network by replacing the entity line above with:"
        subheadingThree="Attempting a denial of service (DOS) attack"
        definitionThree="An attacker can maliciously try to send an endless file as part
        of a denial of service attack"/>
        <Accordion title="How to protect against XML External Entities"/>
      </div>
    </TitleStyle>
  );
};

export default XmlExternalEntities;
