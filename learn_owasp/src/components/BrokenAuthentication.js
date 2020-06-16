//https://securityboulevard.com/2019/08/what-is-session-hijacking-your-quick-guide-to-session-hijacking-attacks/
//https://hdivsecurity.com/owasp-broken-authentication


import React from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import BrokAuth from "../images/BrokenAuthenticationMain.png";
import BrokAuthOne from "../images/BrokenAuthOne.png";
import BrokAuthTwo from "../images/BrokenAuthTwo.png";
import BrokAuthThree from "../images/BrokenAuthThree.png";

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
      definition="Broken authentication is a vulnerability exploited by attackers via
      unauthorized account access. When the attacker is able to breach user
      accounts, the authentication is 'broken'. The attacker can compromise
      different elements associated with authentication such as usernames,
      passwords, session ID vulnerabilities, and other login credentials. With
      these different authentication elements, the attacker is capable of
      bypassing authentication methods implemented by the web applications.
      Once an attacker infiltrates the account, they can access or modify
      information for which they are unauthorized to do so."
      imgBrokAuth={BrokAuth}/>
      <Accordion
      title="Examples of Broken Authentication"
      subheading="Credential Stuffing"
      definition="Credential stuffing is the process of entering known username,
      email addresses and passwords from a database of login
      credentials that were stolen by the attacker. This process is
      usually done through exhaustive automated login requests against
      a website. The attacker will use automated tools such as
      Selenium (A tool mostly used for front-end testing) to attempt
      logins using previously discovered login credentials until
      successful."
      image={BrokAuthOne}

      subheadingTwo="Re-use of passwords and poor passwords"
      definitionTwo=" Re-use of passwords or use of poorly chosen passwords will put
      users in a vulnerable state. There was a survey conducted
      indicating that 81% of users have used the same password for two
      or more sites and 25% of users will re-use the same password
      across a majority of their accounts online. If an attacker is
      able to breach data and access the passwords to one account,
      then they can attempt to log into a different website with the
      same credentials via credential stuffing.If a poor password is chosen,
      then an attacker may attempt using brute force to guess the password and
       eventually login. In addition to this, if the attacker can gain access to the
       password database and the password is not hashed and salted,
       instead if it is stored in plain text then this would be a poorl
       form of stored credentials that could lead to broken
       authentication."

       subheadingThree="Application sessions incorrectly implemented"
       definitionThree="There are many vulnerabilities around improper user session and cookie management. 
       If a session timeout is not properly implemented or set, then an
       attacker could could access the user's information after the
       user had forgotten to logout. 'Session side jacking' as displayed in figure 1a below, is an example
       of improper session security, when TLS encrpytion is only being implemented for a login page,  an attacker can 
       intercept session cookies right after a user has been authenticated on the server and granted a session, as they 
       monitor the traffic in the network. With this interception, the attacker is able to hijack the user's session
       and perform unauthorized activity on the web application."
       imgBrokAuthOne={BrokAuthTwo}
      />
      <Accordion
      title="Preventing Broken Authentication"
      definition="Implementing multi-factor authentication is one of the ways to 
      add extra security around authorization for a web application. Having this in place
      can prevent large-scale automated attacks such as brute-force and credentials stuffing. 
      This would require the user to be present and authenticating themselves in a different way other
      than simply entering login credentials. An attacker would be required to use a more 
      sophisticated tool to bypass this. For example, a user would enter their log in credentials and afterwards
      would receive a text with a number that they are asked to enter into the front end in order to 
      log into their account. "
      imgBrokAuth={BrokAuthThree}
      definitionTwo = "Implementing validation against weak passwords at the time of sign-up.
      This is a way to prevent users from entering in a poor password that can be easily guessed
      through brute force or just randomly. On the topic of sign up and credentials, it is also important
      to ensure that the path for credential recovery is secure, such that only the intended user
      is able to access this path when needed. Limiting failed log in attempts will help guard against
      a credential stuffing attack."
      definitionThree ="To help protect and secure user sessions, make sure that TLS/SSL is implemented on 
      all pages and not just specifically the log in page. Ensure that session IDs are always random and not 
      something that follows a specific pattern. Session IDs should not be in the URL. Implementation of 
      session timeouts is popular amongst web application in the event that a user leaves their computer, an attacker
      would be locked out of that session."/>
      </div>
    </TitleStyle>
  );
};

export default BrokenAuthentication;
