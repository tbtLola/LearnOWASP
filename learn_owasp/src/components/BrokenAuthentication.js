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
  .bodyDisplay {
    top: 250px;
    position: relative;
  }
`;

const BrokenAuthentication = () => {
  return (
    <TitleStyle>
      <div className="headerDisplay">
      <h1>2. Broken Authentication</h1>
      </div>
      <div className="bodyDisplay">
      <Accordion
      title="What is Broken Authentication?"
      definition=""/>
      <Accordion
      title="Examples of Broken Authentication"/>
      <Accordion
      title="Preventing Broken Authentication"/>
      </div>
      {/* <p className="intro">
        Broken authentication is a vulnerability exploited by attackers via
        unauthorized account access. When the attacker is able to breach user
        accounts, the authentication is "broken". The attacker can compromise
        different elements associated with authentication such as usernames,
        passwords, session ID vulnerabilities, and other login credentials. With
        these different authentication elements, the attacker is capable of
        bypassing authentication methods implemented by the web applications.
        Once an attacker infiltrates the account, they can access or modify
        information for which they are unauthorized to do so.
      </p>
      <table>
        <tbody>
          <tr>
            <th>
              <h1>Examples of Broken Authentication</h1>
            </th>
            <th classname="protection">
              <h1>Protection Against Broken Authentication</h1>
            </th>
          </tr>
          <tr>
            <td className="brokenAuth">
              <h2>Credential Stuffing</h2>
              <p>
                Credential stuffing is the process of entering known username,
                email addresses and passwords from a database of login
                credentials that were stolen by the attacker. This process is
                usually done through exhaustive automated login requests against
                a website. The attacker will use automated tools such as
                Selenium (A tool mostly used for front-end testing) to attempt
                logins using previously discovered login credentials until
                successful.
              </p>
              <h2>Re-use of passwords and poor passwords</h2>
              <p>
                Re-use of passwords or use of poorly chosen passwords will put
                users in a vulnerable state. There was a survey conducted
                indicating that 81% of users have used the same password for two
                or more sites and 25% of users will re-use the same password
                across a majority of their accounts online. If an attacker is
                able to breach data and access the passwords to one account,
                then they can attempt to log into a different website with the
                same credentials via credential stuffing.
                <br></br>
                <br></br>
                If a poor password is chosen, then an attacker may attempt using
                brute force to guess the password and eventually login.
                <br></br>
                <br></br>
                In addition to this, if the attacker can gain access to the
                password database and the password is not hashed and salted,
                instead if it is stored in plain text then this would be a poorl
                form of stored credentials that could lead to broken
                authentication.
              </p>
              <h2>Application sessions incorrectly implemented</h2>
              <p>
                If a session timeout is not properly implemented or set, then an
                attacker could could access the user's information after the
                user had forgotten to logout.
              </p>
            </td>
            <td className="brokenAuthProtection">
              <h2>Protection against Broken Authentication</h2>
              <p>
                - Implement multi-factor authentication. Having this in place
                can prevent large-scale automated attacks such as brute-force
                and credentials stuffing. This would require the user to be
                present and authenticating themselves in a different way other
                than simply entering login credentials. 
                <br></br>
                - Implement validation
                against weak passwords at the time of sign-up,
              </p>
            </td>
          </tr>
        </tbody>
      </table> */}
    </TitleStyle>
  );
};

export default BrokenAuthentication;
