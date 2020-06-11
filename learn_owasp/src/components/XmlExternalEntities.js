import React from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
  html,
  body {
    height: 100%;
  }
  flex-grow: 100;
  h1 {
    text-align: center;
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
`;

const XmlExternalEntities = () => {
  return (
    <TitleStyle>
      <h1>XML External Entities</h1>
      <p className="intro">
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
            <th classname="protection">
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
              </p>

              <h2>Attempting to search the server's network</h2>
              <p>test2</p>
              <h2>Attempting a denial of service (DOS) attack</h2>
              <p>test3</p>
            </td>
            <td className="brokenAuthProtection"></td>
          </tr>
        </tbody>
      </table>
    </TitleStyle>
  );
};

export default XmlExternalEntities;
