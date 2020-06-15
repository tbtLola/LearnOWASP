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
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
      {/* <p className="intro">
        External markup language (XML) is a tool similar to HTML that is used
        for storing and transporting data. XML is essentially data wrapped in
        tags. Vulnerable XML processors can be exploited by hackers if they can
        take advantage of the processor to upload inappropriate content in the
        XML document, or exploit varying dependences in the code. There are
        various impacts of XEE flaws, especially if an applications accepts XML
        files from untrusted sources.
      </p>
      <table>
        <tbody>
          <tr>
            <th>
              <h1>Examples of XML External Entities</h1>
            </th>
            <th className="protection">
              <h1>Protection Against XML External Entities</h1>
            </th>
          </tr>
          <tr>
            <td className="brokenAuth">
              <h2>Attempting To Extract Data From the Server</h2>
              <p>
                Since XML allows the transport of data, an attacker may include
                a malicious line of code in an attempt to extract data from the
                server. This may look something like:
                <br></br>
                <br></br>
                <img src={XEE} alt="xeeOne" />
                <br />
                code snippet from W3Schools
              </p>
              <h2>Attempting to search the server's network</h2>
              <p>
                An attacker can try to maliciously test the server's private
                network by replacing the entity line above with:{" "}
              </p>
              <br />
              <br />
              <img src={XEENetworkAttack} alt="" />
              <br />
              code snippet from W3Schools
              <h2>Attempting a denial of service (DOS) attack</h2>
              <p>
                An attacker can maliciously try to send an endless file as part
                of a denial of service attack
              </p>
            </td>
            <td className="brokenAuthProtection"></td>
          </tr>
        </tbody>
      </table> */}
    </TitleStyle>
  );
};

export default XmlExternalEntities;
