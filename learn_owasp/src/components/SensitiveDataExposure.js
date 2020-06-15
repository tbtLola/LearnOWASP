// ELABORATE ON REQUEST AND RESPONSE HTTP AND HTTPS
import React from "react";
import styled from "styled-components";
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

const SensitiveDataExposure = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
        <h1>3. Sensitive Data Exposure</h1>
      </div>
      <div className="mainBody">
       <Accordion/>
       <Accordion/>
       <Accordion/>
      </div>
      {/* <p className="intro">
        Sensitive data exposure is a common threat to many website users,
        especially when the sensitive data is not encrypted. Important
        information such as personal identifiable information (PII), health
        records, credit cards, and personal data require protection online. Not
        only does there need to be some form of encryption, but it should be
        strong. A strong key generation, algorithm, and protocols should be
        implemented to ensure that sensitive data is not exposed.
      </p>
      <table>
        <tbody>
          <tr>
            <th>
              <h1>Examples of Sensitive Data Expsoure</h1>
            </th>
            <th classname="protection">
              <h1>Protection Against Broken Authentication</h1>
            </th>
          </tr>
          <tr>
            <td className="brokenAuth">
              <h2>Improper decryption</h2>
              <p>
                Some web applications will encrypt data when stored in the
                database, but when this data is being retrieved on the front-end
                it can be decrypted into plain-text, making it viewable to the
                user. This scenario can be exploited via SQL injection,
                retrieving data in plain-text. There are privacy laws and
                regulatory requirements depending on the country, that specify
                which form of data is sensitive.
              </p>
              <h2>Failure to implement TLS or Weak Encryption</h2>
              <p>
                Transport Layer Security is a protocol implemented to ensure
                privacy and security for data and communication on the network.
                TLS is primarily used for encrypting communication between
                websites and servers. Failure to implement this can lead to data
                breaches or distributed denial of service (DDoS) attacks. Secure
                Hypertext Transfer Protocol (HTTPS) implements TLS encryption
                over the HTTP protocol. Using HTTP would mean having
                non-encrypted requests and responses. If a hacker intercepts a
                response, they can control an authenticated session giving them
                access to sensitive data.
              </p>
              <h2>Poor Hashing or Unsalted Passwords</h2>
              <p>
                Passing a password through a simple hash function could be
                cracked by brute force via GPUs, this could be problematic if a
                database stores unsalted and poorly hashed passwords and an
                attacker gains access to this database.
              </p>
            </td>
            <td className="brokenAuthProtection"></td>
          </tr>
        </tbody>
      </table> */}
    </TitleStyle>
  );
};

export default SensitiveDataExposure;
